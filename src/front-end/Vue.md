---
title: Vue
icon: vue
date: 2024-04-07
---

## 响应式：核心

### ref

接受任意值（基本类型、引用类型）作为参数，返回一个响应式的 ref 对象。通过 `.value` 可以访问这个数据。

在模板中 ref 会自动解包，不需要通过 `.value` 访问。

```ts
import { ref } from "vue"

const count = ref(0)

count // Ref<0>
count.value // 0
count.value++
count.value // 1
```

**源码解析**。调用 `ref()` 时，会通过 `createRef()` 创建一个 RefImpl 实例，在 Class RefImpl 的内部，如果传入的值是基本类型，则直接返回该值；如果是引用类型，会调用 `reactive()` 进行深层次的响应式。最后，通过 `trackRefValue()` 进行依赖的收集，通过 `triggerRefValue()` 进行依赖的更新。

```ts
/* reactivity/src/ref.ts */

function ref(value?: unknown) {
  return createRef(value, false)
}

function shallowRef(value?: unknown) {
  return createRef(value, true)
}

function createRef(rawValue: unknown, shallow: boolean) {
  // 如果传入的值是一个 ref，直接返回
  if (isRef(rawValue)) {
    return rawValue
  }
  // 否则创建一个 RefImpl 实例
  return new RefImpl(rawValue, shallow)
}

class RefImpl<T> {
  private _value: T // 真正读取的值
  private _rawValue: T
  
  public dep?: Dep = undefined
  public readonly __v_isRef = true
  
  constructor(value: T, public readonly __v_isShallow: boolean) {
    this._rawValue = __v_isShallow ? value : toRaw(value)
    // 如果是 shallowRef，直接返回 .value 的值，如果 value 是引用类型，不会做进一步的响应式
    // 如果是 ref，会调用 toReactive，进行深层次的响应式
    // const toReactive = (value: T): T => isObject(value) ? reactive(value) : value
    // toReactive：如果 value 是引用类型，就会调用 reactive(value)，否则直接返回 value
    this._value = __v_isShallow ? value : toReactive(value)
  }
  
  get value() {
    trackRefValue(this) // 进行依赖的收集
    return this._value
  }
  
  set value(newVal) {
    newVal = this.__v_isShallow ? newVal : toRaw(newVal)
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal
      this._value = this.__v_isShallow ? newVal : toReactive(newVal)
      triggerRefValue(this, newVal) // 进行依赖的更新
    }
  }
}
```

### reactive

只能接受**引用类型**作为参数，返回一个响应式的代理对象。可以直接访问这个代理对象上的属性。

```ts
import { reactive } from "vue"

const state = reactive({ count: 0 })

state // Reactive<{ count: 0 }>
state.count // 0
```

**源码解析**。调用 `reactive()` 时，会通过 `createReactiveObject()` 创建一个 reactive，在这个方法中，进行一些判断：1. 传入的值是否是基本类型，是的话报出警告；2. 传入的值是否被代理过；3. 代理对象是否被缓存；4. 代理对象是否在白名单中。如果以上条件都不满足，则将传入的值进行 Proxy 代理，然后通过 WeakMap 进行缓存。

```ts
/* reactivity/src/reactive.ts */

function reactive(target: object) {
  // 如果传入的值是一个只读对象，直接返回
  if (isReadonly(target)) {
    return target
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  )
}

function shallowReactive<T extends object>(target: T): ShallowReactive<T> {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  )
}

function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>,
  proxyMap: WeakMap<Target, any>
) {
  // 如果传入的值是基本类型，报一个警告
  if (!isObject(target)) {
    if (__DEV__) {
      warn(`value cannot be made reactive: ${String(target)}`)
    }
    return target
  }
  // 如果传入的值已经被代理过了，直接返回
  // 有一个例外: 将代理对象变为只读属性
  if (
    target[ReactiveFlags.RAW] &&
    !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
  ) {
    return target
  }
  // 从缓存中获取代理对象，如果存在的话直接返回
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }
  // 如果代理对象在白名单中，直接返回
  const targetType = getTargetType(target)
  if (targetType === TargetType.INVALID) {
    return target
  }
  // 进行 Proxy 代理
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  )
  // 缓存代理对象
  proxyMap.set(target, proxy)
  return proxy
}
```

### computed

**函数式写法**。接受一个 getter 函数，返回一个只读的 ref 对象。

```ts
import { ref, computed } from "vue"

const count = ref(1)

const double = computed(() => count.value * 2)
```

**选项式写法**。接受一个带有 `get` 和 `set` 函数的对象，返回一个可写的 ref 对象。

```ts
import { ref, computed } from "vue"

const first = ref("Even")
const last = ref("You")

const full = computed({
  get: () => first.value + " " + last.value,
  set: (value) => {
    [first.value, last.value] = value.split(" ")
  }
})
```

**源码解析**。调用 `computed()` 时，会根据传入的参数判断是否使用 setter，然后将 getter 和 setter 传入 ComputedRefImpl 类。在这个类中，定义了一个脏值：`_dirty`，标记是否需要重新计算。如果 `_dirty` 为 true，则进行重新计算；否则直接将 `_value` 返回，并将结果缓存，下一次访问时，如果 `_dirty` 为 false，则从缓存中取值。这种机制称为**脏值检测**。

> [!important]
>
> 只有当依赖发生变化的时候，`_dirty` 才会被设置为 true，这时候就需要重新计算结果。

```ts
/* reactivity/src/computed.ts */

function computed<T>(
  getterOrOptions: ComputedGetter<T> | WritableComputedOptions<T>,
  debugOptions?: DebuggerOptions,
  isSSR = false
) {
  let getter: ComputedGetter<T>
  let setter: ComputedSetter<T>
  
  const onlyGetter = isFunction(getterOrOptions)
  
  // 如果传入一个函数，为函数式用法
  if (onlyGetter) {
    // 将传入的函数赋值给 getter
    getter = getterOrOptions
    // 不允许设置 setter
    setter = __DEV__
      ? () => {
          console.warn('Write operation failed: computed value is readonly')
        }
      : NOOP
  }
  // 如果传入的不是函数，为选项式用法
  else {
    // 将 get 选项赋值给 getter
    getter = getterOrOptions.get
    // 将 set 选项赋值给 setter
    setter = getterOrOptions.set
  }
  
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR)
  
  if (__DEV__ && debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack
    cRef.effect.onTrigger = debugOptions.onTrigger
  }
  
  return cRef as any
}

class ComputedRefImpl<T> {
  public dep?: Dep = undefined
  
  private _value!: T // 真正读取的值
  public readonly effect: ReactiveEffect<T>
  
  public readonly __v_isRef = true
  public readonly [ReactiveFlags.IS_READONLY]: boolean = false
  
  public _dirty = true // 脏值，是否需要重新计算
  public _cacheable: boolean
  
  constructor(
    getter: ComputedGetter<T>,
    private readonly _setter: ComputedSetter<T>,
    isReadonly: boolean,
    isSSR: boolean
  ) {
    // 只有依赖发生变化的时候，才会执行，并将脏值设为 true，表示需要进行重新计算了
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true
        triggerRefValue(this)
      }
    })
    this.effect.computed = this
    this.effect.active = this._cacheable = !isSSR
    this[ReactiveFlags.IS_READONLY] = isReadonly
  }
  
  get value() {
    // the computed ref may get wrapped by other proxies e.g. readonly() #3376
    const self = toRaw(this)
    trackRefValue(self)
    // 如果 _dirty 为 true，则进行重新计算；否则直接返回
    if (self._dirty || !self._cacheable) {
      self._dirty = false
      self._value = self.effect.run()! // run() 就是读取 computed() 的返回值
    }
    return self._value
  }
  
  set value(newValue: T) {
    this._setter(newValue)
  }
}
```

### watch

> [!warning]
>
> 监听引用类型时，新值和旧值是一样的。下面源码解析中会讲到，watch 更新旧值的方式是，直接将之前的新值赋值给现在的旧值，如果是引用类型的话，就会共用同一个指针。所以推荐**监听具体的某个属性**。

监听 ref（基本类型）。

```ts
import { ref, watch } from "vue"

const count = ref(0)

watch(count, (value, oldValue) => {
  /* ... */
})

const fooRef = ref()
const barRef = ref()

// 监听多个源，回调函数接受两个数组，分别对应来源数组中的新值和旧值
watch([fooRef, barRef], ([foo, bar], [oldFoo, oldBar]) => {
  /* ... */
})
```

监听 ref（引用类型）。如果需要监听对象内部结构的改变，需要开启深度监听。

```ts
import { ref, watch } from "vue"

const state = ref({ count: 0 })

watch(state, (value, oldValue) => {
  value === oldValue // true
}, {
  deep: true
})
```

监听 `ref.value`（基本类型）。需要使用 getter 函数。

```ts
import { ref, watch } from "vue"

const count = ref(0)

watch(() => count.value, (value, oldValue) => {
  /* ... */
})
```

监听 `ref.value`（引用类型）。不需要使用 getter 函数，并且默认开启深度监听。

```ts
import { ref, watch } from "vue"

const state = ref({ count: 0 })

watch(state.value, (value, oldValue) => {
  value === oldValue // true
})
```

监听 reactive，默认开启深度监听。

```ts
import { reactive, watch } from "vue"

const state = reactive({ count: 0 })

watch(state, (value, oldValue) => {
  value === oldValue // true
})
```

**源码解析**。调用 `watch()` 时，其实就是调用核心函数 `doWatch()`。以下是 `doWatch()` 的黄金解析：

格式化 source，先初始化一个 getter，然后对 source 进行判断：如果 source 是一个 ref，则将 `ref.value` 赋值给 getter；如果 source 是一个 reactive，那么直接将其赋值给 getter，并将 deep 设置为 true，也就是默认开启深度监听；如果 source 是一个数组，就会对它进行遍历（如果数组元素是 ref，就返回它的 value；如果是 reactive，就会调用 `traverse()`，递归地对 reactive 中的每个属性进行监听，也就是**深度监听**；如果是一个函数，则对它进行加工，这里不做研究）；如果 source 是一个函数，则进行加工，有 cb 就执行 watch，没有就执行 watchEffect，不做深入研究。

判断 deep 选项，如果为 true，就调用 `traverse()` 进行深度监听。

初始化 scheduler（调度器）并判断 flush 选项，如果值为 "sync"，则将任务赋值给调度器，同步执行（任务）；如果值为 "post"，则在组件更新之后执行（任务）；如果值为 "pre"，则在组件更新之前执行（任务），**它也是默认值**。然后收集依赖，等待任务的执行。

判断 immediate 选项，如果为 true，则立即执行（任务）。

执行任务时，先获取新值，然后判断如果 immediate 为 true，则将旧值赋值为 undefined；如果没有开启 immediate，则给旧值做初始化，也就是将 `ref(value)` 的默认值赋值给旧值。最后更新旧值，将新值直接赋值给旧值（下一次使用），如果是引用类型的话，就会共用同一个指针，所以会导致之后的新值和旧值都相同。

```ts
/* runtime-core/src/apiWatch.ts */

function watch<T = any, Immediate extends Readonly<boolean> = false>(
  source: T | WatchSource<T>,
  cb: any,
  options?: WatchOptions<Immediate>
): WatchStopHandle {
  // ...
  return doWatch(source as any, cb, options)
}

function doWatch(
  source: WatchSource | WatchSource[] | WatchEffect | object,
  cb: WatchCallback | null,
  { immediate, deep, flush, onTrack, onTrigger }: WatchOptions = EMPTY_OBJ
): WatchStopHandle {
  // ...
  
  const instance = currentInstance
  
  // 初始化 getter
  let getter: () => any
  let forceTrigger = false
  let isMultiSource = false
  
  // 如果 source 是 ref，将 `() => ref.value` 赋值给 getter
  if (isRef(source)) {
    getter = () => source.value
    forceTrigger = isShallow(source)
  }
  // 如果 source 是 reactive，将 `() => reactive` 赋值给 getter
  else if (isReactive(source)) {
    getter = () => source
    deep = true
  }
  // 如果 source 是数组
  else if (isArray(source)) {
    isMultiSource = true
    forceTrigger = source.some(isReactive)
    getter = () =>
      source.map(s => {
        // 如果是 ref，返回 `ref.value`
        if (isRef(s)) {
          return s.value
        }
        // 如果是 reactive，调用 `traverse()`，递归地对 reactive 中的每个属性进行监听
        else if (isReactive(s)) {
          return traverse(s)
        }
        // 如果是一个函数，进行加工
        else if (isFunction(s)) {
          return callWithErrorHandling(s, instance, ErrorCodes.WATCH_GETTER)
        }
      })
  }
  // 如果 source 是一个函数，进行加工
  else if (isFunction(source)) {
    // 如果有 cb，执行 watch
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, ErrorCodes.WATCH_GETTER)
    }
    // 如果没有 cb，执行 watchEffect
    else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return
        }
        if (cleanup) {
          cleanup()
        }
        return callWithAsyncErrorHandling(
          source,
          instance,
          ErrorCodes.WATCH_CALLBACK,
          [onCleanup]
        )
      }
    }
  }
  
  // 如果 deep 选项为 true，调用 `traverse()` 进行深度监听
  if (cb && deep) {
    const baseGetter = getter
    getter = () => traverse(baseGetter())
  }
  
  let cleanup: () => void
  let onCleanup: OnCleanup = (fn: () => void) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, ErrorCodes.WATCH_CLEANUP)
    }
  }
  
  // ...
  
  // 初始化旧值
  let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE
  // 调度任务
  const job: SchedulerJob = () => {
    if (!effect.active) {
      return
    }
    if (cb) {
      // 获取新值
      const newValue = effect.run()
      if (deep || forceTrigger /* || ...一些条件 */) {
        if (cleanup) {
          cleanup()
        }
        // 这个就是调用 `watch()` 时的回调函数 cb 以及参数 newValue, oldValue, onCleanup
        callWithAsyncErrorHandling(cb, instance, ErrorCodes.WATCH_CALLBACK, [
          newValue,
          // 如果 immediate 为 true，将旧值赋值为 undefined，否则将 `ref()` 的默认值赋值给旧值
          oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
          onCleanup
        ])
        // 更新旧值，将新值直接赋值给旧值，如果是引用类型的话，就会共用同一个指针
        oldValue = newValue
      }
    } else {
      // watchEffect
      effect.run()
    }
  }
  
  job.allowRecurse = !!cb

  // 初始化调度器
  let scheduler: EffectScheduler
  if (flush === 'sync') {
    // 同步执行
    scheduler = job as any
  } else if (flush === 'post') {
    // 在组件更新之后执行
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense)
  } else {
    // default: 'pre'
    scheduler = () => {
      if (!instance || instance.isMounted) {
        // 在组件更新之前执行
        queuePreFlushCb(job)
      } else {
        job()
      }
    }
  }
  
  // 收集依赖
  const effect = new ReactiveEffect(getter, scheduler)
  
  if (cb) {
    // 立即执行
    if (immediate) {
      job()
    }
    // 给旧值做初始化
    else {
      oldValue = effect.run()
    }
  } else if (flush === 'post') {
    queuePostRenderEffect(
      effect.run.bind(effect),
      instance && instance.suspense
    )
  } else {
    effect.run()
  }
  
  return () => {
    effect.stop()
    if (instance && instance.scope) {
      remove(instance.scope.effects!, effect)
    }
  }
}
```

## 响应式：进阶

### toRef

**对象属性签名**。基于响应式对象的一个属性，创建一个对应的 ref，它与源属性保持同步。

> [!caution]
>
> `toRef()` 传入的值必须本身是响应式的！

```ts
import { reactive, toRef } from "vue"

const state = reactive({ foo: 1, bar: 2 })

// 双向 ref，会与源属性同步
const fooRef = toRef(state, "foo")

// 更改该 ref 会更新源属性
fooRef.value++
state.foo // 2

// 更改源属性也会更新该 ref
state.foo++
fooRef.value // 3
```

**规范化签名（3.3+）**。

> [!warning]
>
> 官网写的，没看懂。

```ts
// 按原样返回现有的 ref
toRef(existingRef)

// 创建一个只读的 ref，当访问 .value 时会调用此 getter 函数
toRef(() => props.foo)

// 从非函数的值中创建普通的 ref
// 等同于 ref(1)
toRef(1)
```

### toRefs

将一个响应式对象转换为普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。

常用于 ref，reactive 对象的解构。

> [!tip]
>
> 每个单独的 ref 都是使用 `toRef()` 创建的。可以看作是多个 `toRef()` 的语法糖。

```ts
import { ref, toRefs } from "vue"

const state = ref({ foo: 1, bar: 2 })

const { foo, bar } = toRefs(state.value)
foo // Ref<1>
bar // Ref<2>
```

### toRaw

返回 Proxy 的原始对象。

用于让 reactive 对象退出响应式，合理地使用可以减少代理访问和降低跟踪开销。

```ts
import { reactive, toRaw } from "vue"

const origin = { foo: 1, bar: 2 }
const state = reactive(origin)

state // Reactive<{ foo: 1, bar: 2 }>
toRaw(state) // { foo: 1, bar: 2 }
toRaw(state) === origin // true
```

## 响应式原理 v3

> [!note]
>
> 以下全部为自定义实现（简化版）。

### effect

用于触发视图更新。在全局环境下创建一个 weakMap 容器，用于存储并建立 target 与 depsMap 之间的关系。

```ts
/* effect.ts */

let activeEffect: Function

const effect = (fn: Function) => {
  const _effect = function () {
    activeEffect = _effect
    fn()
  }
  
  _effect()
}

type Deps = Set<Function>
type DepsMap = Map<any, Deps>

const targetMap = new WeakMap<object, DepsMap>()
```

### track

用于收集依赖，触发时将副作用函数存到 deps 中，等待将来触发依赖更新时执行。

```ts
/* effect.ts */

const track = (target: object, key: unknown) => {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  
  let deps = depsMap.get(key)
  if (!deps) {
    deps = new Set()
    depsMap.set(key, deps)
  }
  
  deps.add(activeEffect)
}
```

### trigger

用于更新依赖，将 deps 中的副作用函数取出执行。

```ts
/* effect.ts */

const trigger = (target: object, key: unknown) => {
  const depsMap = targetMap.get(target)
  if (!depsMap) return
  
  const deps = depsMap.get(key)
  if (!deps) return
  
  deps.forEach(effect => effect())
}
```

### reactive

**数据代理**。使用 Proxy 进行数据代理，并通过递归实现深度代理。访问数据时执行 track 收集依赖，修改数据时执行 trigger 更新依赖。

```ts
/* reactive.ts */

import { track, trigger } from "./effect.js"

const isObject = (target: any) => Object.prototype.toString.call(target) === "[object Object]"

const reactive = <T extends object>(target: T): T => {
  return new Proxy(target, {
    get(target: T, key: string | symbol, receiver: any) {
      const result = Reflect.get(target, key, receiver) as object
      track(target, key)
      if (isObject(result)) {
        return reactive(result)
      }
      return result
    },
    
    set(target: T, key: string | symbol, value: any, receiver: any) {
      const result = Reflect.set(target, key, value, receiver)
      trigger(target, key)
      return result
    }
  })
}
```

```ts
/* main.ts */

import { reactive } from "./reactive.js"
import { effect } from "./effect.js"

const app: HTMLDivElement = document.querySelector("#app")!

const state = reactive({ count: 0 })

effect(() => {
  app.innerText = `${ state.count }`
})
```

## 响应式原理 v2

### 数据代理

- Vue 实例中的 data 数据，默认在 _data 属性中，如果想要操作这个数据，需要通过 _data 访问。

- 为了更方便地操作数据，可以将 _data 中的数据拷贝到实例上。访问实例上的数据，就是访问 _data 的数据。

- 过程：

  1. 遍历 _data 中的数据；

  2. 使用 `Object.defineProperty` 给实例扩展一个同名属性；

  3. 通过 getter 和 setter 监听这些属性；

  4. 读取属性时，使用 `getter` 返回在 `_data` 中同名属性的值；

  5. 修改属性时，使用 `setter` 设置为 `_data` 中同名属性的值。

### 数据劫持

- 目的：监听数据（收集获取当前数据的模板信息，通知收集的所有模板进行更新数据）。

- 原理：`Object.defineProperty`

- 过程：

  1. 遍历并重写 `_data` 中的数据，通过添加存取器监听；

  2. 读取属性时，收集当前的模板信息；

  3. 修改属性时，通知所有模板重新获取最新的值。

### 观察者模式

- 观察者模式：当一个对象中的数据被多个对象所依赖，并且当被依赖的对象发生改变时会通知所有依赖项。

- 被依赖的对象称为目标对象，依赖项称为观察者。

### 发布与订阅者模式

- 发布与订阅者模式其实是属于观察者模式中的一个细分；

- 观察者模式中的观察者被称为 "订阅者"，目标对象被称为 "发布者"；

- 发布者和订阅者由订阅中心来实现数据的通信，并且发布者和订阅者都不知道对方的存在；

- 当订阅者订阅数据的时候，来到订阅中心，订阅中心收集所有的订阅者；

- 当发布者发布信息的时候，先传到订阅中心，再由订阅中心统一传给订阅者。

### 响应式原理

- 当 data 中的数据发生变化的时候，视图也会随之更新。

- 主要由三个部分构成：

  - 数据代理

  - 数据劫持

  - 发布与订阅者模式

- 详细过程：

  1. 使用 `Object.defineProperty` 完成数据代理，将 _data 中的数据拷贝到实例上，我们访问实例上的数据，其实就是访问 _data 中的数据。

  2. 在 Observer 类（发布者）中，主要通过 `Object.defineProperty` 对 _data 中的所有属性进行重写，并添加 getter 和 setter：1. 在 getter 中建立 dep（订阅中心的实例化对象）和 watcher（订阅者的实例化对象）的关系，让 dep 收集依赖（访问当前数据的 watcher）；2. 在 setter 中让 dep 通知所有依赖（watcher）更新数据。

  3. 在 Dep 类（订阅中心）中，有收集所有 watcher 的方法，和通知所有 watcher 更新数据的方法。当 _data 中每一个属性被劫持的时候，都会创建一个 dep（Dep 的实例化对象），在 getter 中调用 dep 的 depend 方法收集依赖，在 setter 中调用 dep 的 notify 方法通知更新。

  4. 在 Watcher 类（订阅者）中，有获取数据的 get 方法和更新视图的 update 方法，每一个组件都对应一个 Wathcer。watcher 会在第一次获取数据时被 dep 收集，当收到更新要求的时候，dep 就会通知所有的 watcher（Wacther 的实例化对象）调用 update 方法重新获取数据并更新视图。

## diff 算法 v3

### 虚拟 DOM

虚拟 DOM 就是通过 JS 来生成一个 AST 节点数。

为什么要有虚拟 DOM？为什么不直接去操作 DOM，而是使用 JS 去描述 DOM 对象？

因为在一个 DOM 身上，它的属性是非常多的，所以直接操作 DOM 是非常浪费性能的。

### 无 key diff 算法

> [!important]
>
> 无 key 的情况下，旧节点是不会进行复用的，非常浪费性能。

1. 通过 for 循环对每个新节点进行 patch，并重新渲染元素。无 key 的情况下，新节点会直接把旧节点替换掉。

2. 删除操作。如果旧节点有剩余，进行删除操作。

3. 新增操作。如果新节点有剩余，进行新增操作。

```ts
/* runtime-core/src/renderer.ts */

const patchUnkeyedChildren = (
  c1: VNode[],            // 旧节点
  c2: VNodeArrayChildren, // 新节点
  container: RendererElement,
  anchor: RendererNode | null,
  parentComponent: ComponentInternalInstance | null,
  parentSuspense: SuspenseBoundary | null,
  namespace: ElementNamespace,
  slotScopeIds: string[] | null,
  optimized: boolean,
) => {
  c1 = c1 || EMPTY_ARR
  c2 = c2 || EMPTY_ARR
  const oldLength = c1.length
  const newLength = c2.length
  const commonLength = Math.min(oldLength, newLength)
  let i
  // 1. 通过 for 循环对每个新节点进行 patch，并重新渲染元素
  for (i = 0; i < commonLength; i++) {
    const nextChild = (c2[i] = optimized
      ? cloneIfMounted(c2[i] as VNode)
      : normalizeVNode(c2[i]))
    // 无 key 的情况下，新节点会直接把旧节点替换掉
    patch(
      c1[i],
      nextChild,
      container,
      null,
      parentComponent,
      parentSuspense,
      namespace,
      slotScopeIds,
      optimized,
    )
  }
  // 2. 如果旧节点有剩余，进行删除操作
  if (oldLength > newLength) {
    // 删除旧节点
    unmountChildren(
      c1,
      parentComponent,
      parentSuspense,
      true,
      false,
      commonLength,
    )
  }
  // 3. 如果新节点有剩余，进行新增操作
  else {
    // 增加新节点
    mountChildren(
      c2,
      container,
      anchor,
      parentComponent,
      parentSuspense,
      namespace,
      slotScopeIds,
      optimized,
      commonLength,
    )
  }
}
```

### 有 key diff 算法

1. 前序对比算法。

2. 尾序对比算法。

3. 如果新节点有剩余，就需要挂载新节点。

4. 如果旧节点有剩余，就需要卸载旧节点。

5. 乱序 或 无序，需要求最长递增子序列。


```ts
/* runtime-core/src/renderer.ts */

const patchKeyedChildren = (
  c1: VNode[],
  c2: VNodeArrayChildren,
  container: RendererElement,
  parentAnchor: RendererNode | null,
  parentComponent: ComponentInternalInstance | null,
  parentSuspense: SuspenseBoundary | null,
  namespace: ElementNamespace,
  slotScopeIds: string[] | null,
  optimized: boolean,
) => {
  let i = 0
  const l2 = c2.length
  let e1 = c1.length - 1 // prev ending index
  let e2 = l2 - 1 // next ending index
  
  // 1. 前序对比算法
  // (a b) c
  // (a b) d e
  while (i <= e1 && i <= e2) {
    const n1 = c1[i]
    const n2 = (c2[i] = optimized
      ? cloneIfMounted(c2[i] as VNode)
      : normalizeVNode(c2[i]))
    if (isSameVNodeType(n1, n2)) {
      patch(
        n1,
        n2,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
      )
    } else {
      break
    }
    i++
  }
  
  // 2. 尾序对比算法
  // a (b c)
  // d e (b c)
  while (i <= e1 && i <= e2) {
    const n1 = c1[e1]
    const n2 = (c2[e2] = optimized
      ? cloneIfMounted(c2[e2] as VNode)
      : normalizeVNode(c2[e2]))
    if (isSameVNodeType(n1, n2)) {
      patch(
        n1,
        n2,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
      )
    } else {
      break
    }
    e1--
    e2--
  }
  
  // 3. 如果新节点有剩余，就需要挂载新节点
  // (a b)
  // (a b) c
  // i = 2, e1 = 1, e2 = 2
  // (a b)
  // c (a b)
  // i = 0, e1 = -1, e2 = 0
  if (i > e1) {
    if (i <= e2) {
      const nextPos = e2 + 1
      const anchor = nextPos < l2 ? (c2[nextPos] as VNode).el : parentAnchor
      while (i <= e2) {
        patch(
          null,
          (c2[i] = optimized
            ? cloneIfMounted(c2[i] as VNode)
            : normalizeVNode(c2[i])),
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized,
        )
        i++
      }
    }
  }
  
  // 4. 如果旧节点有剩余，就需要卸载旧节点
  // (a b) c
  // (a b)
  // i = 2, e1 = 2, e2 = 1
  // a (b c)
  // (b c)
  // i = 0, e1 = 0, e2 = -1
  else if (i > e2) {
    while (i <= e1) {
      unmount(c1[i], parentComponent, parentSuspense, true)
      i++
    }
  }
  
  // 5. 乱序/无序
  // [i ... e1 + 1]: a b [c d e] f g
  // [i ... e2 + 1]: a b [e d c h] f g
  // i = 2, e1 = 4, e2 = 5
  else {
    const s1 = i // prev starting index
    const s2 = i // next starting index
    
    // 5.1 构建新节点的映射关系
    // key: [1, 2, 3, 4, 5]
    // index: [0, 1, 2, 3, 4]
    // key: [5, 4, 3, 2, 1]
    // index: [0, 1, 2, 3, 4]
    // 5=>0  4=>1  3=>2  2=>3  1=>5
    const keyToNewIndexMap: Map<string | number | symbol, number> = new Map()
    for (i = s2; i <= e2; i++) {
      const nextChild = (c2[i] = optimized
        ? cloneIfMounted(c2[i] as VNode)
        : normalizeVNode(c2[i]))
      if (nextChild.key != null) {
        if (__DEV__ && keyToNewIndexMap.has(nextChild.key)) {
          warn(
            `Duplicate keys found during update:`,
            JSON.stringify(nextChild.key),
            `Make sure keys are unique.`,
          )
        }
        keyToNewIndexMap.set(nextChild.key, i)
      }
    }
    
    // 5.2 遍历旧节点，并对其进行 patch 比较
    // 匹配节点并删除不存在的节点
    let j
    let patched = 0
    const toBePatched = e2 - s2 + 1
    let moved = false
    // used to track whether any node has moved
    let maxNewIndexSoFar = 0
    // works as Map<newIndex, oldIndex>
    // Note that oldIndex is offset by +1
    // and oldIndex = 0 is a special value indicating the new node has
    // no corresponding old node.
    // used for determining longest stable subsequence
    const newIndexToOldIndexMap = new Array(toBePatched)
    for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0
    
    for (i = s1; i <= e1; i++) {
      const prevChild = c1[i]
      // 如果有多余的旧节点，就将其删除
      if (patched >= toBePatched) {
        unmount(prevChild, parentComponent, parentSuspense, true)
        continue
      }
      let newIndex
      if (prevChild.key != null) {
        newIndex = keyToNewIndexMap.get(prevChild.key)
      } else {
        // key-less node, try to locate a key-less node of the same type
        for (j = s2; j <= e2; j++) {
          if (
            newIndexToOldIndexMap[j - s2] === 0 &&
            isSameVNodeType(prevChild, c2[j] as VNode)
          ) {
            newIndex = j
            break
          }
        }
      }
      // 如果新节点不包含旧节点，也将其删除
      if (newIndex === undefined) {
        unmount(prevChild, parentComponent, parentSuspense, true)
      } else {
        newIndexToOldIndexMap[newIndex - s2] = i + 1
        if (newIndex >= maxNewIndexSoFar) {
          maxNewIndexSoFar = newIndex
        }
        // 如果节点出现交叉，说明是要移动去求最长递增子序列
        else {
          moved = true
        }
        patch(
          prevChild,
          c2[newIndex] as VNode,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized,
        )
        patched++
      }
    }
    
    // 5.3 move and mount
    // generate longest stable subsequence only when nodes have moved
    const increasingNewIndexSequence = moved
    // 贪心 + 二分查找，求最长递增子序列
      ? getSequence(newIndexToOldIndexMap)
      : EMPTY_ARR
    j = increasingNewIndexSequence.length - 1
    // looping backwards so that we can use last patched node as anchor
    for (i = toBePatched - 1; i >= 0; i--) {
      const nextIndex = s2 + i
      const nextChild = c2[nextIndex] as VNode
      const anchor =
        nextIndex + 1 < l2 ? (c2[nextIndex + 1] as VNode).el : parentAnchor
      if (newIndexToOldIndexMap[i] === 0) {
        // mount new
        patch(
          null,
          nextChild,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized,
        )
      } else if (moved) {
        // 如果当前遍历的这个节点不在子序列，就要进行移动
        if (j < 0 || i !== increasingNewIndexSequence[j]) {
          move(nextChild, container, anchor, MoveType.REORDER)
        }
        // 否则直接跳过
        else {
          j--
        }
      }
    }
  }
}
```

## diff 算法 v2

### 什么是 diff 算法?

diff 算法就是比较新旧 DOM 树，寻找差异的算法，在源码中通过 `patch` 函数实现，所以也称为 patch 算法。

### diff 算法比较思路

深度优先，同级比较。

### diff 算法执行过程

- 当组件内部的响应式数据发生更新的时候，就会执行 Vue 内部的 `updateComponent` 函数，在函数内部先执行 `_render` 函数生成新的虚拟 DOM，将其作为参数传递给 `_update` 函数，并执行 `_update` 函数。

- 在 `_update` 函数中，先定义一个变量保存旧的虚拟 DOM (`vm._vnode`)，然后将新的虚拟 DOM 赋值给 `vm._vnode`，此时 `_update` 函数中存在新旧虚拟 DOM，最后使用 `patch` 函数对新旧虚拟 DOM 进行比较。

### patch 比较过程

- `patch` 函数首先使用 `sameVnode` 方法比较两个节点的**标签类型**和 **key** 以及表单元素的 **type** 是否相同；

- 如果相同，则进入更新流程：

  - 把旧节点的真实 DOM 拿到新节点的位置复用；

  - 对比新旧节点的（标签）属性是否相同，如果不同则更新；

  - 比较子节点。

- 如果不相同，直接根据新节点创建元素，删除旧元素。

### patch 比较子节点

- Vue 使用四个指针分别指向新旧子节点列表的首尾节点；

- 首先比较新旧树中头指针指向的节点：

  - 如果相同则进入更新流程。头指针向后位移，继续比较。

- 如果不同，则比较新旧树中尾指针指向的节点：

  - 如果相同则进入更新流程...

- 如果不同，则交叉比较新旧树中头指针和尾指针指向的节点：

  - 如果相同则进入更新流程...

- 如果以上比较都不相同，则以新树中头指针指向的节点为基础，循环旧虚拟 DOM 节点，查找是否存在相同节点：

  - 如果存在则复用，进入更新流程；

  - 如果不存在，说明该节点为新创建的，将该节点转为真实 DOM。

- 当新树的头指针超过尾指针的时候，比较结束，删除旧树中的剩余节点。

### key 的作用

- 在新旧虚拟 DOM 对比更新的时候，diff 算法默认采用 "就地更新" 原则；

- 多个子节点比较的时候，如果没有 key 属性，默认都是 undefined，所以每个新旧虚拟 DOM 的 key 都相同，就会简单地按照节点的顺序依次比较。如果新旧节点是顺序的不同，那么 diff 算法将达不到最高效；

- 使用 v-for 时，我们可以为每个元素提供唯一的 key，使它可以跟踪每个节点，重新排序时可以复用现有元素；

- key 可以使 Vue 更高效地渲染虚拟 DOM；

- key 必须满足稳定性和唯一性。

## 生命周期 v3



## 生命周期 v2

### 初始化流程

Vue 被实例化也就是 new Vue 之后，进入初始化阶段：

- 初始化事件和生命周期；

- `beforeCreate` 触发，此时还无法访问实例上的数据；

- 初始化数据注入和数据劫持，同时初始化 data methods computed watch 等数据；

- `created` 触发，此时可以通过实例访问数据。

### 编译流程

判断 Vue 是否配置 el 选项：

- 没有 el 选项，则等待使用 `$mount` 提供 el 选项；

- 存在 el 选项，再判断是否配置 template 选项：

  - 如果有 template 选项，则编译模板得到 render 函数，返回虚拟 DOM；

  - 如果没有 template 选项，则将 el 挂载容器的 outerHTML 作为模板进行编译。

### 挂载流程

- 挂载之前，`beforeMount` 触发，此时视图呈现的是未被解析的模板。DOM 操作无效；

- 将 Vue 实例挂载到 el 容器上，根据 render 函数返回的虚拟 DOM 生成真实 DOM，并替换 el 容器；

- 挂载之后，`mounted` 触发，视图呈现真实 DOM。一般在这个阶段发送请求、监听自定义事件、开启定时器。

### 更新流程

当响应式数据发生改变的时候，进入更新阶段：

- `beforeUpdate` 触发，此时数据已更新，视图还未更新；

- 得到新的虚拟 DOM 并使用 patch 函数比较新旧虚拟 DOM 并更新真实 DOM；

- `updated` 触发，此时数据和视图都完成更新。

### 销毁流程

当 `$destroy` 被调用，或条件渲染组件或路由时，进入销毁阶段：

- 实例销毁之前，`beforeDestroy` 触发，一般在这个阶段移除自定义事件、关闭定时器，防止内存泄漏；

- 实例销毁，取消所有 watcher 订阅，与所有子组件实例断开连接，移除所有事件监听器，解绑所有指令；

- 实例销毁之后，`destroyed` 触发

## 组件通信 v3

### defineProps

接受父组件传递的属性。

```ts
const props = defineProps<{
  count: number
}>()

props.count // count: 1
```

### defineEmits

接受父组件传递的事件（可以传递原生事件）。

```ts
const emits = defineEmits<{
  (event: "changeCount", n: number): void
  (event: "update", value: string): void
}>()

// 3.3+ 更简洁的语法
const emits = defineEmits<{
  changeCount: [id: number] // 具名元组语法
  update: [value: string]
}>()

emits("changeCount", 1) // count: 1 => 2
emits("update", "ts")
```

### v-model:prop

父子组件多个数据的双向绑定。

当使用 `:prop` + `@update:prop="prop = $event"` 模式时，可以替换为 `v-model:prop` 模式。

```vue
<!-- Parent.vue -->
<Comp :count="count" @update:count="count = $event" />

<Pagination v-model:count="count" />
```

```vue
<!-- Comp.vue -->
<button @click="emits('update:count', count + 1)"></button>
```

### useAttrs

使用 `useAttrs()` 可以返回一个 attrs 代理对象。

attrs 包含了父组件传递的数据和事件。可以通过 `v-bind` 批量传递给内部组件。

> [!warning]
>
> 不包含被 defineProps 接受的数据和被 defineEmits 接受的事件。

```vue
<Comp v-bind="attrs" />
```

```ts
import { useAttrs } from "vue"

const attrs = useAttrs()
```

### defineExpose

在 Vue3 中，不能使用 `$parent` 直接访问父组件，需要在父组件使用 defineExpose 暴露一些数据。

```ts
/* Parent.vue */
defineExpose({
  count,
  message: "hello vue"
})
```

这样我们就可以在子组件中通过 $parent 获取到一个代理对象，它包含了 defineExpose 暴露的数据。

```vue
<!-- Comp.vue -->
<button @click="console.log($parent)"></button>
```

### provide & inject

在 Vue3 中，provide 提供的数据不需要写成函数返回值形式，因为提供的是 ref 对象，数据是具有响应式的。

```ts
import { provide } from "vue"

provide("count", count)
```

inject 会返回需要注入的数据对应的值。

```ts
import { inject } from "vue"

const count = inject("count")
```

## 组件通信 v2

### 双向绑定

#### v-model

> [!note]
>
> 父子组件间通信，只能传递一个数据与事件。

当使用 `:value` + `@input` 模式时，可以替换为 `v-model` 模式。

子组件为 input。

```vue
<!-- Parent.vue -->
<Comp :value="message" @input="message = $event" />

<Comp v-model="message" />
```

```vue
<!-- Comp.vue -->
<input :value="value" @input="$emit('input', $event.target.value)" />
```

子组件为非 input。

```vue
<!-- Parent.vue -->
<Comp :value="count" @input="count = $event" />

<Comp v-model="count" />
```

```vue
<!-- Comp.vue -->
<button @click="$emit('input', value + 1)"></button>
```

#### v-bind.sync

> [!note]
>
> 父子组件间通信，可以传递多个数据与事件。

当使用 `:prop` + `@update:prop="prop = $event"` 模式时，可以替换为 `:prop.sync` 模式。

```vue
<!-- Parent.vue -->
<Comp :count="count" @update:count="count = $event" />

<Comp :count.sync="count" />
```

```vue
<!-- Comp.vue -->
<button @click="$emit('update:count', count + 1)"></button>
```

### 事件总线

> [!note]
>
> 任意组件间通信

```js
beforeCreate() {
  Vue.prototype.$bus = this // 在 Vue 的原型上安装事件总线，所有组件都能访问
}
```

```js
// A.vue
mounted() {
  this.$bus.$on("my-event", value => { /* 监听事件 */ })
},
beforeDestroy() {
  this.$bus.$off("my-event") // 移除事件
}
```

```js
// B.vue
this.$bus.$emit("my-event", [...this.args]) // 触发事件
```

### 发布订阅

> [!note]
>
> 任意组件间通信。

```js
// A.vue
import Pubsub from "pubsub-js"

mounted() {
  this.pubsubId = Pubsub.subscribe("my-message", (_ /* message-name */, value) => {}) // 订阅
},
beforeDestroy() {
  Pubsub.unsubscribe(this.pubsubId) // 取消订阅
}
```

```js
// B.vue
import Pubsub from "pubsub-js"

Pubsub.publish("my-message", [...this.args]) // 发布消息
```

### 透传

> [!note]
>
> 祖孙组件间通信。

`$attrs` 包含了父组件传递的数据（不包含被 props 接受的数据）。可以通过 `v-bind` 批量传递给内部组件。

```vue
<Comp v-bind="$attrs" />
```

`$listeners` 包含了父组件传递的事件。可以通过 `v-on` 批量传递给内部组件。

```vue
<Comp v-on="$listeners" />
```

### 依赖注入

> [!note]
>
> 祖孙组件间通信。

provide 选项可以给后代组件提供数据和方法。

注意：

- provide 如果是一个对象，将无法访问 this，就不能将实例上的数据提供给后代，所以推荐写成函数。

- 提供的数据需要写成函数返回值形式，否则不具备响应式。

```js
provide() {
  return {
    count: () => this.count,
    increment: this.increment
  }
}
```

在任何后代组件里，我们都可以使用 inject 选项来接受 provide 提供的数据和方法。

```js
inject: ["count", "increment"]
```

## 深入组件

### 插槽

#### 默认插槽

子组件：使用 `<slot>` 定义插槽。

父组件：向子组件中插入 HTML，当组件渲染时，`<slot>` 将会被替换为子组件标签内的内容。

> [!note]
>
> 可以在 `<slot>` 标签内设置默认内容，当子组件标签中没有插入内容时，`<slot>` 会被替换为默认内容。

```vue
<!-- Parent.vue -->
<Comp title="音乐">
  <ul>
    <li v-for="item in music">{{ item }}</li>
  </ul>
</Comp>

<Comp title="电影">
  <ul>
    <li v-for="item in movie">{{ item }}</li>
  </ul>
</Comp>
```

```vue
<!-- Comp.vue -->
<div>
  <h2>{{ title }}</h2>
  <slot />
</div>
```

#### 具名插槽

子组件：在 `<slot>` 中注册一个 name 属性。

> [!tip]
>
> 未注册 name 属性的 `<slot>` 默认值为 default，即默认插槽。

父组件：用 `<template v-slot:name>` 包裹指定元素，可以替换对应 name 属性的 `<slot>`。

> [!warning]
>
> 最终的渲染结果不包含 `<template>`。
>
> 任何没有被包裹在带有 v-slot 的 `<template>` 中的内容都会被视为默认插槽的内容。
>
> v-slot 只能用于 `<template>` 或组件。

```vue
<!-- Parent.vue -->
<Comp>
  <template v-slot:music>
    <ul>
      <li v-for="item in music">{{ item }}</li>
    </ul>
  </template>
  
  <template #movie>
    <ul>
      <li v-for="item in movie">{{ item }}</li>
    </ul>
  </template>
</Comp>
```

```vue
<!-- Comp.vue -->
<div>
  <slot name="music" />
  <slot name="movie" />
</div>
```

#### 作用域插槽

> [!note]
>
> 通过插槽访问子组件的数据。

子组件：通过 `<slot :prop="data">` 传递数据。

父组件：使用 `<template v-slot="slotProps">` 来接受子组件传递的数据。

> [!note]
>
> 结合具名插槽使用，`<template #prop="slotProps">`。

```vue
<!-- Parent.vue -->
<Comp title="音乐">
  <template v-slot:music="slotProps">
    <ul>
      <li v-for="item in slotProps.music">{{ item }}</li>
    </ul>
  </template>
</Comp>

<Comp title="电影">
  <template #movie="{ movie }">
    <ul>
      <li v-for="item in movie">{{ item }}</li>
    </ul>
  </template>
</Comp>
```

```vue
<!-- Comp.vue -->
<div>
  <h2>{{ title }}</h2>
  <slot name="music" :music="music" />
  <slot name="movie" :movie="movie" />
</div>
```

### 动态组件

#### 动态组件

我们可以在内置标签 `<component>` 中使用 "is" 属性来切换不同的组件。

```vue
<component :is="Current" />
```

#### 缓存组件

我们在切换动态组件的时候，组件默认会在进入时被创建，离开时被销毁。频繁切换会导致重新渲染影响性能。

如果希望动态组件能够在第一次被创建的时候缓存，可以使用 `<keep-alive>` 将其包裹起来。

我们可以给 `<keep-alive>` 设置一些属性，根据条件缓存内部组件：

- 默认所有匹配的动态组件都会被缓存；

- include：匹配的动态组件会被缓存；

- exclude：匹配的动态组件不会被缓存；

- max：最大缓存数。

```vue
<keep-alive>
  <component :is="Current" />
</keep-alive>
```

### 异步组件

如果我们直接使用 import 模块化引入组件，那么 webpack 在打包构建的过程中，会把所有的 js 都打包到了一起，但是里面包含了很多我们暂时没有使用的模块，这样导致包的体积过大，就会造成进入首页的时候需要加载的内容过多，出现长时间的白屏现象。

我们可以使用异步组件，让 webpack 将组件分开进行打包，需要的时候再去加载这个组件：

1. Vue 允许我们以函数的方式定义组件，函数内部使用 import 方法引入模块，并把结果返回；

2. wabpack 在打包的时候，如果遇到 import 动态引入，会把 import 动态引入的资源单独进行打包；

3. Vue 只有在这个组件需要被渲染的时候才会触发该函数，且会把结果缓存起来用于下次重新渲染；

4. import 方法会返回一个 promise 实例，引入成功时 promise 变为成功状态，然后就可以渲染当前组件了。

```js
const Home = () => import("@/components/Home")
const User = () => import("@/components/User")
```

## Router v4

### 基本配置

```ts
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("@/views/Home.vue"),
      name: "Home"
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/NotFound.vue")
    }
  ]
})
```

### 缓存路由

固定写法

```vue
<router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component"></component>
  </keep-alive>
</router-view>
```

## Router v3

### 历史记录模式

#### Hash 模式

window 提供了 hashchange 事件，可以监听 hash 地址的变化。

我们可以通过 `event.newURL` 获取当前的完整路径，并根据哈希标识 "#" 拆分得到路由地址。

```js
window.onhashchange = event => {
  event.newURL.split("#")[1] // "/home"
}
```

#### HTML5 模式

history 对象提供了 pushState 方法，可以无刷新地跳转地址。

```js
history.pushState(null, null, "/home")
```

window 提供了 popstate 事件，可以监听历史记录的改变。用于手动创建历史记录。

```js
window.onpopstate = () => {
  // ...
}
```

### 基本配置

**注意**：以 "/" 开头的嵌套路径会被当作根路径，所以子路由的路径不加 "/"。

```js
const router = new VueRouter({
  mode: "history", // 默认为 hash 模式
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home,
      name: "Home",
      children: [
        {
          path: "news",
          component: News
        }
      ]
    },
    {
      path: "*",
      component: NotFound
    }
  ]
})
```

### 解决重复跳转的报错

重写 push 方法，replace 同理。

```js
const originalReplace = VueRouter.prototype.push

VueRouter.prototype.push = function (
  location,
  onComplete = () => {},
  onAbort = () => {}
) {
  originalReplace.call(this, location, onComplete, onAbort)
}
```

### 路由缓存

`<keep-alive>` 可以用于路由，被包裹住的路由组件会在第一次被创建的时候缓存起来。

```vue
<!-- 缓存一个路由组件 -->
<keep-alive include="Home">
  <router-view />
</keep-alive>

<!-- 缓存多个路由组件 -->
<keep-alive :include="['News', 'Message']">
  <router-view />
</keep-alive>
```

缓存组件的生命周期函数 activated 和 deactivated 也适用于缓存的路由组件。

### 路由懒加载

把路由组件设置为异步组件，实现路由组件的按需加载。

```js
routes: [
  {
    path: "/home",
    component: () => import("@/views/Home")
  },
  {
    path: "/user",
    component: () => import("@/views/User")
  }
]
```

### 动态路由 - params

在路由配置中使用 ":" 占位。当匹配到路由时，参数值会被设置到 `$route.params` 中。

在组件中可以通过 `$route.params` 获取 params 参数。

```vue
<!-- 字符串写法 -->
<router-link to="/user/1">User</router-link>

<!-- 对象写法，params 参数只支持 name -->
<router-link :to="{ name: 'User', params: { id: 1 } }">User</router-link>
```

### 动态路由 - query

如果 URL 中有查询参数，参数值会被设置到 `$router.query` 中。

在组件中可以通过 `$route.query` 获取 query 参数。

```vue
<!-- 字符串写法 -->
<router-link to="/user?id=1">User</router-link>

<!-- 对象写法 -->
<router-link :to="{ path: '/user', query: { id: 1 } }">User</router-link>
<router-link :to="{ name: 'User', query: { id: 1 } }">User</router-link>
```

### 路由组件传参

#### 布尔模式

将路由中所有 params 参数以 props 的形式传递给组件。

**注意**：只能传递 params 参数。

```js
routes: [
  {
    path: "/user/:name",
    component: () => import("@/views/User"),
    props: true
  }
]
```

#### 对象模式

将对象中所有静态属性以 props 的形式传递给组件。

**注意**：只能传递静态参数。

```js
routes: [
  {
    path: "/user/:name",
    component: () => import("@/views/User"),
    props: { a: 1, b: 2 }
  }
]
```

#### 函数模式

将函数返回的对象中所有属性以 props 的形式传递给组件。

**注意**：可以接受 `$route`，既能传递 params 参数，又能传递 query 参数，又能传递静态参数。

```js
routes: [
  {
    path: "/user/:name",
    component: () => import("@/views/User"),
    props: $route => ({ ...$route.params, ...$route.query })
  }
]
```

### 导航守卫

#### router.beforeEach

在所有路由跳转前触发。

```js
router.beforeEach((to, from, next) => {
  to // 目标路由的 `$route` 对象
  from // 原路由的 `$route` 对象
  next() // 放行，下一步
  next("/login") // 重定向
})
```

#### router.beforeResolve

在导航被确认之前，同时也是所有组件内守卫和异步路由组件被解析后触发。

#### router.afterEach

在路由跳转后触发，注意：不会接受 next 参数。

#### beforeEnter

进入指定路由前触发。

```js
routes: [
  {
    path: "/user",
    component: () => import("@/views/User"),
    beforeEnter: (to, from, next) => {
      next()
    }
  }
]
```

#### beforeRouteEnter

进入组件时时触发。

```js
beforeRouteEnter(to, from, next) {
  next()
}
```

#### beforeRouteUpdate

在当前路由改变，但是该组件被复用时触发（动态路由传参跳转）。

#### beforeRouteLeave

导航离开组件对应的路由时触发。

## Pinia

### 全局注入

```ts
import { createPinia } from "pinia"

const pinia = createPinia()
```

### 选项式 Store

```ts
import { defineStore } from "pinia"

const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: state => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
```

### 组合式 Store

```ts
import { defineStore } from "pinia"

const useCounterStore = defineStore("counter", () => {
  const count = ref(0)
  
  const doubleCount = computed(() => count.value * 2)
  
  const increment = () => {
    count.value++
  }
  
  return { count, doubleCount, increment }
})
```

### 在组件中使用

```ts
// 用于将 store 中的数据转为 ref 对象
import { storeToRefs } from "pinia"

// 从 store modules 引入 hooks 函数
import { useCounterStore } from "@/stores/counter.ts"

// 调用 hooks 函数返回 store
const counterStore = useCounterStore()

// 从 store 获取数据 (state, getters)
const { count, doubleCount } = storeToRefs(counterStore)

// 从 store 获取方法 (actions)
const { increment } = counterStore
```

## Vuex

### 工作流程

Vuex 是一个状态（数据）管理插件，对所有组件的共享状态进行集中式管理。

![](https://vuex.vuejs.org/vuex.png)

同步：`commit(type, payload)` => mutations => state

异步：`dispatch(type, payload)` => actions == `commit(type, payload)` => mutations => state

### 全局注入

在创建 Vue 实例时配置 store 选项，可以为所有内部组件都注入一个 `$store` 属性。

```js
import store from "@/store"

new Vue({
  render: h => h(App),
  store
}).$mount("#app")
```

### State

#### 获取状态

在组件中，我们可以通过 `$store.state` 访问全局状态。

如果在插值语法中大量使用 `$store.state`，这样会使代码的可阅读性和可维护性变得较差。

所以我们一般使用计算属性获取 store 中的数据。

```js
computed: {
  count() {
    return this.$store.state.count
  },
  message() {
    return this.$store.state.message
  }
}
```

#### mapState

Vuex 为我们提供了一种简便方法，我们可以使用 mapState 辅助函数生成对应的计算属性。

```js
import { mapState } from "vuex"

computed: {
  ...mapState({
    count: "count" // this.$store.state.count => "count"
  })
}
```

当计算属性与状态同名时，可以给 mapState 传入一个字符串数组。

```js
computed: {
  ...mapState(["count"])
}
```

### Mutations

#### 提交载荷

`commit(type, payload)`，推荐提交的载荷（payload）为一个对象。

```js
methods: {
  increment() {
    // 以载荷形式提交
    this.$store.commit("increment", { n: 2 })
    
    // 以对象形式提交
    this.$store.commit({ type: "increment", n: 2 })
  }
}
```

#### 处理事件

事件处理函数可以接受两个参数：

- state：全局状态

- payload：载荷（可选）

```js
/* store */
mutations: {
  increment(state, { n }) {
    state.count += n
  }
}
```

#### mapMutations

使用 mapMutations 辅助函数可以将组件中的 methods 映射为 `store.commit` 调用。

```js
import { mapMutations } from "vuex"

methods: {
  ...mapMutations(["increment"]) // this.$store.commit("increment") => "increment"
}
```

### Getters

#### 计算属性

计算属性函数可以接受两个参数：

- state：全局状态

- getters：其他 getter（可选）

```js
/* store */
getters: {
  total: state => state.count * 100
}
```

我们可以在组件中使用它。

```js
computed: {
  total() {
    return this.$store.getters.total
  }
}
```

#### mapGetters

我们可以使用 mapGetters 辅助函数将 getters 映射到计算属性。

```js
import { mapGetters } from "vuex"

computed: {
  ...mapGetters(["total"]) // this.$store.getters.total => "total"
}
```

### Actions

#### 分发异步操作

`dispatch(type, payload)`

```js
methods: {
  increment() {
    this.$store.dispatch("increment", { n: 1 })
  }
}
```

#### 异步处理函数

异步处理函数可以接受两个参数：

- context：上下文对象，具有与 store 相同的方法

- payload：载荷（可选）

```js
/* store */
actions: {
  increment(context, payload) {
    setTimeout(() => {
      context.commit("incrementCount", payload)
    }, 1000)
  }
},
mutations: {
  incrementCount(state, { n }) {
    state.count += n
  }
}
```

#### mapActions

使用 mapActions 辅助函数将组件中的 methods 映射为 `store.dispatch` 调用。

```js
import { mapActions } from "vuex"

methods: {
  ...mapActions(["increment"]) // this.$store.dispatch("increment") => "increment"
}
```

### Modules

当应用变得非常复杂时，store 对象就会变得臃肿，我们可以将 store 分割成模块，便于代码的维护。

```js
// countModule.js

const state = {
  count: 1
}

const actions = {
  increment(context, payload) {
    setTimeout(() => {
      context.commit("increment", payload)
    }, 2000)
  }
}

const mutations = {
  increment(state, { n }) {
    state.count += n
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
```

```js
// store.js

import countModule from "./modules/countModule"

const movieModule = {
  // ...
}

new Vuex.Store({
  modules: {
    countModule,
    movieModule
  }
})
```

访问 state

```js
// 直接访问
this.$store.state.countModule.count
this.$store.state.movieModule.movie

// mapState
computed: {
  ...mapState("countModule", ["count"]),
  ...mapState("movieModule", ["movie"])
}
```

访问 getters

```js
// 直接访问
this.$store.state.countModule.countPlus
this.$store.state.movieModule.movieList

// mapGetters
computed: {
  ...mapGetters("countModule", ["countPlus"]),
  ...mapGetters("movieModule", ["movieList"])
}
```

调用 dispatch

```js
// 直接调用
this.$store.dispatch("countModule/increment", payload)
this.$store.dispatch("movieModule/getmovies", payload)

// mapActions
methods: {
  // 对象写法
  ...mapActions({ increment: "countModule/increment" }),
  ...mapActions({ getmovies: "movieModule/getmovies" })
  
  // 数组写法
  ...mapActions("countModule", ["increment"]),
  ...mapActions("movieModule", ["getmovies"])
}
```

调用 commit

```js
// 直接调用
this.$store.commit("countModule/increment", payload)
this.$store.commit("movieModule/getmovies", payload)

// mapMutations
methods: {
  // 对象写法
  ...mapMutations({ increment: "countModule/increment" }),
  ...mapMutations({ getmovies: "movieModule/getmovies" })
  
  // 数组写法
  ...mapMutations("countModule", ["increment"]),
  ...mapMutations("movieModule", ["getmovies"])
}
```

---
title: Vue
icon: vue
date: 2024-04-14
---

> [!tip]
>
> 你正在阅读的是 Vue 3 文档！
>
> Vue 2 已于 **2023 年 12 月 31 日**停止维护。详见 [Vue 2](../end-of-life/Vue.md)。

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

## 响应式原理

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

## diff 算法

### 虚拟 DOM

虚拟 DOM 就是通过 JS 来生成一个 AST 节点树。

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

## 组件通信

### defineProps

接受父组件传递的数据。

```ts
defineProps<{
  count: number
  state: number[]
}>()

// 默认值
withDefaults(defineProps<{
  count: number
  state: number[]
}>(), {
  count: 1,
  state: () => [3, 5] // 引用类型需要使用 getter 函数
})
```

### defineEmits

接受父组件传递的事件（可以传递原生事件）。

```ts
const emits = defineEmits<{
  (event: "update", value: string): void
  (event: "change", count: number): void
}>()

// 3.3+ 具名元组语法
const emits = defineEmits<{
  update: [value: string]
  change: [count: number]
}>()

emits("update", "message")
emits("change", 24)
```

### defineExpose

暴露一些数据给父组件。

```ts
const validate = async () => { /* ... */ }
const resetFields = () => { /* ... */ }

defineExpose({
  name: "ElForm",
  validate,
  resetFields
})
```

然后我们就可以在父组件中，通过子组件实例获取到它暴露的数据。

```vue
<script setup lang="ts">
  import { ref } from "vue"
  import { ElForm } from "element-plus"
  
  const formRef = ref<InstanceType<typeof ElForm>>()
  
  const validate = () => formRef.value?.validate() // 触发表单校验
  const reset = () => formRef.value?.resetFields() // 重置表单项
</script>

<template>
  <ElForm ref="formRef"></ElForm>
</template>
```

### defineModel (3.4+)

`defineModel` 是一个编译宏，它会返回一个允许被修改的 ref，编译器会将其展开为以下内容：

- 一个名为 `modelValue` 的 prop，它与返回的 ref 值同步；

- 一个名为 `update:modelValue` 的事件，当返回的 ref 被修改时，会将其触发。

也就是说，`defineModel` 可以声明一个双向绑定的 prop。

如果第一个参数为字符串，它将作为 prop 的名称；否则 prop 名称默认为 `modelValue`。

```vue
<!-- 父组件 -->
<script setup lang="ts">
  import { ref } from "vue"
  
  const value = ref(0)
  const count = ref(1)
</script>

<template>
  <Model v-model="value" v-model:count="count" />
</template>
```

可以通过 `v-model` 直接将返回的 ref 绑定到一个元素上。

```vue
<!-- 子组件 -->
<script setup lang=ts>
  const modelValue = defineModel({ default: 0 }) // 默认为 modelValue
  const modelCount = defineModel("count", { default: 1 })
  
  const updateValue = () => modelValue++ // 触发 "update:modelValue" 事件
  const updateCount = () => modelCount++ // 触发 "update:count" 事件
</script>

<template>
  <input v-model="modelValue" />
</template>
```

在 3.4 之前，一般通过以下方式实现 prop 的“双向绑定”，这样就会显得非常繁琐。

```vue
<script setup lang="ts">
  const props = defineProps(['modelValue'])
  const emits = defineEmits(['update:modelValue'])
</script>

<template>
  <input :value="modelValue" @input="emits('update:modelValue', $event.target.value)" />
</template>
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

## 深入组件

### 插槽

在子组件中使用 `<slot>` 定义插槽进行**占位**。

```vue
<!-- 子组件 -->
<div>
  <header>
    <!-- 作用域插槽 -->
    <slot name="header" :navigations />
  </header>
  
  <main>
    <!-- 默认插槽 -->
    <slot />
  </main>
  
  <footer>
    <!-- 具名插槽 -->
    <slot name="footer" />
  </footer>
</div>
```

在父组件中，`<slot>` 将会被替换为子组件标签内的内容。

```vue
<!-- 父组件 -->
<MyComponent>
  <!-- 作用域插槽 -->
  <template #header="{ navigations }">
    <el-menu>
      <el-submenu
        v-for="navigation in navigations"
        :key="navigation.title"
        :index="navigation.title"
      >
        <el-menu-item
          v-for="subNavigation in navigation.children"
          :key="subNavigation.path"
          :index="subNavigation.path"
        >
          {{ subNavigation.title }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </template>
  
  <!-- 默认插槽 -->
  <template #default>
    main
  </template>
  
  <!-- 具名插槽 -->
  <template #footer>
    footer
  </template>
</MyComponent>
```

### 缓存组件

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

## Router

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


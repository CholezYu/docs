---
title: Vue
icon: vue
date: 2024-05-13
---

> [!tip]
>
> 你正在阅读的是 Vue 3 文档！Vue 2 已于 **2023 年 12 月 31 日**停止维护。详见 [Vue 2](../history/Vue.md)。
>

## 响应式：核心

### Ref

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

**源码解析**。调用 `ref()` 时，会通过 `createRef()` 创建一个 RefImpl 实例，在 `class RefImpl` 的内部，如果传入的值是基本类型，则直接返回该值；如果是引用类型，会调用 `reactive()` 进行深层次的响应式。最后，通过 `trackRefValue()` 进行依赖的收集，通过 `triggerRefValue()` 进行依赖的更新。

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
    // 如果是 shallowRef，直接返回 .value 的值，如果 value 是引用类型，不会做深度响应式
    // 如果是 ref，会调用 toReactive，进行深层次的响应式
    // const toReactive = (value) => isObject(value) ? reactive(value) : value
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

### Reactive

只能接受**引用类型**作为参数，返回一个响应式的代理对象。可以直接访问这个代理对象上的属性。

```ts
import { reactive } from "vue"

const state = reactive({ count: 0 })

state // Reactive<{ count: 0 }>
state.count // 0
```

**源码解析**。调用 `reactive()` 时，会通过 `createReactiveObject()` 创建一个 reactive，在这个方法中，进行一些判断：1. 传入的值是否是基本类型；2. 传入的值是否被代理过；3. 代理对象是否被缓存；4. 代理对象是否在白名单中。如果以上条件都不满足，则将传入的值进行 Proxy 代理，然后通过 WeakMap 进行缓存。

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

### Computed

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

**源码解析**。调用 `computed()` 时，会根据传入的参数判断是否使用 setter，然后将 getter 和 setter 传入 `ComputedRefImpl` 类。在这个类中，定义了一个脏值：`_dirty`，标记是否需要重新计算。如果 `_dirty` 为 true，则进行重新计算；否则直接将 `_value` 返回，并将结果缓存，下一次访问时，如果 `_dirty` 为 false，则从缓存中取值。这种机制称为**脏值检测**。

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

### Watch

> [!warning]
>
> 监听引用类型时，新值和旧值是一样的。下面源码解析中会讲到，watch 更新旧值的方式是，直接将之前的新值赋值给现在的旧值，如果是引用类型的话，就会共用同一个指针。所以推荐**监听具体的某个属性**。

监听 ref（基本类型）。

```ts
import { ref, watch } from "vue"

const count = ref(0)

watch(count, (value, oldValue) => {
  // ...
})

const fooRef = ref()
const barRef = ref()

// 监听多个源，回调函数接受两个数组，分别对应来源数组中的新值和旧值
watch([fooRef, barRef], ([foo, bar], [oldFoo, oldBar]) => {
  // ...
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
  // ...
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

判断 `deep` 选项，如果为 true，就调用 `traverse()` 进行深度监听。

初始化调度器 `scheduler` 并判断 `flush` 选项，如果值为 "sync"，则将任务赋值给调度器，同步执行（任务）；如果值为 "post"，则在组件更新之后执行（任务）；如果值为 "pre"，则在组件更新之前执行（任务），**它也是默认值**。然后收集依赖，等待任务的执行。

判断 `immediate` 选项，如果为 true，则立即执行（任务）。

执行任务时，先获取新值，然后判断如果 `immediate` 为 true，则将旧值赋值为 undefined；如果没有开启 `immediate`，则给旧值做初始化，也就是将 `ref(value)` 的默认值赋值给旧值。最后更新旧值，将新值直接赋值给旧值（下一次使用），如果是引用类型的话，就会共用同一个指针，所以会导致之后的新值和旧值都相同。

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
      getter = () => callWithErrorHandling(
        source,
        instance,
        ErrorCodes.WATCH_GETTER
      )
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
        // 这个就是 `watch()` 的回调函数 cb 以及参数 newValue, oldValue, onCleanup
        callWithAsyncErrorHandling(cb, instance, ErrorCodes.WATCH_CALLBACK, [
          newValue,
          // 如果 immediate 为 true，将旧值赋值为 undefined，否则为 `ref()` 的默认值
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

### ToRaw

它会返回 Proxy 的原始对象。用于让 reactive 退出响应式，合理使用可以减少代理访问、降低跟踪开销。

```ts
import { reactive, toRaw } from "vue"

const origin = { foo: 1, bar: 2 }
const state = reactive(origin)

state // Reactive<{ foo: 1, bar: 2 }>
toRaw(state) // { foo: 1, bar: 2 }
toRaw(state) === origin // true
```

### ToRef

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

### ToRefs

将一个响应式对象转换为普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。

常用于 ref，reactive 的解构。

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

## 响应式原理

### Effect

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

### Track

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

### Trigger

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

### Reactive

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

## Diff 算法

### 虚拟 DOM

虚拟 DOM 就是通过 JS 来生成一个 AST 节点树。

为什么要有虚拟 DOM？为什么不直接去操作 DOM，而是使用 JS 去描述 DOM 对象？

因为在一个 DOM 身上，它的属性是非常多的，所以直接操作 DOM 是非常浪费性能的。

### 无 Key Diff 算法

> [!warning]
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

### 有 Key Diff 算法

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

## 渲染效率优化

> [!tip]
>
> 客户端渲染效率比 Vue2 提升了 1.3~2 倍。
>
> SSR 渲染效率比 Vue2 提升了 2~3 倍。

### 静态提升

Vue2 没有对静态节点进行处理，而是全部处理成虚拟节点，这导致每次解析一个静态节点时，都会先创建一个虚拟节点，再进行渲染。创建不必要的虚拟节点会占用大量内存，造成性能的浪费。

由于静态节点不会发生变化，所以可以进行复用。而 Vue3 的编译器会发现静态节点并对其进行提升：

- 元素节点；

- 没有绑定动态内容。

```ts
// Vue2
function render() {
  createVNode("h1", null, "Hello World")
}

// Vue3
const hoisted = createVNode("h1", null, "Hello World")
function render() {
  // 直接复用 hoisted
}
```

静态属性也会被提升。

```vue
<div class="user">
  {{ user.name }}
</div>
```

```ts
// Vue2
function render() {
  createVNode("div", { class: "user" }, user.name)
}

// Vue3
const hoisted = { class: "user" }
function render() {
  createVNode("div", hoisted, user.name)
}
```

### 预字符串化

```vue
<div class="menu-container">
  <div class="logo">
    <h1>logo</h1>
  </div>
  <ul class="nav">
    <li><a href="">menu</a></li>
    <li><a href="">menu</a></li>
    <li><a href="">menu</a></li>
    <li><a href="">menu</a></li>
    <li><a href="">menu</a></li>
  </ul>
  <div class="user">
    <span>{{ user.name }}</span>
  </div>
</div>
```

当编译器遇到大量连续的静态内容，会直接将其编译成一个普通字符串节点。

> [!tip]
>
> 在 SSR 中作用非常明显，因为服务端会向客户端不断发送字符串，预字符串化后，只需要进行字符串拼接就行了。

```ts
const _hoisted_2 = _createStaticVNode("<div class=\"logo\"><h1>logo</h1></div><ul class=\"nav\">" +
  "<li><a href=\"\">menu</a></li><li><a href=\"\">menu</a></li><li><a href=\"\">menu</a></li>" +
  "<li><a href=\"\">menu</a></li><li><a href=\"\">menu</a></li></ul>")
```

### 缓存事件处理函数

编译器会对事件处理函数进行缓存，可以减少事件函数的创建。

```vue
<button @click="count++">plus</button>
```

```ts
// Vue2
function render(ctx) {
  return createVNode("button", {
    onClick: function($event) {
      ctx.count++
    }
  })
}

// Vue3
function render(ctx, _cache) {
  return createVNode("button", {
    onClick: cache[0] || (cache[0] = ($event) => (ctx.count++))
  })
}
```

### Block Tree

Vue2 在对比新旧树的时候，并不知道哪些节点是静态的，哪些是动态的，因此只能一层一层比较，这就浪费了大部分时间在比较静态节点树上。

Vue3 会把所有动态节点提取到根（Block）节点上，对比的时候只需要比较根节点。

```vue
<form>
  <div>
    <label>账号：</label>
    <input v-model="form.username" />
  </div>
  <div>
    <label>密码：</label>
    <input v-model="form.password" />
  </div>
</form>
```

### PatchFlag

Vue2 在对比每一个节点时，并不知道这些节点哪些信息会发生变化，因此只能将所有信息依次比较。

Vue3 会对静态节点和动态节点进行标记，只需要比较这些标记。

下列模板中，Vue2 会比较元素的类型、属性，并递归比较子节点，而 Vue3 只会比较元素的内容。

```vue
<div class="menu-container">
  <div class="logo">
    <h1>logo</h1>
  </div>
  <ul class="nav">
    <li><a href="">menu</a></li>
    <li><a href="">menu</a></li>
    <li><a href="">menu</a></li>
    <li><a href="">menu</a></li>
    <li><a href="">menu</a></li>
  </ul>
  <div class="user" :class="user.class">
    <span :class="active">{{ user.name }}</span>
  </div>
</div>
```

```ts
function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _hoisted_2,
    _createVNode("div", {
      class: ["user", _ctx.user.class]
    }, [
      _createVNode("span", {
        class: _ctx.active
      }, _toDisplayString(_ctx.user.name), 3 /* TEXT CLASS */)
    ], 2 /* CLASS */)
  ]))
}
```

## 组件通信

### DefineProps

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

### DefineEmits

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

### DefineExpose

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

### DefineModel (3.4+)

`defineModel` 是一个编译宏，它会返回一个允许被修改的 ref，编译器会将其展开为以下内容：

- 一个名为 `modelValue` 的 prop，它与返回的 ref 值同步；

- 一个名为 `update:modelValue` 的事件，当返回的 ref 被修改时触发。

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

在 3.4 之前，一般通过以下方式实现 prop 的 “双向绑定”，这样就会显得非常繁琐。

```vue
<script setup lang="ts">
  const props = defineProps(['modelValue'])
  const emits = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @input="emits('update:modelValue', $event.target.value)"
  />
</template>
```

### Provide & Inject

Provide 可以给后代组件提供数据。

```ts
import { ref, provide, readonly } from "vue"

const count = ref(0)
provide("count", count)
// 如果希望提供的数据不能被后代组件修改，可以使用 `readonly()` 来包装
provide("read-only-count", readonly(count))
```

Inject 可以注入上层组件提供的数据，并且这些数据是可以**直接修改**的。

```ts
import { ref, inject, type Ref } from "vue"

const count = inject<Ref<number>>("count")
// 没有设置默认值，可能为 undefined，所以需要非空断言
count!.value++
// 设置默认值，可以推断类型
inject("count", ref(1))
```

### UseAttrs

`useAttrs()` 会返回一个 Proxy 对象，它包含了父组件传递的数据和事件。可以通过 `v-bind` 批量传递给内部组件。

> [!warning]
>
> 不包含被 defineProps 接受的数据和被 defineEmits 接受的事件。

```vue
<MyComponent v-bind="attrs" />
```

```ts
import { useAttrs } from "vue"

const attrs = useAttrs()
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

在父组件中，`<slot>` 将会被替换为子组件内部的内容。

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

### 异步组件

如果直接使用 import 模块化引入组件，那么 vite / webpack 在打包的过程中，会把所有 js 文件都打包到一起，但是有很多模块暂时不需要加载，这样会导致包的体积过大，造成首屏加载时间过长。

我们可以使用异步组件，将组件进行分包，需要的时候再加载这个组件：

1. 通过 `defineAsyncComponent` 定义异步组件（可以搭配 `<suspense>` 组件使用），并使用动态 import 引入；

2. 在打包的时候，vite / webpack 如果遇到 import 动态引入，会把引入的资源分开进行打包；

3. 只有在需要渲染的时候才会加载异步组件，并且会把结果缓存起来用于下次重新渲染；

4. 动态 import 会返回一个 promise，引入成功时 promise 变为成功状态，然后组件就会被渲染了。

```vue
<script setup lang="ts">
  import { defineAsyncComponent } from "vue"
  
  const SyncVue = defineAsyncComponent(() => import("@/components/sync.vue"))
</script>

<template>
  <Suspense>
    <!-- 异步组件 -->
    <template #default>
      <SyncVue />
    </template>
    
    <!-- 在等待异步组件加载时，渲染一个加载状态 -->
    <template #fallback>
      <!-- 骨架屏 -->
    </template>
  </Suspense>
</template>
```

### 缓存组件

切换动态组件时，组件会在切入时被创建，切出时被销毁。频繁地切换会导致重新渲染，从而影响性能。

或者如果希望组件在切换时，能够缓存一些状态，比如输入框、多选框的状态，可以使用 `<KeepAlive>` 组件。

`<KeepAlive>` 默认会缓存内部所有的动态组件，可以给它设置一些属性，来约束缓存行为：

- include：缓存匹配的组件；

- exclude：排除匹配的组件；

- max：最大缓存数量。

```vue
<KeepAlive>
  <component :is="Current" />
</KeepAlive>
```

**源码解析**。`<KeepAlive>` 的核心为 `KeepAliveImpl` 对象。它包含了初始化函数 `setup` 和缓存策略：

初始化函数：返回一个 `render` 函数，它首先会读取插槽的默认值，也就是 `<KeepAlive>` 的默认插槽，并且判断如果子节点大于 1，就会报错，说明 `<KeepAlive>` 内部只能有一个插槽，也就是只会渲染单个组件。最后返回的其实还是它的内部组件（默认插槽），因为 `<KeepAlive>` 是一个抽象组件，它本身并不会被渲染。

缓存策略：首先会在 `onMounted` 中执行缓存函数 `cacheSubtree`，因为缓存标记 `pendingCacheKey` 初始为 null，并且它是在 `render` 函数中进行赋值的，所以缓存函数首次执行是不会缓存的。执行 `render` 函数时，将 `vnode.key` 赋值给缓存标记。之后在 `ononUpdated` 中再执行缓存函数时，缓存标记就不为 null 了，就会把缓存组件添加到缓存容器 `cache` 中。再根据 `vnode.key` 去缓存容器中查找是否存在缓存组件（是否被缓存过）。如果缓存组件存在，则继承组件实例，并将 `vnode` 标记为 `COMPONENT_KEPT_ALIVE`，这样渲染器就不会执行销毁和重新创建操作，然后使用 **LRU 算法**更新缓存队列 `keys`（删除不活跃的 key，添加新 key）；如果缓存组件不存在，则直接将 `vnode.key` 添加到 `keys` 中。

**如果与 include 和 exclude 的规则不匹配，则不进行缓存**。

> `activate` 和 `deactivate` 生命周期详见源码。

```ts
/* runtime-core/src/components/KeepAlive.ts */

const KeepAliveImpl: ComponentOptions = {
  name: `KeepAlive`,
  
  __isKeepAlive: true,
  
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  
  // 初始化函数
  setup(props: KeepAliveProps, { slots }: SetupContext) {
    const instance = getCurrentInstance()!
    const sharedContext = instance.ctx as KeepAliveContext
    
    if (!sharedContext.renderer) {
      return slots.default
    }
    
    // 缓存容器
    const cache: Cache = new Map()
    // 缓存 key 队列
    const keys: Keys = new Set()
    let current: VNode | null = null

    if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
      ;(instance as any).__v_cache = cache
    }
    
    const parentSuspense = instance.suspense
    
    const {
      renderer: {
        p: patch,
        m: move,
        um: _unmount,
        o: { createElement }
      }
    } = sharedContext
    // 临时的隐藏容器
    const storageContainer = createElement('div')
    
    // 注册 activate hook
    sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
      const instance = vnode.component!
      move(vnode, container, anchor, MoveType.ENTER, parentSuspense)
      // props 可能会发生变化，所以需要执行 patch
      patch(
        instance.vnode,
        vnode,
        container,
        anchor,
        instance,
        parentSuspense,
        isSVG,
        vnode.slotScopeIds,
        optimized
      )
      // patch 执行完成后，执行子节点的 activate 和 deactivate
      queuePostRenderEffect(() => {
        instance.isDeactivated = false
        if (instance.a) {
          invokeArrayFns(instance.a)
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeMounted
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode)
        }
      }, parentSuspense)
      
      if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
        devtoolsComponentAdded(instance)
      }
    }
    
    // 注册 deactivate hook
    sharedContext.deactivate = (vnode: VNode) => {
      const instance = vnode.component!
      // “卸载” 组件时，并不是真正的卸载，
      // 而是调用 move 方法，将组件移动到一个隐藏的容器中
      move(vnode, storageContainer, null, MoveType.LEAVE, parentSuspense)
      queuePostRenderEffect(() => {
        if (instance.da) {
          invokeArrayFns(instance.da)
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode)
        }
        instance.isDeactivated = true
      }, parentSuspense)

      if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
        devtoolsComponentAdded(instance)
      }
    }
    
    function unmount(vnode: VNode) {
      resetShapeFlag(vnode)
      _unmount(vnode, instance, parentSuspense, true)
    }
    
    function pruneCache(filter?: (name: string) => boolean) {
      cache.forEach((vnode, key) => {
        const name = getComponentName(vnode.type as ConcreteComponent)
        if (name && (!filter || !filter(name))) {
          pruneCacheEntry(key)
        }
      })
    }
    
    function pruneCacheEntry(key: CacheKey) {
      const cached = cache.get(key) as VNode
      if (!current || cached.type !== current.type) {
        unmount(cached)
      } else if (current) {
        resetShapeFlag(current)
      }
      cache.delete(key)
      keys.delete(key)
    }
    
    watch(
      () => [props.include, props.exclude],
      ([include, exclude]) => {
        include && pruneCache(name => matches(include, name))
        exclude && pruneCache(name => !matches(exclude, name))
      },
      { flush: 'post', deep: true }
    )
    
    // 缓存标记
    let pendingCacheKey: CacheKey | null = null
    // 缓存函数
    const cacheSubtree = () => {
      // 如果缓存标记不为 null，就把缓存组件存到缓存容器中
      if (pendingCacheKey != null) {
        cache.set(pendingCacheKey, getInnerChild(instance.subTree))
      }
    }
    // 首先会在 onMounted 和 onUpdated 中执行缓存函数设置缓存
    // 因为缓存标记是在 render 函数中进行赋值，所以缓存函数首次执行是不缓存的
    onMounted(cacheSubtree)
    onUpdated(cacheSubtree)
    
    onBeforeUnmount(() => {
      cache.forEach(cached => {
        const { subTree, suspense } = instance
        const vnode = getInnerChild(subTree)
        if (cached.type === vnode.type) {
          resetShapeFlag(vnode)
          const da = vnode.component!.da
          da && queuePostRenderEffect(da, suspense)
          return
        }
        unmount(cached)
      })
    })
    
    // 返回一个 render 函数
    return () => {
      pendingCacheKey = null
      
      if (!slots.default) {
        return null
      }
      
      // 读取插槽的默认值（默认插槽）
      const children = slots.default()
      const rawVNode = children[0]
      // 判断如果子节点大于 1，就会报错
      // 说明 KeepAlive 内部只能有一个子节点（插槽），也就是只渲染单个组件
      if (children.length > 1) {
        if (__DEV__) {
          warn(`KeepAlive should contain exactly one component child.`)
        }
        current = null
        return children
      } else if (
        !isVNode(rawVNode) ||
        (!(rawVNode.shapeFlag & ShapeFlags.STATEFUL_COMPONENT) &&
          !(rawVNode.shapeFlag & ShapeFlags.SUSPENSE))
      ) {
        current = null
        // 最后返回这个默认子节点（内部组件）
        // KeepAlive 是一个抽象组件，它本身并不会被渲染
        return rawVNode
      }
      
      let vnode = getInnerChild(rawVNode)
      const comp = vnode.type as ConcreteComponent
      
      const name = getComponentName(
        isAsyncWrapper(vnode)
          ? (vnode.type as ComponentOptions).__asyncResolved || {}
          : comp
      )
      
      const { include, exclude, max } = props
      
      // 如果与 include 和 exclude 的规则不匹配，则不进行缓存
      if (
        (include && (!name || !matches(include, name))) ||
        (exclude && name && matches(exclude, name))
      ) {
        current = vnode
        return rawVNode
      }
      
      const key = vnode.key == null ? comp : vnode.key
      // 根据 `vnode.key` 去缓存容器中查找缓存组件
      const cachedVNode = cache.get(key)
      
      if (vnode.el) {
        vnode = cloneVNode(vnode)
        if (rawVNode.shapeFlag & ShapeFlags.SUSPENSE) {
          rawVNode.ssContent = vnode
        }
      }
      
      // 将 `vnode.key` 赋值给缓存标记
      pendingCacheKey = key
      
      // 如果缓存组件存在，则继承组件实例，并将 vnode 标记为 ShapeFlags512 静态标记
      // 这样渲染器就不会重新创建新的组件实例
      if (cachedVNode) {
        // 缓存组件存在
        vnode.el = cachedVNode.el
        vnode.component = cachedVNode.component
        if (vnode.transition) {
          // 处理缓存组件的动画
          setTransitionHooks(vnode, vnode.transition!)
        }
        // 标记 vnode，不会重新渲染
        vnode.shapeFlag |= ShapeFlags.COMPONENT_KEPT_ALIVE
        // 更新 key 队列
        keys.delete(key)
        keys.add(key)
      }
      // 如果缓存组件不存在，则将 `vnode.key` 添加到 keys 中
      else {
        keys.add(key)
        // LRU 算法，删除不活跃的 key，添加新 key
        if (max && keys.size > parseInt(max as string, 10)) {
          pruneCacheEntry(keys.values().next().value)
        }
      }
      vnode.shapeFlag |= ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE

      current = vnode
      return rawVNode
    }
  }
}
```

### 传送组件

它可以将组件内部的元素 “传送” 到任意位置。

`<Teleport>` 接收一个 `to` prop 来指定传送的目标。值可以是一个 CSS 选择器，也可以是一个 DOM 元素。

```vue
<!-- 将 Dialog 传送至 body 中 -->
<Teleport to="body">
  <Dialog />
</Teleport>
```

## Router

### 基本配置

```ts
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/Home"
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/NotFound.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
```

### 路由模式

#### Hash Mode

监听 `hashchange` 原生事件，当 hash URL 发生变化时触发。

可以通过 `event.newURL` 获取当前的完整路径，拆分得到路由地址。

```ts
addEventListener("hashchange", (event: Event) => {
  event.newURL // 'http://127.0.0.1:5173/#/home'
  event.newURL.split("#")[1] // '/home'
})
```

#### History Mode

监听 `popstate` 原生事件，当历史记录改变时触发。

可以通过 `history.pushState` 进行**无刷新**跳转。

> [!warning]
>
> `pushState` 不会被 `popstate` 事件监听到，所以需要使用 VueRouter 内置的 `router.push()`。

```ts
addEventListener("popstate", (event: Event) => {
  // ...
})

history.pushState(null, null, "/home")
```

### 缓存路由

`<KeepAlive>` 内部的路由组件会在初始创建的时候被缓存。

> 缓存组件的生命周期函数 `activated` 和 `deactivated` 也适用于缓存路由组件。

```vue
<RouterView v-slot="{ Component }">
  <KeepAlive>
    <component :is="Component" />
  </KeepAlive>
</RouterView>
```

### 导航守卫

#### 全局前置守卫 beforeEach

在路由跳转前触发。常用于路由鉴权。

```js
router.beforeEach(async (to, _from, next) => {
  NProgress.start()
  useTitle(to.meta.title)
  
  // 有 Token
  if (userToken) {
    if (whiteRoutes.includes(to.name)) {
      next({ path: "/" })
    }
    else {
      // 用户信息有效
      if (userInfo?.username) {
        const addRoutes = (routes: RouteRecordRaw[]) => {
          routes.forEach(route => router.addRoute(route))
        }
        addRoutes([...userRoutes, ...errorRoutes])
        // addRoute 是异步的, 此时 next() 依然匹配不到路由, 需要重新进入当前路由
        next({ ...to, replace: true })
      }
      // 用户信息无效
      else {
        try {
          await getUserInfo()
          // 重新进入当前路由(重新鉴权)
          next({ ...to })
        }
        catch {
          userReset()
          next({ name: "Login" })
        }
      }
    }
  }
  // 无 Token
  else {
    if (whiteRoutes.includes(to.name)) {
      next()
    }
    else {
      userReset()
      next({ name: "Login" })
    }
  }
})
```

#### 全局解析守卫 beforeResolve

在导航被确认之前，同时也是所有组件内守卫和异步路由组件被解析后触发。

#### 全局后置钩子 afterEach

在路由跳转后触发。常用于路由鉴权的结束工作，例如关闭进度条。

```ts
router.afterEach((_to, _from) => {
  NProgress.done()
})
```

#### 路由独享守卫 beforeEnter

进入指定路由前触发。

```js
const routes = [
  {
    path: "/user",
    component: () => import("@/views/User"),
    beforeEnter: (to, from, next) => {
      next()
    }
  }
]
```

#### 组件内的守卫

[导航守卫 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#组件内的守卫)

#### 导航解析流程

- 导航被触发。

- 如果是离开一个组件，调用组件内离开时守卫 `beforeRouteLeave`。

- 如果不是，则调用全局前置守卫 `beforeEach`。

- 如果是动态路由切换，调用组件内更新时守卫 `beforeRouteUpdate`。再调用全局解析守卫 `beforeResolve`。

- 如果不是动态路由切换，调用路由独享守卫 `beforeEnter`。

- 然后解析异步路由组件。

- 调用组件内进入时守卫 `beforeRouteEnter`。

- 调用全局解析守卫 `beforeResolve`。

- 导航被确认。

- 最后调用全局后置钩子 `afterEach`。

- 触发 DOM 更新。

## Pinia

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


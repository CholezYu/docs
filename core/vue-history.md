---
title: Vue 2
icon: vue
date: 2024-04-22
description: Vue 2
---

## 响应式原理

### 数据代理

- Vue 实例中的 data 数据，默认在 `_data` 属性中，如果想要操作这个数据，需要通过 `_data` 访问。

- 为了更方便地操作数据，可以将 `_data` 中的数据拷贝到实例上。访问实例上的数据，就是访问 `_data` 的数据。

- 过程：

  遍历 `_data` 中的数据，使用 `defineProperty` 给实例扩展一个同名属性，并通过 get 和 set 监听这些属性。它们实际都是操作 `_data` 中的数据，所以我们访问实例上的数据就是访问 `_data` 中的数据。

### 数据劫持

- 目的：监听数据（收集获取当前数据的模板信息，通知收集的所有模板进行更新数据）。

- 原理：`Object.defineProperty`

- 过程：

  遍历 `_data` 中的数据，然后调用 defineReactive 函数为每一个属性都创建一个 dep 对象，通过 defineProperty 对这些属性进行重写，并添加 getter 和 setter，此时 dep 对象会以闭包的形式保存在 getter 和 setter 中。

  当我们访问响应式数据时，就会触发 get 方法，它会返回数据的值，同时调用 dep 的 depend 方法，让 dep 和 watcher 相互收集依赖。dep 收集 watcher 是为了可以通过 dep 找到 watcher，然后触发视图更新；watcher 收集 dep 是为了防止重复收集。在 dep 的 depend 方法中，会调用 watcher 的 addDep 方法将 dep 收集到 newDeps 数组中，同时还会收集 dep 对象的 id；在 addDep 方法中，又会调用 dep 的 addSub 方法将 watcher 收集到 subs 数组中。这就是一个相互收集依赖的过程。

  当我们修改响应式数据时，就会触发 set 方法，它会更新数据，同时调用 dep 的 notify 方法，遍历 dep 的 subs 数组中的 watcher，并按照 id 从小到大排列，然后依次执行每个 watcher 的 update 方法。在 update 方法中，判断 watcher 的类型，如果是计算 watcher，则不执行回调，后续会在 evaluate 方法中计算求值；如果是渲染 watcher 或侦听 watcher，则把 watcher 对象添加到一个调度队列中，然后通过 nextTick 将一个调度任务的方法 flushSchedulerQueue 添加到异步队列，等待异步执行。当执行这个调度任务的方法时，会从调度队列中依次取出每一个 watcher 对象执行它的 run 方法触发视图更新并重新收集依赖。

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

- 当响应式数据更新时，根据 render 函数返回的虚拟 DOM 树生成真实 DOM 元素，插入到页面，触发视图更新。

- 主要由三个部分构成：

  - 数据代理

  - 数据劫持

  - 发布与订阅者模式

- 详细过程：

  1. 使用 `Object.defineProperty` 完成数据代理，将 `_data` 中的数据拷贝到实例上，我们访问实例上的数据，其实就是访问 `_data` 中的数据。

  2. 在 `Observer` 类（发布者）中，主要通过 `Object.defineProperty` 对 `_data` 中的所有属性进行重写，并添加 getter 和 setter：1. 在 getter 中建立 dep（订阅中心的实例化对象）和 watcher（订阅者的实例化对象）的关系，让 dep 收集依赖（访问当前数据的 watcher）；2. 在 setter 中让 dep 通知所有依赖（watcher）更新数据。

  3. 在 Dep 类（订阅中心）中，有收集所有 watcher 的方法，和通知所有 watcher 更新数据的方法。当 `_data` 中每一个属性被劫持的时候，都会创建一个 dep（Dep 的实例化对象），在 getter 中调用 dep 的 depend 方法收集依赖，在 setter 中调用 dep 的 notify 方法通知更新。

  4. 在 Watcher 类（订阅者）中，有获取数据的 get 方法和更新视图的 update 方法，每一个组件都对应一个 Wathcer。watcher 会在第一次获取数据时被 dep 收集，当收到更新要求的时候，dep 就会通知所有的 watcher（Wacther 的实例化对象）调用 update 方法重新获取数据并更新视图。

### 响应式原理-v3

- Vue2 的响应式使用的是 defineProperty，它只能监听对象的现有属性，无法监听新增属性或者删除属性。

- Vue3 使用的是 Proxy 进行数据监听，它可以监听整个对象，包括对属性的读取、新增、修改和删除等操作。

- Vue3 的响应式主要用了四个方法：reactive、track、effect、trigger

  - reactive：

    它是用来将数据定义成响应式的。当我们定义 reactive 数据时，内部会通过 Proxy 对数据进行代理。但是 Proxy 只能进行代理对象的第一层属性，所以如果是引用类型，会递归调用 reactive，进行深度代理。

    当我们访问响应式数据的时候，就会触发 get 方法，会使用 Reflect.get 返回数据的值，然后通过 track 收集依赖，相对于 Vue2 中 dep 的 depend 方法。

    当我们修改响应式数据的时候，就会触发 set 方法，会使用 Reflect.set 更新数据，然后通过 trigger 触发视图更新，相对于 Vue2中 dep 的 notify 方法。

  - track：

    它是用来收集依赖的。建立响应式数据和 effect 实例之间的联系。

  - effect：

    它是用来触发视图更新的。

    初始化渲染时，effect 方法会执行一遍，此时会生成 effect 实例，将更新视图的方法保存在 effect 实例，并调用这个方法来完成页面的初始化渲染。此时会触发 Proxy 的 get 方法，通过 track 收集依赖：创建一个 WeakMap 容器，存储的 key 为响应式对象，value 是一个 Map 容器，Map 容器的 key 是响应式数据的某个属性，value 是一个 Set 容器，Set 容器会存储 effect 实例。这就是一个建立响应式数据和 effect 实例之间的联系的过程。

  - trigger：

    它是用来更新依赖的。找到响应式数据对应的 effect 实例，调用 run 方法更新视图。

    当响应式数据更新时，会触发 Proxy 的 set 方法，通过 trigger 更新依赖：通过 WeakMap 容器找到响应式数据对应的 effect 实例，调用 run 方法更新视图，完成响应式。这就是一个更新依赖的过程。

## Diff 算法

### 什么是 Diff 算法?

diff 算法就是比较新旧 DOM 树，寻找差异的算法，在源码中通过 `patch` 函数实现，所以也称为 patch 算法。

### Diff 算法比较思路

深度优先，同级比较。

### Diff 算法执行过程

- 当组件内部的响应式数据发生更新的时候，就会执行 Vue 内部的 `updateComponent` 函数，在函数内部先执行 `_render` 函数生成新的虚拟 DOM，将其作为参数传递给 `_update` 函数，并执行 `_update` 函数。

- 在 `_update` 函数中，先定义一个变量保存旧的虚拟 DOM (`vm._vnode`)，然后将新的虚拟 DOM 赋值给 `vm._vnode`，此时 `_update` 函数中存在新旧虚拟 DOM，最后使用 `patch` 函数对新旧虚拟 DOM 进行比较。

### Patch 比较过程

- `patch` 函数首先使用 `sameVnode` 方法比较两个节点的**标签类型**和 **key** 以及表单元素的 **type** 是否相同；

- 如果相同，则进入更新流程：

  - 把旧节点的真实 DOM 拿到新节点的位置复用；

  - 对比新旧节点的（标签）属性是否相同，如果不同则更新；

  - 比较子节点。

- 如果不相同，直接根据新节点创建元素，删除旧元素。

### Patch 比较子节点

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

### Key 的作用

- 在新旧虚拟 DOM 对比更新的时候，diff 算法默认采用 "就地更新" 原则；

- 多个子节点比较的时候，如果没有 key 属性，默认都是 undefined，所以每个新旧虚拟 DOM 的 key 都相同，就会简单地按照节点的顺序依次比较。如果新旧节点是顺序的不同，那么 diff 算法将达不到最高效；

- 使用 v-for 时，我们可以为每个元素提供唯一的 key，使它可以跟踪每个节点，重新排序时可以复用现有元素；

- key 可以使 Vue 更高效地渲染虚拟 DOM；

- key 必须满足稳定性和唯一性。

## nextTick

### nextTick 是什么？

`nextTick` 是用于异步执行任务的方法，会在下一次 DOM 更新完成之后执行。主要用于修改数据后，需要等待 DOM 更新再执行某些操作。例如打开弹窗需要等待表单元素渲染完成才能关闭表单校验，使用 Swiper 组件需要等待图片资源请求完成才能开启图片轮播。由于 Vue 在数据更新后不会立即进行 DOM 的重新渲染，而是在下一次事件循环中进行批量更新，因此直接在数据修改后获取 DOM 可能会得到旧的结果或者报错。此时可以使用 nextTick 确保在 DOM 更新后执行回调。

### nextTick 原理

在 Vue2 和 Vue3 中，`nextTick` 的原理有所不同。在 Vue2 的实现中，先准备一个 `callbacks` 数组，用来存放回调函数。再定义一个 `flushCallbacks` 方法，用来遍历 `callbacks` 并执行回调函数。再定义一个 `timerFunc` 函数，用来将 `flushCallbacks` 添加到异步队列。考虑到兼容性问题，`timerFunc` 依次使用四种添加异步任务的方法，分别是 `Promise`、`MutationObserver`、`setImmediate`、`setTimeout`，择优使用。Promise 通过 `.then()` 将回调函数添加到微队列；`MutationObserver` 会监听 DOM 元素的变化，并在变化时将回调函数添加到微队列；`setImmediate` 和 `setTimeout` 都是将回调函数添加到宏队列，但是 `setImmediate` 用于 nodejs 环境。

`nextTick` 有两种调用方式：回调函数形式和 Promise 形式。执行 nextTick 时，会将一个匿名函数添加到 `callbacks` 数组中。再执行 `timerFunc`，将 `flushCallbacks` 添加到异步队列。在这个匿名函数中，判断 `nextTick` 是否传入了回调函数。如果传入了回调函数，就会执行这个回调函数；如果没有，就会返回一个 `Promise`，并执行 `resolve()`，这样就会将 `.then()` 中的代码添加到微队列。等浏览器执行完同步代码，就会开始执行异步队列中的任务。执行到 `flushCallbacks` 时，会遍历 `callbacks` 中的回调函数并执行。

### 与 Vue3 的区别

Vue3 不再考虑兼容性问题，所以只会使用 `Promise.then()` 将回调函数添加到异步队列。

## KeepAlive

在 created 阶段，创建一个 cache 对象，用来缓存组件；再创建一个 keys 数组，用来缓存组件的 key。

在初始化渲染时触发 render 函数，判断组件是否符合缓存规则，也就是判断组件名是否在 include 数组中或者不在 exclude 数组中。如果符合缓存规则，再判断组件之前是否缓存过，如果缓存过，就使用之前缓存的组件，还需要移除原来缓存的 key，并将最新的 key 添加到缓存列表 keys 的末尾，然后返回缓存的组件；如果之前没有缓存过，就将新组件和 key 临时存储一下，等待 mounted 阶段再缓存，然后返回新组件。如果不符合缓存规则，就不缓存，直接返回组件。

在挂载完成后，也就是 mounted 阶段，使用 cacheVNode 方法将组件缓存起来，还要判断缓存列表长度是否超过设置的最大缓存数量，如果超过的话，就使用 LRU 算法，删除缓存列表的第一个组件。同时监听 include 和 exclude 数组，一旦它们发生变化，就删除不需要缓存的组件。

在组件渲染时，会触发 insert 方法，判断是不是缓存的组件，如果是，就会触发 activated 生命周期。

在组件卸载时，会触发 destroy 方法，判断是不是缓存的组件，如果是，就会触发 disactivated 生命周期。

## 生命周期

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

- 实例销毁之后，`destroyed` 触发。

## 组件通信

### 双向绑定

#### v-model

当使用 `:value` + `@input` 模式时，可以替换为 `v-model` 模式。

子组件为 input。

```vue
<!-- Parent.vue -->
<MyComponent :value="message" @input="message = $event" />

<MyComponent v-model="message" />
```

```vue
<!-- MyComponent.vue -->
<input :value="value" @input="$emit('input', $event.target.value)" />
```

子组件为非 input。

```vue
<!-- Parent.vue -->
<MyComponent :value="count" @input="count = $event" />

<MyComponent v-model="count" />
```

```vue
<!-- MyComponent.vue -->
<button @click="$emit('input', value + 1)"></button>
```

#### v-bind.sync

当使用 `:prop` + `@update:prop="prop = $event"` 模式时，可以替换为 `:prop.sync` 模式。

```vue
<!-- Parent.vue -->
<MyComponent :count="count" @update:count="count = $event" />

<MyComponent :count.sync="count" />
```

```vue
<!-- MyComponent.vue -->
<button @click="$emit('update:count', count + 1)"></button>
```

### 事件总线

```js
export default {
  beforeCreate() {
    Vue.prototype.$bus = this // 在 Vue 的原型上安装事件总线，所有组件都能访问
  }
}
```

```js
// A.vue
export default {
  mounted() {
    this.$bus.$on("my-event", value => { /* 监听事件 */ })
  },
  beforeDestroy() {
    this.$bus.$off("my-event") // 移除事件
  }
}
```

```js
// B.vue
this.$bus.$emit("my-event", [...this.args]) // 触发事件
```

### 发布订阅

```js
// A.vue
import Pubsub from "pubsub-js"

export default {
  mounted() {
    this.pubsubId = Pubsub.subscribe("my-message", (_ /* message-name */, value) => {}) // 订阅
  },
  beforeDestroy() {
    Pubsub.unsubscribe(this.pubsubId) // 取消订阅
  }
}
```

```js
// B.vue
import Pubsub from "pubsub-js"

Pubsub.publish("my-message", [...this.args]) // 发布消息
```

### 透传

`$attrs` 包含了父组件传递的数据（不包含被 props 接受的数据）。可以通过 `v-bind` 批量传递给内部组件。

```vue
<MyComponent v-bind="$attrs" />
```

`$listeners` 包含了父组件传递的事件。可以通过 `v-on` 批量传递给内部组件。

```vue
<MyComponent v-on="$listeners" />
```

### 依赖注入

provide 可以给后代组件提供数据和方法。

注意：

- provide 如果是一个对象，将无法访问 this，就不能将实例上的数据提供给后代，所以推荐写成函数。

- 提供的数据需要写成函数返回值形式，否则不具备响应式。

```js
export default {
  provide() {
    return {
      count: () => this.count,
      increment: this.increment
    }
  }
}
```

在任何后代组件里，我们都可以使用 inject 来接收 provide 提供的数据和方法。

```js
export default {
  inject: ["count", "increment"]
}
```

## Router

### 基本配置

**注意**：以 "/" 开头的嵌套路径会被当作根路径，所以子路由的路径不加 "/"。

```js
import VueRouter from "vue-router"

const router = new VueRouter({
  mode: "history", // 默认为 hash 模式
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("@/views/Home.vue")
    },
    {
      path: "*",
      name: "404",
      component: () => import("@/views/NotFound.vue")
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

### 缓存路由

`<keep-alive>` 内部的路由组件会在初始创建的时候被缓存。

> 缓存组件的生命周期函数 `activated` 和 `deactivated` 也适用于缓存路由组件。

```vue
<!-- 缓存一个路由组件 -->
<keep-alive include="Home">
  <router-view />
</keep-alive>

<!-- 缓存多个路由组件 -->
<keep-alive :include="['Home', 'User']">
  <router-view />
</keep-alive>
```

### 动态路由传参

#### Params

在路由配置中使用 ":" 占位。当匹配到路由时，参数会被设置到 `$route.params` 中。

```vue
<!-- 字符串写法 -->
<router-link to="/user/1" />

<!-- 对象写法，params 参数只支持 name -->
<router-link :to="{ name: 'User', params: { id: 1 } }" />
```

#### Query

如果 URL 中存在查询参数，参数会被设置到 `$router.query` 中。

```vue
<!-- 字符串写法 -->
<router-link to="/user?id=1" />

<!-- 对象写法 -->
<router-link :to="{ path: '/user', query: { id: 1 } }" />
<router-link :to="{ name: 'User', query: { id: 1 } }" />
```

### 路由组件传参

#### 布尔模式

将路由中所有 params 参数以 props 的形式传递给组件。

**注意**：只能传递 params 参数。

```js
const routes = [
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
const routes = [
  {
    path: "/user/:name",
    component: () => import("@/views/User"),
    props: { a: 1, b: 2 }
  }
]
```

#### 函数模式

将 getter 函数返回的对象中的所有属性以 props 的形式传递给组件。

**注意**：可以接受 `$route`，既能传递 params 参数，又能传递 query 参数，又能传递静态参数。

```js
const routes = [
  {
    path: "/user/:name",
    component: () => import("@/views/User"),
    props: $route => ({ ...$route.params, ...$route.query })
  }
]
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

const app = new Vue({
  render: h => h(App),
  store
})

app.$mount("#app")
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

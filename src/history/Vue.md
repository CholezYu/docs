---
title: Vue
icon: vue
date: 2024-04-14
---

> [!caution]
>
> 您正在浏览的是 Vue 2 文档，官方已经终止支持且不再维护。**请查看 [Vue 3](../front-end/Vue.md) 文档**。

## 响应式原理

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

## diff 算法

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

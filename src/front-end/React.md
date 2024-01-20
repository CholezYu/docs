---
title: React
icon: react
date: 2024-01-20
---

## Hooks

### useState

> useState 会触发组件的更新，并且 setState 是异步的，只能在组件更新之后才能获取最新的 state。

```tsx
import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <button onClick={ () => setCount(count => count + 1) }>{ count }</button>
      { /* or */ }
      <button onClick={ () => setCount(count + 1) }>{ count }</button>
    </>
  )
}
```

当 setState 的值为普通值时，执行多次相同的 setState 会被合并。

```tsx
const App = () => {
  const [count, setCount] = useState(0)
  
  const increment = () => {
    setCount(count + 1) // 1
    setCount(count + 1) // 1
    setCount(count + 1) // 1
  }
  
  return <button onClick={ increment }>{ count }</button>
}
```

而当 setState 的值为函数时，执行多次相同的 setState 不会被合并。

> 因为函数的返回值是未知的，只有执行才能确定结果，所以不会被合并；
>
> 而普通值是已知的，所以会被合并。

```tsx
const App = () => {
  const [count, setCount] = useState(0)
  
  const increment = () => {
    setCount(count =>  count + 1) // 1
    setCount(count =>  count + 1) // 2
    setCount(count =>  count + 1) // 3
  }
  
  return <button onClick={ increment }>{ count }</button>
}
```

### useEffect

当组件渲染完成或销毁时，setup 就会执行，并在下一次执行 useEffect 前执行 cleanup。

无论是否有依赖项，useEffect 都会在初始渲染完成后执行一次。

- 依赖数组有值：当依赖项发生更新的时候，useEffect 才会再次执行；

- 依赖数组为空：useEffect 只在初始渲染后执行；

- 没有依赖数组：组件每次重新渲染的时候，useEffect 都会再次执行。

```tsx
import { useState, useEffect } from "react"

const App = () => {
  const [count, setCount] = useState(0)
  
  useEffect(() => /* setup */ {
    const timer = setTimeout(() => {
      console.log(count)
    }, 3000)
    
    return () => /* cleanup */ {
      clearTimeout(timer)
    }
  }, [count])
  
  return <button onClick={ () => setCount(count => count + 1) }>{ count }</button>
}
```

> 生产环境下，useEffect 执行两次：
>
> 为了模拟组件创建、销毁、再创建的完整流程，及早暴露问题。

### useRef

用于操作 DOM 元素。为组件注册 ref，就可以通过 `ref.current` 获取这个元素。

```tsx
import { useRef } from "react"

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  
  const showInput = () => console.log(inputRef.current)
  
  return <input type="text" ref={ inputRef } onChange={ showInput } />
}
```

闭包陷阱：当异步函数获取 state 时，可能获取的不是最新的 state，需要使用 useRef 来解决。

如下，先点击一次打印按钮，再迅速点击五次累加按钮，最终结果为 `count: 5` `countRef.current: 10`。

> 因为 count 是一个值，而 countRef 是一个引用类型。

```tsx
import { useState, useRef, useEffect } from "react"

const App = () => {
  const [count, setCount] = useState(5)
  const countRef = useRef(5)
  
  useEffect(() => {
    countRef.current = count
  }, [count])
  
  const delayConsole = () => {
    setTimeout(() => {
      console.log(count) // 5
      console.log(countRef.current) // 10
    }, 3000)
  }
  
  return (
    <>
      {/* click 5 */}
      <button onClick={ () => setCount(count => count + 1) }>累加</button>
      <button onClick={ delayConsole }>打印</button>
    </>
  )
}
```

### useContext

使用 createContext 创建共享对象，将需要接收共享数据的组件放入 `<WhatContext.Provider>` 组件中，并向其 value 属性中注册共享数据。子组件可以通过 useContext 接收共享数据。

```tsx
const AppContext = createContext()

const App = () => {
  const [val, setVal] = useState("Hello React")
  
  return (
    <AppContext.Provider value={{ val, setVal }}>
      <MyComponent />
    </AppContext.Provider>
  )
}

const MyComponent = () => {
  const { val, setVal } = useContext(AppContext)
  
  return <input type="text" value={ val } onChange={ event => setVal(event.target.value) } />
}
```

### useMemo

useMemo 类似于 computed，用于缓存 state，只有当依赖项发生改变时，才会重新计算。

```tsx
import { useState, useMemo } from "react"

const App = () => {
  const [count, setCount] = useState(10)
  const [text, setText] = useState("")
  
  const double = useMemo(() => count * 2, [count]) // 只有当 count 改变时，才会重新计算
  
  return (
    <>
      <button onClick={ () => setCount(count => count + 1) }>{ double }</button>
      <input onChange={ event => setText(event.target.value) } value={ text } />
    </>
  )
}
```

### useCallback

useCallback 与 useMemo 用法相似，useMemo 用于缓存一个计算结果，useCallback 用于缓存一个函数。

```tsx
import { useState, useCallback } from "react"

const App = () => {
  const [count, setCount] = useState(10)
  const [text, setText] = useState("")
  
  const showCount = useCallback(() => {
    console.log(count)
  }, [count]) // 只有当 count 改变时，才会重新创建函数
  
  return (
    <>
      <button onClick={ () => setCount(count => count + 1) }>{ double }</button>
      <input onChange={ event => setText(event.target.value) } value={ text } />
    </>
  )
}
```

## 类式组件

### state

在 state 中定义的数据都具有响应式。

> 如果要修改 state 中的数据，必须使用 setState，否则修改的数据将不具有响应式。

```tsx
class App extends React.Component {
  state = {
    count: 0
  }
  
  increment = (n: number) => {
    return event => /* 返回一个真正的事件函数, 接收事件对象作为参数 */ {
      const { count } = this.state
      this.setState({ count: count + n })
    }
  }
  
  render() {
    const { count } = this.state
    
    return (
      <>
        <p>{ count }</p>
        <button onClick={ this.increment(2) }>+2</button>
        <button onClick={ this.increment(5) }>+5</button>
      </>
    )
  }
}
```

### props

在子组件中可以通过 props 接收父组件传递的数据。

> props 中的数据不能修改，否则将违背单向数据流。

```tsx
class App extends React.Component {
  state = {
    title: "Hello React",
    count: 0
  }
  
  increment = () => {
    const { count } = this.state
    
    this.setState({
      count: count + 1
    })
  }
  
  render() {
    const { title, count } = this.state
    
    return (
      <>
        {/* 将 title 属性和 increment 方法传递给子组件 */}
        <Item title={ title } increment={ this.increment } />
        <p>{ count }</p>
      </>
    )
  }
}

class Item extends React.Component {
  render() {
    const { title, increment } = this.props
    
    return (
      <>
        <h2>{ title }</h2>
        <button onClick={ increment }>count++</button>
      </>
    )
  }
}
```

如果传递的数据是一个对象或数组，可以使用批量传递：将对象或数组展开传递。

```jsx
state = {
  user: { name: "Paul", age: 18 }
}

render() {
  const { user } = this.state
  
  return <Item { ... user} /> // => <Item name={ user.name } age={ user.age } />
}
```

### refs

为虚拟 DOM 元素注册一个 ref 属性，就可以通过 refs 获取这个原生 DOM 元素。

> React 不建议频繁使用 ref。

```tsx
class App extends React.Component {
  getItem = () => {
    const { inputRef } = this.refs
  }
  
  render() {
    return (
      <>
        <input type="text" ref="inputRef" />
        <button onClick={ this.getItem }>点击</button>
      </>
    )
  }
}
```

### 双向绑定

将响应式数据设置给表单元素的 value 属性，实现响应式数据对表单元素的绑定。

通过事件函数设置（setState）响应式数据，值为表单元素的 value，实现表单元素对响应式数据的绑定。

```tsx
class App extends React.Component {
  state = { username: "", password: "" }
  
  changeForm = (key: string) => {
    return event => {
      this.setState({
        [key]: event.target.value
      })
    }
  }
  
  render() {
    const { username, password } = this.state
    
    return (
      <div>
        <input type="text" value={ username } onChange={ this.changeForm("username") } />
        <input type="password" value={ password } onChange={ this.changeForm("password") } />
      </div>
    )
  }
}
```

## 生命周期

### 挂载阶段

#### constructor

原生 class 的构造器函数。

```tsx
class App extends React.Component {
  constructor() {
    super() /* !!! */
  }
}
```

#### render

解析模板，渲染虚拟 DOM。

#### componentDidMount★

组件挂载完成，初始化结束。通常进行 **开启定时器、发送网络请求、订阅消息、监听自定义事件** 等操作。

```tsx
class App extends React.Component {
  componentDidMount() {
    const timer = setInterval()
  }
}
```

### 更新阶段

#### 进入更新阶段

- 父组件传递的 props 被修改；

- 当前组件的 state 发生变化；

- 使用 `forceUpdate()` 强制更新。

#### shouldComponentUpdate

控制是否执行更新。一般当子组件不需要随着父组件更新的时候，控制子组件不执行更新。

```tsx
class App extends React.Component {
  shouldComponentUpdate() {
    return false /* 不执行更新, 默认为 true */
  }
}
```

#### componentDidUpdate

组件更新完成，更新阶段结束。

### 卸载阶段

#### 进入卸载阶段

- 条件渲染卸载；

- 路由切换卸载；

- 使用 `root.unmount()` 卸载根容器。

#### componentWillUnmount★

组件即将被卸载。通常进行 **关闭定时器、取消订阅、移除自定义事件** 等操作。

```tsx
class App extends React.Component {
  componentWillUnmount() {
    clearInterval(timer)
  }
}
```

## Diffing

### 简单介绍

- 当数据发生变化时，React 会生成新的虚拟 DOM，然后对新生成的虚拟 DOM 与当前虚拟 DOM 进行比较；

- React 通过比较这两棵虚拟 DOM 树的差异，决定如何修改 DOM 结构。这种算法称为 diffing 算法；

- diffing 算法可以提升 React 的渲染性能，计算出虚拟 DOM 中变化的部分，针对该部分进行 DOM 操作。

### 算法策略

> **策略一**

- 两棵树只对同一层级的节点进行比较，若该节点不存在了，那么该节点及所有子节点将被删除，不再进行比较；

- React diffing 只考虑同层级的节点的位置变换，若为跨层级的位置变换，则为删除节点和创建节点的操作；

- React 官方建议不要进行 DOM 节点的跨层级操作。

>**策略二**

- 同一类型的组件（元素），按照原策略（tree diff）进行深层次比较；

- 不同类型的组件（元素），diffing 算法会将当前组件(元素)及其所有子节点全部删除，添加新的组件（元素）。

> **策略三**

- 对于同一层级的节点，React diffing 提供了四种节点操作：插入，删除，移动，更新；

- 插入：新的元素不在当前虚拟 DOM 中，而是全新的节点，则进行插入操作；

- 删除：元素已经在当前 DOM 中，但虚拟 DOM 更新后没有了，则进行删除操作；

- 移动：元素已经在当前 DOM 中，并且虚拟 DOM 更新时，元素没有变化，只是位置改变，则进行移动操作；

- 更新：元素只是属性发生了改变，则进行更新操作。

### key

- 当某个节点添加了同级节点中唯一的 key 属性，当它在当前层级的位置发生变化后，diffing 算法通过比较之后，如果发现了 key 值相同的新旧节点，就会执行移动操作，而不会执行删除旧节点与创建新节点的操作；

- React 建议不要用遍历时的 index 作为节点的 key 值，因为每个元素的 index 会随结构的改变而发生变化。

- key 的注意事项：

  - key 必须在当前列表具有唯一性；

  - key 必须具有稳定性。

## Router

### Router Hooks

React Router 中用到的 Hooks：

- `useRoutes`：将路由配置解析成虚拟 DOM。

- `useNavigate`：用于编程式导航，重定向跳转。

- `useSearchParams`：动态路由传参，获取 query 参数。

- `useLocation`：动态路由传参，获取 query 参数（字符串）或 state 参数（对象）。

- `useParams`：动态路由传参，获取 params 参数（对象）。

### 基本使用

`<BrowserRouter>` 组件中使用 React 路由。

```tsx
/* main.tsx */

import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(app).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

```tsx
/* App.tsx */

import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={ <Home /> }></Route>
        <Route path="/user" element={ <User /> }></Route>
      </Routes>
    </>
  )
}
```

`<Outlet>` 渲染处于活跃状态的路由。

```tsx
/* Layout.tsx */

import { Outlet, NavLink } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <div>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/user">User</NavLink>
      </div>
      
      <Outlet />
    </>
  )
}
```

### 嵌套路由

使用 `useRoutes` 解析路由配置。

```tsx
/* App.tsx */

import { useRoutes } from "react-router-dom"
import router from "@/router"

const App = () => {
  return <>{ useRoutes(router) }</>
}
```

路由配置，将嵌套的 `<Routes>` 与 `<Route>` 配置为对应的路由规则。

```tsx
/* router.tsx */

import { Navigate } from "react-router-dom"

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      // 默认路由
      {
        path: "/",
        element: <Navigate to="/home" />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/user",
        element: <User />
      }
    ]
  },
  // 任意路由
  {
    path: "/*",
    element: <NotFound />
  }
]
```

### 声明式导航

当路由匹配成功时，`<NavLink>` 会提供处于激活状态的类名，`<Link>` 则不会。

```tsx
/* Home/index.jsx */

import { Outlet, Link, NavLink } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </div>
      
      <div>
        <NavLink to="/home" className={ ({ isActive }) => isActive ? "active" : "" }>
          Home
        </NavLink>
        <NavLink to="/user" className={ ({ isActive }) => isActive ? "active" : "" }>
          User
        </NavLink>
      </div>
      
      <Outlet />
    </div>
  )
}
```

### 编程式导航

```tsx
/* Home/index.tsx */

import { Outlet, useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <div>
        <button onClick={ () => navigate("/home") }>Home</button>
        <button onClick={ () => navigate("/user") }>User</button>
      </div>
      
      <div>
        <button onClick={ () => navigate(-1) }>回退一个历史记录</button>
        <button onClick={ () => navigate(+1) }>前进一个历史记录</button>
      </div>
      
      <Outlet />
    </div>
  )
}
```

### 动态路由 - search

通过 query 传参。

```tsx
/* User/index.tsx */

import { Outlet, Link } from "react-router-dom"

const User = () => {
  return (
    <div>
      <Link to="/user/details?id=1">用户详情</Link>
      <Link to="/user/details?id=2">用户详情</Link>
      
      <Outlet />
    </div>
  )
}
```

获取 query 参数。

```tsx
/* User/Details/index.tsx */

import { useSearchParams } from "react-router-dom"

const Details = () => {
  const [search] = useSearchParams()
  
  const id = search.get("id")
}
```

将 query 参数解析为对象。

```tsx
/* User/Details/index.tsx */

import { useLocation } from "react-router-dom"
import qs from "qs"

const Details = () => {
  const { search } = useLocation()
  
  const { id } = qs.parse(search.slice(1)) // "?" => ""
}
```

### 动态路由 - params

通过 params 传参。需要使用 ":" 占位。

```tsx
/* User/index.tsx */

import { Outlet, Link } from "react-router-dom"

const User = () => {
  return (
    <div>
      <Link to="/user/details/1">用户详情</Link>
      <Link to="/user/details/2">用户详情</Link>
      
      <Outlet />
    </div>
  )
}
```

获取 params 参数。

```tsx
/* User/Details/index.tsx */

import { useParams } from "react-router-dom"

const Details = () => {
  const { id } = useParams()
}
```

### 动态路由 - state

通过 state 传参。`navigate()` 第二个参数可以传入 state 对象。

```tsx
/* User/index.tsx */

import { Outlet, Link, useNavigate } from "react-router-dom"

const User = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <button onClick={ navigate("/user/details", { state: { id: 1 } }) }>用户详情</button>
      <button onClick={ navigate("/user/details", { state: { id: 2 } }) }>用户详情</button>
      
      <Outlet />
    </div>
  )
}
```

获取 state 参数。

```tsx
/* User/Details/index.tsx */

import { useLocation } from "react-router-dom"

const Details = () => {
  const { id } = useLocation().state
}
```

### 路由懒加载

`<Suspense>` 用于在加载过程中作为替换的临时组件。`fallback` 属性可以指定临时替换的组件。

```tsx
/* router.tsx */

import { lazy, Suspense } from "react"
import Loading from "@/components/Loading"

function load(Component) {
  return (
    <Suspense fallback={ <Loading /> }>
      <Component />
    </Suspense>
  )
}

const routes = [
  {
    path: "/home",
    element: load(lazy(() => import("@/views/Home")))
  },
  {
    path: "/user",
    element: load(lazy(() => import("@/views/User")))
  }
]
```

## Redux

### 工作流程

![](https://s4.ax1x.com/2021/12/28/TsDeK0.jpg)

`dispatch(action)` => Store == `(state, action)` => Reducers == `return state` => Store

### 基本使用

```tsx
import { createStore, combineReducers } from "redux"

// 1. 创建 reducer 整合函数, 根据指令操作数据
function countReducer(state = { value: 0 } /* initState or updateState */, action) {
  switch (action.type) {
    case "count/increment":
      return { ...state, value: state.value + action.payload }
    case "count/decrement":
      return { ...state, value: state.value - action.payload }
    default:
      return state
  }
}

const reducers = combineReducers({
  count: countReducer
})

// 2. 通过 reducers 对象创建 store
const store = createStore(reducers)

// 3. 订阅 store 的更新
store.subscribe(() => root.render(<App />))

// 4. 通过 dispatch 派发 action 命令
store.dispatch({ type: "count/increment", payload: 1 })
store.dispatch({ type: "count/decrement", payload: 1 })
```

### 异步操作

> [pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=11&page_id=2&ret_num=48&session=b9fd987164f6aa47fad266f57dffaa6a](https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=11&page_id=2&ret_num=48&session=b9fd987164f6aa47fad266f57dffaa6a)

```tsx
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk" // 检测如果 dispatch(action) 返回的是一个函数, 直接调用

function movieReducer(state = { movieList: [] }, action) {
  switch (action.type) {
    case "movie/setMovie":
      state.movieList = action.payload
      return state
  }
}

const reducers = combineReducers({
  movie: movieReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

store.subscribe(() => root.render(<App />))

function getMovieList() {
  return async dispatch => {
    const result = await axios.get(url)
    dispatch({ type: "movie/setMovie", payload: result.data.data.list })
  }
}

store.dispatch(getMovieList())
```

## Redux Toolkit

### Redux Hooks

 Redux Toolkit 中用到的 Hooks：

- `useSelector`：获取 state 中的数据
- `useDispatch`：生成 dispatch，用于派发 action 命令

### 基本使用

项目目录

```
├── App.jsx
├── components
│   └── Home
│       └── index.jsx
├── main.jsx
└── store
    └── index.jsx
```

管理 Redux 中的数据及操作。

```tsx
/* store/index.jsx */

import { createSlice, configureStore } from "@reduxjs/toolkit"

const countSlice = createSlice({
  name: "count",
  initialState: {
    value: 0
  },
  reducers: {
    increment(state, { payload }) {
      state.value += payload
    },
    decrement(state, { payload }) {
      state.value -= payload
    }
  }
})

export const { increment, decrement } = countSlice.actions

const store = configureStore({
  reducer: {
    count: countSlice.reducer
  }
})

export default store
```

`<Provider>` 可以绑定 store，使内部的组件都能使用该 store 中的数据。

```tsx
/* main.jsx */

import { Provider } from "react-redux"
import store from "@/store"

ReactDOM.createRoot(app).render(
  <Provider store={ store }>
    <App />
  </Provider>
)
```

在组件中，使用 `useSelector` 获取 store 中的数据，使用 `useDispatch` 获取派发器，从而操作数据。

```tsx
/* components/Home/index.jsx */

import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "@/store"

export default function Home() {
  const count = useSelector(state => state.count.value)

  const dispatch = useDispatch()

  const addCount = () => {
    dispatch(increment(1)) // actionCreator => dispatch({ type: "increment", payload: 1 })
  }

  const subCount = () => {
    dispatch(decrement(1)) // actionCreator => dispatch({ type: "decrement", payload: 1 })
  }

  return (
    <div>
      <button onClick={ addCount }></button>
      <button onClick={ subCount }></button>
    </div>
  )
}
```

### 拆分模块

项目目录

```
store
├── index.jsx
└── slice
    └── countSlice.jsx
```

slice 文件夹管理切片（用于生成 actions 和 reducer）。

```tsx
/* store/slice/countSlice.jsx */

import { createSlice } from "@reduxjs/toolkit"

const countSlice = createSlice({
  name: "count",
  initialState: {
    value: 0
  },
  reducers: {
    increment(state, { payload }) {
      state.value += payload
    },
    decrement(state, { payload }) {
      state.value -= payload
    }
  }
})

export const { increment, decrement } = countSlice.actions

export const countReducer = countSlice.reducer
```

index 文件就是 store 的主文件，管理所有数据。

```tsx
/* store/index.jsx */

import { configureStore } from "@reduxjs/toolkit"
import { countReducer } from "./slice/countSlice.jsx"

const store = configureStore({
  reducer: {
    count: countReducer
  }
})

export default store
```

### 异步操作

项目目录

```
├── App.jsx 
├── components
│   └── Home
│       └── index.jsx
├── main.jsx
└── store
    ├── index.jsx
    └── slice
        └── movieSlice.jsx
```

```tsx
/* store/slice/movieSlice.jsx */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const getMovie = createAsyncThunk("movie/getMovie", async () => {
  const result = await axios.get(url)

  return result.data.data.list
})

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieList: []
  },
  reducers: {},
  extraReducers: {
    [getMovie.fulfilled](state, { payload }) {
      state.movieList = payload
    },
    [getMovie.rejected]() {
      console.log("rejected")
    },
    [getMovie.pending]() {
      console.log("pending")
    }
  }
})

export { getMovie }

export const movieReducer = movieSlice.reducer
```

```tsx
/* store/index.jsx */

import { configureStore } from "@reduxjs/toolkit"
import { movieReducer } from "./slice/movieSlice.jsx"

const store = configureStore({
  reducer: {
    movie: movieReducer
  }
})

export default store
```

```tsx
/* components/Home/index.jsx */

import { useSelector, useDispatch } from "react-redux"
import { getMovie } from "@/store/slice/movieSlice.jsx"

export default function Home() {
  const movie = useSelector(state => state.movie.movieList)

  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button onClick={ () => dispatch(getMovie()) }></button>

        <ul>
          { movie.map(item => <li key={ item.tvId }>{ item.albumName }</li>) }
        </ul>
      </div>
    </div>
  )
}
```

### RTK Query

---
title: React
icon: react
---

## 基本使用

### 引入 React

```html
<!-- React 核心模块, 提供 React 核心语法 -->
<script src="./react.development.js"></script>

<!-- 操作 DOM 模块, 提供 DOM 相关的语法 -->
<script src="./react-dom.development.js"></script>
```

### 基本使用

- `React.createElement()`
  - 创建虚拟 DOM；
  
  - 参数分别是：标签名；标签属性；子节点...
  
- `ReactDOM.createRoot()`

  - 创建根容器对象，让 React 组件或虚拟 DOM 在这个容器中展示。
  
- `render()`
  - 将 React 组件或虚拟 DOM 渲染成真实 DOM，并挂载到根容器上；

  - 首次调用 render 方法：所有虚拟 DOM 都会渲染成真实 DOM，挂载到根容器上；

  - 之后调用 render 方法：使用 diffing 算法将新的虚拟 DOM 与之前的进行比较，只渲染更新的部分。


```js
// 创建虚拟 DOM
const v = React.createElement("h1", { className: "outer" }, "Hello React")

// 创建 React 根容器节点
const root = ReactDOM.createRoot(app)

// 在根容器节点中渲染虚拟 DOM
root.render(v)
```

### JSX 创建虚拟 DOM

```jsx
const v = (
  <div>
    <h2>React</h2>
    <p>Hello JSX</p>
  </div>
)

const root = ReactDOM.createRoot(app)

root.render(v)
```

> 虚拟 DOM 不能写成字符串

### JSX 注意事项

- 使用插值语法混入 JS 表达式

- 插值表达式返回的类型:

  - string, number => string

  - boolean, null, undefined, symbol => ""

  - array => ...[] => string

  - object !=> *

- 元素类名须使用 className

- 行内样式须写成 `style={{}}`，并使用驼峰命名

- 有且只有一个根标签

- 关标签必须闭合

```jsx
const message = "Hello JSX"

const v = (
  <div>
    <p className="" style={{ color: "red", backgroundColor: "yellow" }}>
      {message}
    </p>
  </div>
)
```

## 条件渲染

```jsx
const v = (
  <div>
    { flag ? <h2>React</h2> : <h2>Vue</h2> }
  </div>
)
```

## 列表渲染

```jsx
const v = (
  <ul>
    { arr.map(item => <li>{ item }</li>) }
  </ul>
)

ReactDOM.createRoot(app).render(v)
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

## 类式组件

### 基本使用

```jsx
class Header extends React.Component {
  render() {
    return <h2>Header</h2>
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

ReactDOM.createRoot(app).render(<App />)
```

### 三大属性

#### state

在 state 中定义的数据都具有响应式特性。

> 如果要修改 state 中的数据，必须使用 setState，否则修改的数据将不具有响应式。

```jsx
class App extends React.Component {
  state = {
    count: 0
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <p>{count}</p>
        <button onClick={this.increment(2)}>+2</button>
        <button onClick={this.increment(5)}>+5</button>
      </div>
    )
  }

  increment = n => {
    return event => /* 返回一个真正的事件函数, 接收事件对象作为参数 */ {
      const { count } = this.state
      this.setState({
        count: count + n
      })
    }
  }
}
```

#### props

在子组件中可以通过 props 接收父组件传递的数据。

> props 中的数据不能修改，否则将违背单向数据流。

```jsx
class App extends React.Component {
  state = {
    title: "Hello React",
    count: 0
  }

  render() {
    const { title, count } = this.state
    return (
      <div>
        {/* 将 title 属性和 increment 方法传递给子组件 */}
        <Item title={title} increment={this.increment} />
        <p>{count}</p>
      </div>
    )
  }

  increment = () => {
    const { count } = this.state
    this.setState({
      count: count + 1
    })
  }
}

class Item extends React.Component {
  render() {
    const { title, increment } = this.props
    return (
      <div>
        <h2>{title}</h2>
        <button onClick={increment}>count++</button>
      </div>
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
  return <Item {...user} /> // => <Item name={user.name} age={user.age} />
}
```

#### refs

为虚拟 DOM 元素注册一个 ref 属性，就可以通过 refs 获取这个原生 DOM 元素。

> React 不建议频繁使用 ref。

```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <input type="text" ref="inputRef" />
        <button onClick={this.getItem}>点击</button>
      </div>
    )
  }

  getItem = () => {
    const { inputRef } = this.refs
  }
}
```

### 双向绑定

将响应式数据设置给表单元素的 value 属性，实现响应式数据对表单元素的绑定。

通过事件函数设置（setState）响应式数据，值为表单元素的 value，实现表单元素对响应式数据的绑定。

```jsx
class App extends React.Component {
  state = { username: "", password: "" }
  render() {
    const { username, password } = this.state
    return (
      <div>
        <input type="text" value={username} onChange={this.changeForm("username")} />
        <input type="password" value={password} onChange={this.changeForm("password")} />
      </div>
    )
  }

  changeForm = type => {
    return event => {
      this.setState({
        [type]: event.target.value
      })
    }
  }
}
```

## 生命周期

### 挂载阶段

#### constructor

原生 class 的构造器函数。

```jsx
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

```jsx
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

```jsx
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

```jsx
class App extends React.Component {
  componentWillUnmount() {
    clearInterval(timer)
  }
}
```

## 函数组件

```jsx
function Header(props) {
  const {count, setCount} = props
  
  return <h2 onClick={() => setCount(item => item + 1)}>{count}</h2>
}

function App() {
  const [count, setCount] = useState(0)
  
  return <Header count={count} setCount={setCount} />
}

ReactDOM.createRoot(app).render(<App />)
```

## Hooks

### useState

`const [state, setState] = useState(initialState)`

- state：响应式数据

- setState：修改响应式数据的方法

  > setState 是异步执行的，所以只能在渲染完成之后才能获取更新的响应式数据的值。

- initialState：响应式数据初始值

```jsx
function App() {
  const [count, setCount] = useState(0)

  /* 事件函数 */
  const addCount = () => {
    setCount(count + 1)
    // or
    setCount(count => count + 1)
  }
}
```

### useEffect

`useEffect(setup, [dependencies])`

- setup：异步回调函数。当组件内的同步代码执行完成之后，setup 就会执行。

  > `return cleanup`：在下一次执行 useEffect 前执行 cleanup。

- dependencies：依赖项数组。无论是否有依赖项，useEffect 都会在初始渲染完成后执行一次。

  > 依赖数组有值：当依赖项发生更新的时候，useEffect 就会再次执行；
  >
  > 依赖数组为空：useEffect 只在初始渲染后执行；
  >
  > 没有依赖数组：组件每次重新渲染的时候，useEffect 都会再次执行。

```jsx
function App() {
  const [count, setCount] = useState(0)

  useEffect(() => /* setup */ {
    const timer = setTimeout(() => {
      console.log(count)
    }, 3000)
    
    return () => /* cleanup */ {
      clearTimeout(timer)
    }
  }, [count])

  return <button onClick={() => {setCount(count => count + 1)}}>{count}</button>
}
```

### useRef

`const ref = useRef()`

声明一个 ref 对象，并将其作为属性传递给要操作的 DOM 元素，就可以通过 `ref.current` 获取这个元素。

```jsx
function App() {
  const [count, setCount] = useState(0)

  return <MyComponent count={count} setCount={setCount} />
}

function MyComponent({ count, setCount }) {
  const inputRef = useRef()
  
  return <input type="text" ref={inputRef} onChange={() => {console.log(inputRef.current)}} />
}
```

### useContext

`const { value, setValue } = useContext(SomeContext)`

使用 createContext 创建共享对象，将需要获取共享数据的组件放入 `<WhatContext.Provider>` 组件中。

> 在 `<WhatContext.Provider>` 组件注册 value 属性用于传递共享数据。
>
> 子组件中通过 useContext 接收共享数据。

```jsx
const AppContext = createContext()

function App() {
  const [value, setValue] = useState("Hello React")
  return (
    <div>
      <p>{value}</p>

      <AppContext.Provider value={{ value, setValue }}>
        <MyComponent />
      </AppContext.Provider>
    </div>
  )
}

function MyComponent() {
  const { value, setValue } = useContext(AppContext)

  const changeValue = event => {
    setValue(event.target.value)
  }

  return <input type="text" value={value} onChange={changeValue} />
}
```

## Router

### Router Hooks

 React Router 中用到的 Hooks：

- `useRoutes`：将路由配置解析成虚拟 DOM

- `useNavigate`：用于编程式导航，重定向跳转

- `useSearchParams`：动态路由传参，在子组件中获取查询参数（query）对应的值

- `useLocation`：动态路由传参，在子组件中获取查询参数（query）字符串或查询参数（state）对象

- `useParams`：动态路由传参，在子组件中获取查询参数（params）对象

### 基本使用

`<BrowserRouter>` 中的组件可以使用 React 路由。

```jsx
/* main.jsx */

import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(app).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

```jsx
/* App.jsx */

import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </div>
  )
}
```

### 路由配置

使用 `useRoutes` 将路由配置解析成虚拟 DOM。

```jsx
/* App.jsx */

import { useRoutes } from "react-router-dom"
import router from "@/router"

export default function App() {
  return <div>{useRoutes(router)}</div>
}
```

路由表，将嵌套的 `<Routes>` 与 `<Route>` 配置为对应的路由规则。

```jsx
/* router/index.jsx */

const routes = [
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/user",
    element: <User />
  }
]
```

### 嵌套路由

> 以 "/" 开头的嵌套路径会被当作根路径，所以子路由的路径不加 "/"。

```jsx
/* router/index.jsx */

const routes = [
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "game",
        element: <Game />
      }
    ]
  },
  {
    path: "/user",
    element: <User />
  }
]
```

`<Outlet>` 渲染处于活跃状态的路由组件。

```jsx
/* Home/index.jsx */

import { Outlet } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      
      <Outlet />
    </div>
  )
}
```

### 默认路由

`<Navigate>` 可以设置默认路由路径（重定向）。

```jsx
/* router/index.jsx */

import { Navigate } from "react-router-dom"

const routes = [
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
```

### 任意路由

"*" 可以匹配所有未配置的路由，用来处理错误页面。

```jsx
/* router/index.jsx */

const routes = [
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/user",
    element: <User />
  },
  {
    path: "/*",
    element: <NotFound />
  }
]
```

### 声明式导航

```jsx
/* Home/index.jsx */

import { Outlet, Link, NavLink } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <div>
        <Link to="/home/news"></Link>
        <Link to="/home/game"></Link>
      </div>
      
      <div>
        <NavLink to="/home/game" activeclassname="active"></NavLink>
        <NavLink to="/home/news" activeclassname="active"></NavLink>
      </div>
      
      <Outlet />
    </div>
  )
}
```

> `<Link>` 与 `<NavLink>` 的区别：
>
> `<NavLink>` 可以设置 "activeclassname" 属性，当路由匹配成功时，会自动设置 "active" 类名。

### 编程式导航

| 声明式                   | 编程式                   |
| ------------------------ | ------------------------ |
| `<Link to="/home/news">` | `navigate("/home/news")` |

编程式导航相对于声明式更加灵活，可以对跳转限制一些条件，或者跳转前进行一些其他操作。

```jsx
/* Home/index.jsx */

import { Outlet, useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()
  
  return (
    <div>
      <div>
        <button onClick={() => { navigate("/home/news") }}>新闻链接</button>
        <button onClick={() => { navigate("/home/game") }}>游戏链接</button>
      </div>
      
      <div>
        <button onClick={() => { navigate(-1) }}>回退一个历史记录</button>
        <button onClick={() => { navigate(+1) }}>前进一个历史记录</button>
      </div>
      
      <Outlet />
    </div>
  )
}
```

### 动态路由

#### search(query)

使用 query 传递参数。

```jsx
/* Game/index.jsx */

import { Link, Outlet } from "react-router-dom"

export default function Game() {

  return (
    <div>
      <Link to="/home/game/item?id=1&name=手机">手机游戏</Link>
      <Link to="/home/game/item?id=2&name=电脑">电脑游戏</Link>

      <Outlet />
    </div>
  )
}
```

获取查询参数（query）对应的值。

```jsx
/* Game/GameItem/index.jsx */

import { useSearchParams } from "react-router-dom"

export default function Item() {
  const [search] = useSearchParams()
  
  const id = search.get("id")
  const name = search.get("name")
}
```

需要将查询参数（query）解析为对象。

```jsx
/* Game/GameItem/index.jsx */

import { useLocation } from "react-router-dom"
import qs from "qs"

export default function Item() {
  const { search } = useLocation()
  
  const { id, name } = qs.parse(search.slice(1)) // "?" => ""
}
```

#### params

使用 params 传递参数。需要在路由表中配置路径时，使用 ":" 占位。

```jsx
/* Game/index.jsx */

import { Link, Outlet } from "react-router-dom"

export default function Game() {

  return (
    <div>
      <Link to="/home/game/item/1/手机">手机游戏</Link>
      <Link to="/home/game/item/2/电脑">电脑游戏</Link>

      <Outlet />
    </div>
  )
}
```

获取查询参数（params）对象。

```jsx
/* Game/GameItem/index.jsx */

import { useParams } from "react-router-dom"

export default function Item() {
  const { id, name } = useParams()
}
```

#### state

使用 state 传递参数。`navigate()` 第二个参数可以传入 `state` 对象。

```jsx
/* Game/index.jsx */

import { Link, Outlet, useNavigate } from "react-router-dom"

export default function Game() {
  const navigate = useNavigate()
  
  const url = "/home/game/item"
  
  return (
    <div>
      <button onClick={navigate(url, { state: { id: 1, name: "手机" } })}>手机游戏</button>
      <button onClick={navigate(url, { state: { id: 2, name: "电脑" } })}>电脑游戏</button>
      
      <Outlet/>
    </div>
  )
}
```

获取查询参数（state）对象。

```jsx
/* Game/GameItem/index.jsx */

import { useLocation } from "react-router-dom"

export default function Item() {
  const { id, name } = useLocation().state
}
```

### 路由懒加载

`<Suspense>` 用于在加载过程中作为替换的临时组件。`fallback` 属性可以指定临时替换的组件。

```jsx
/* router/index.jsx */

import { lazy, Suspense } from "react"
import Loading from "@/components/Loading"

function load(Component) {
  return (
    <Suspense fallback={ <Loading /> }>
      <Component></Component>
    </Suspense>
  )
}

export default [
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

```jsx
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

```jsx
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

```jsx
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

```jsx
/* main.jsx */

import { Provider } from "react-redux"
import store from "@/store"

ReactDOM.createRoot(app).render(
  <Provider store={ store }>
    <App/>
  </Provider>
)
```

在组件中，使用 `useSelector` 获取 store 中的数据，使用 `useDispatch` 获取派发器，从而操作数据。

```jsx
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

```jsx
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

```jsx
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

```jsx
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

```jsx
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

```jsx
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

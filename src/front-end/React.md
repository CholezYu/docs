---
title: React 18
icon: react
date: 2024-06-10
description: React
---

## Hooks

### useState

`setState` 会触发组件的更新。并且 **`setState` 是异步的**，如果在执行 `setState` 后立即获取 state，那么依然会得到旧值。所以应该在组件更新之后再获取最新的 state。

```tsx
const [count, setCount] = useState(0)

const increment = () => {
  count // => 0
  setCount(count + 1)
  count // => 0
}
```

> [!warning]
>
> 在一次事件中，如果多次执行相同的 `setState`，它们将会被批量处理，然后只触发**一次**重新渲染。

下列代码中，因为 `setCount` 是异步的，所以每次执行的时候 count 都为 0。并且，触发一次 increment 事件，只会执行一次 render 函数。

```tsx
const [count, setCount] = useState(0)

const increment = () => {
  setCount(count + 1) // 0 + 1
  setCount(count + 1) // 0 + 1
  setCount(count + 1) // 0 + 1
}
```

如果要解决这个问题，可以将一个更新函数作为参数，更新函数的计算结果会作为下一个更新函数的状态传入。当然，这种写法也只会触发一次重新渲染。

```tsx
const [count, setCount] = useState(0)

const increment = () => {
  setCount(count => count + 1) // 0 + 1
  setCount(count => count + 1) // 1 + 1
  setCount(count => count + 1) // 2 + 1
}
```

### useEffect

当组件**渲染完成后**或卸载时，setup 就会执行，并在下一次执行 `useEffect` 前执行 cleanup。

setup 会在初始渲染完成后执行一次。然后根据依赖项，决定是否再次执行：

- 没有依赖数组：组件每次重新渲染的时候，setup 都会再次执行。

- 依赖数组有值：当依赖项发生更新的时候，setup 才会再次执行。

- 依赖数组为空：setup 只在初始渲染完成后执行。

```tsx
const [state, setState] = useState(0)

useEffect(() => /* setup */ {
  let timer = setTimeout(() => {
    // do something...
  }, 1000)
  
  return () => /* cleanup */ {
    clearTimeout(timer)
    timer = null
  }
}, [state])
```

`useEffect` 可以模拟组件的生命周期。

```tsx
// 组件挂载
const useMounted = (fn: () => void) => {
  useEffect(() => {
    fn()
  }, [])
}

// 组件卸载
const useUnmounted = (fn: () => void) => {
  useEffect(() => {
    return fn
  }, [])
}
```

> [!warning]
>
> 开发环境下，如果开启严格模式，`useEffect` 会执行两次，这是为了模拟立即卸载组件和重新挂载组件，提前暴露问题。

### useRef

**引用一个值**

`useRef` 可以创建一个不需要渲染的数据，通过 `ref.current` 可以访问它的值。与 state 不同，ref 是可变的，但是它的改变不会触发组件重新渲染。ref 仅仅是一个普通的 JavaScript 对象。

我们可以使用 ref 存储一个定时器 ID。这样可以确保：

- 在重新渲染时能够存储数据（如果使用普通变量存储，那么每次重新渲染都会重置）。

- 如果组件被多次复用，ref 的改变并不会使他们之间相互影响，因为 ref 是每个组件内部特有的（而如果使用外部变量，那么它就会是共享的，它的改变会使其他复用的组件受到影响）。

```tsx
const timerRef = useRef(null)

timerRef.current = setInterval(() => {
  // do something...
}, 1000)

const stop = () => {
  clearInterval(timerRef.current)
}
```

> [!warning]
>
> 因为 ref 的改变不会触发重新渲染，所以不推荐将它在页面中展示。如果有需要，应该使用 state 代替。

下面是一个完整的计时器倒计时案例。

```tsx
const [count, setCount] = useState(10)
const countRef = useRef(count)

const timerRef = useRef(null)

const start = () => {
  timerRef.current = setInterval(() => {
    countRef.current--
    setCount(countRef.current)
    if (countRef.current === 0) stop()
  }, 1000)
}

const stop = () => {
  clearInterval(timerRef.current)
  timerRef.current = null
}
```

**操作 DOM**

为一个 HTML 元素注册 ref，就可以通过 `ref.current` 访问这个 DOM 元素。

下面的案例中，我们通过 ref 调用了 `<input>` 元素的 `focus()` 方法。

```tsx
const inputRef = useRef(null)

const focus = () => {
  inputRef.current.focus()
}

return <input ref={inputRef} />
```

**获取自定义组件的 ref**

如果像这样给自定义组件注册 ref，控制台可能会出现这样的错误：

> [!caution]
>
> Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
>
> 译：不能给函数组件提供 ref，你需要使用 `React.forwardRef()` 吗？

```tsx
const inputRef = useRef(null)

return <MyInput ref={inputRef} />
```

默认情况下，自定义组件不会暴露它们内部 DOM 节点的 ref。

我们需要使用 `forwardRef` 来包装自定义组件，这样就能将它的 ref 暴露给父组件。

```tsx
import { forwardRef, type ForwardedRef, type ChangeEventHandler } from "react"

const MyInput = forwardRef(({ value, onChange }: {
  value?: string | number
  onChange?: ChangeEventHandler<HTMLInputElement>
}, ref: ForwardedRef<HTMLInputElement>) => {
  return <input value={value} onChange={onChange} ref={ref} />
})
```

**闭包陷阱**

当异步函数获取 state 时，可能获取的不是最新的 state，需要使用 `useRef` 来解决。

如下，先点击一次打印按钮，再迅速点击五次累加按钮，最终结果为 `count: 5` `countRef.current: 10`。

这是因为 count 是一个值，而 countRef 是一个引用类型。

```tsx
const [count, setCount] = useState(5)
const countRef = useRef(5)

useEffect(() => {
  countRef.current = count
}, [count])

// 累加
const increment = () => setCount(count => count + 1)

// 打印
const delayConsole = () => {
  setTimeout(() => {
    count // => 5
    countRef.current // => 10
  }, 3000)
}
```

### useContext

`useContext` 接受一个 context 对象作为参数，该对象由 `createContext` 创建。并返回一个对象，它包含了 `<Context.Provider>` 组件提供的数据。

`<Context.Provider>` 类似于 `Vue Provider`，可以给后代组件提供数据。

```tsx
/* App.tsx */

const TextContext = createContext(null)

const [text, setText] = useState("Hello React")

return (
  <TextContext.Provider value={{ text, setText }}>
    <Text />
  </TextContext.Provider>
)
```

`useContext` 类似于 `Vue Inject`，可以注入上层组件提供的数据。

```tsx
/* Text.tsx */

const { text, setText } = useContext(TextContext)

return <input value={text} onChange={event => setText(event.target.value)} />
```

### useReducer

`useReducer` 就是简化版的 Redux。我们需要制定一套更新**状态**的规则，根据不同的事件类型，做出相应处理。我们将上述操作定义成一个 reducer 函数，它接受两个参数：

- `state`：状态。
- `action`：按照规范，它应该有两个参数。`type` 表示事件类型；`payload` 为一个包含额外参数的对象。

最后，需要将处理后的数据返回。

`useReducer` 需要接受一个 reducer 函数和一个初始的 state。它返回一个只读的 state 和 `dispatch` 函数。我们只能使用该函数来统一处理 state，而不是直接修改。

```tsx
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload.count }
    case "decrement":
      return { ...state, count: state.count - action.payload.count }
    default:
      return state
  }
}

const [state, dispatch] = useReducer(reducer, { count: 1 })

const increment = () => {
  dispatch({ type: "increment", payload: { count: 1 } })
}

const decrement = () => {
  dispatch({ type: "decrement", payload: { count: 1 } })
}
```

简单实现一下 `useReducer`。

```tsx
interface Action<T = any> {
  type: string
  payload?: T
}

function useReducer<T = any>(
  reducer: (state: T, action: Action<T>) => T,
  initialState: T
): [
  state: T,
  dispatch: (action: Action<T>) => void
] {
  const [state, setState] = useState(initialState)
  const dispatch = (action: Action<T>) => setState(reducer(state, action))
  
  return [state, dispatch]
}
```

### useMemo

`useMemo` 类似于 `computed`，用于缓存 state，只有当依赖项发生改变时，才会重新计算。

```tsx
import { useState, useMemo } from "react"

const App = () => {
  const [count, setCount] = useState(10)
  const [text, setText] = useState("")
  
  const double = useMemo(() => count * 2, [count]) // 只有当 count 改变时，才会重新计算
  
  return (
    <>
      <button onClick={() => setCount(count => count + 1)}>{double}</button>
      <input value={text} onChange={event => setText(event.target.value)} />
    </>
  )
}
```

### useCallback

`useCallback` 与 `useMemo` 用法相似，`useMemo` 用于缓存一个计算结果，`useCallback` 用于缓存一个函数。

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
      <button onClick={() => setCount(count => count + 1)}>{ double }</button>
      <input value={text} onChange={event => setText(event.target.value)} />
    </>
  )
}
```

## HOC

HOC 并不是 React 的 API，而是一种实现逻辑复用的技术。HOC 其实就可以看作是一个高阶函数，只不过 React 的组件都是用函数创建的，所以我们把它称为 “高阶组件”。

高阶组件接受一个组件作为参数，并返回一个新的组件。这个新的组件会具有高阶组件的功能。

下面是一个简单的案例。通过 `useEffect` 模拟组件挂载和卸载，并打印日志。

```tsx
/* WithLog.tsx */

const WithLog = (Component: FC) => {
  return (props: any) => {
    useEffect(() => {
      console.log(`${Component.name} 组件已挂载 ${now()}`)
      
      return () => {
        console.log(`${Component.name} 组件已卸载 ${now()}`)
      }
    }, [])
    
    return <Component {...props} />
  }
}
```

高阶组件可以赋予任何组件它的功能。以下一个最普通的 React 组件。

```tsx
/* MyComponent.tsx */

const MyComponent = ({ title }) => {
  return <h2>{title}</h2>
}
```

将以上组件作为参数传递给高阶组件，会返回一个新的组件，它已经具有了打印日志的功能。

> [!warning]
>
> 给高阶组件返回的新组件传递 props 时，其实是传递给了高阶组件，所以高阶组件需要将 props 批量传递给目标组件。

```tsx
/* App.tsx */

const MyComponentLog = WithLog(MyComponent)

const App = () => {
  return <MyComponentLog title="Log" />
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

- 不同类型的组件（元素），diffing 算法会将当前组件（元素）及其所有子节点全部删除，添加新的组件（元素）。

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

### 基本使用

在 `<BrowserRouter>` 组件中使用 React 路由。

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
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  )
}
```

`<Outlet>` 渲染处于活跃状态的路由。

```tsx
/* Layout.tsx */

import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
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
  return <div>{useRoutes(router)}</div>
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
import { Outlet, Link, NavLink } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </div>
      
      <div>
        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>
        <NavLink to="/user" className={({ isActive }) => isActive ? "active" : ""}>
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
import { Outlet, useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <div>
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/user")}>User</button>
      </div>
      
      <div>
        <button onClick={() => navigate(-1)}>返回</button>
        <button onClick={() => navigate(+1)}>前进</button>
      </div>
      
      <Outlet />
    </div>
  )
}
```

### 动态路由 - search

通过 search 传参。

```tsx
/* User/index.tsx */

import { Outlet, Link, useNavigate } from "react-router-dom"

const User = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <Link to="/user/profile?id=1">用户信息</Link>
      {/* or */}
      <button onClick={() => navigate({ pathname: "/user/profile", search: "id=2" })}>
        用户信息
      </button>
      
      <Outlet />
    </div>
  )
}
```

获取 search 参数，或将 search 参数解析为对象。

```tsx
/* User/Profile/index.tsx */

import { useSearchParams, useLocation } from "react-router-dom"
import qs from "qs"

const Profile = () => {
  const [search] = useSearchParams()
  const id = search.get("id")
  
  // or
  
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
      <Link to="/user/profile/1">用户信息</Link>
      <Link to="/user/profile/2">用户信息</Link>
      
      <Outlet />
    </div>
  )
}
```

获取 params 参数。

```tsx
/* User/Profile/index.tsx */

import { useParams } from "react-router-dom"

const Profile = () => {
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
      <button onClick={navigate("/user/profile", { state: { id: 1 } })}>用户信息</button>
      <button onClick={navigate("/user/profile", { state: { id: 2 } })}>用户信息</button>
      
      <Outlet />
    </div>
  )
}
```

获取 state 参数。

```tsx
/* User/Profile/index.tsx */

import { useLocation } from "react-router-dom"

const Profile = () => {
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
    <Suspense fallback={<Loading />}>
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

`dispatch(action)` => Store == `(state, action)` => Reducers == `return state` => Store

### 基本使用

```tsx
import { createStore, combineReducers } from "redux"

// 1. 创建 reducer 整合函数，根据指令操作数据
const countReducer = (state = { value: 0 } /* init or update */, action) => {
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

### 基本使用

slice 文件用于创建 actions 和生成 reducer。

```tsx
/* store/slice/counter.tsx */

import { createSlice } from "@reduxjs/toolkit"

export interface StateType {
  count: number
}

const initialState: StateType = {
  count: 0
}

const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, { payload }) {
      state.count += payload.count
    },
    decrement(state, { payload }) {
      state.count -= payload.count
    }
  }
})

export const { increment, decrement } = countSlice.actions

export const countReducer = countSlice.reducer
```

一个 store 中可能会有多个 slice。所以需要整合所有 slice，集中管理数据。

```tsx
/* store/index.tsx */

import { configureStore } from "@reduxjs/toolkit"
import { countReducer } from "./slice/count.tsx"

const store = configureStore({
  reducer: {
    counter: countReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
```

使用 `<Provider>` 组件注册 store，在其内部的组件都能访问 store 中的数据。

```tsx
/* main.tsx */

import { Provider } from "react-redux"
import store from "@/store"

ReactDOM.createRoot(app).render(
  <Provider store={ store }>
    <App />
  </Provider>
)
```

在组件中，使用 useSelector 获取 store 中的数据，使用 useDispatch 生成 dispatch 方法。

```tsx
/* Home/index.tsx */

import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "@/store/slice/counter.tsx"
import type { RootState, AppDispatch } from "@/store"

const Home = () => {
  const counter = useSelector((state: RootState) => state.counter)
  
  const dispatch: AppDispatch = useDispatch()
  
  const payload = { count: 1 }
  
  return (
    <>
      <p>{counter.count}</p>
      
      <button onClick={() => dispatch({ type: "counter/increment", payload })}> +1 </button>
      <button onClick={() => dispatch({ type: "counter/decrement", payload })}> -1 </button>
      
      {/* or */}
      
      <button onClick={() => dispatch(increment(payload))}> +1 </button>
      <button onClick={() => dispatch(decrement(payload))}> -1 </button>
    </>
  )
}
```

### 异步操作

```tsx
/* store/slice/movieSlice.tsx */

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
/* store/index.tsx */

import { configureStore } from "@reduxjs/toolkit"
import { movieReducer } from "./slice/movieSlice.tsx"

const store = configureStore({
  reducer: {
    movie: movieReducer
  }
})

export default store
```

```tsx
/* components/Home/index.tsx */

import { useSelector, useDispatch } from "react-redux"
import { getMovie } from "@/store/slice/movieSlice.tsx"

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

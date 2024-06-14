---
title: React 18
icon: react
date: 2024-06-15
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
import { forwardRef } from "react"

// interface ForwardRefRenderFunction<T, P = {}> {
//   (props: P, ref: ForwardedRef<T>): ReactNode
// }

const MyInput = forwardRef<HTMLInputElement, any>((props, ref) => {
  return <input ref={ref} {...props} />
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

const changeText = (event: ChangeEvent<HTMLInputElement>) => {
  setText(event.target.value)
}

return <input value={content} onChange={changeContent} />
```

### useReducer

`useReducer` 就是简化版的 Redux。我们需要制定一套更新 state 的规则，根据不同事件类型，做出相应处理。我们将上述操作定义成一个 reducer 函数，它接受两个参数：

- `state`：状态。
- `action`：必须有一个 `type` 属性，标识事件类型。如果有额外的参数，通常写在 `payload` 中。

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

`useMemo` 类似于 `Vue Computed`，用于缓存一个计算结果，只有当依赖项发生改变时，才会重新计算。

```tsx
const [count, setCount] = useState(1)

const double = useMemo(() => count * 2, [count]) // 只有当 count 改变时，才会重新计算
```

### useCallback

`useCallback` 与 `useMemo` 用法相似，用于缓存一个函数。

```tsx
const [count, setCount] = useState(1)

const showCount = () => console.log(count)

const cachedShowCount = useCallback(showCount, [count]) // 只有当 count 改变时，才会重新创建函数
```

## HOC

HOC 并不是 React 的 API，而是一种实现逻辑复用的技术。HOC 其实就可以看作是一个高阶函数，只不过 React 的组件都是用函数创建的，所以我们把它称为 “高阶组件”。

高阶组件接受一个组件作为参数，并返回一个新的组件。这个新的组件会具有高阶组件的功能。

下面是一个简单的案例。通过 `useEffect` 模拟组件挂载和卸载，并打印日志。

```tsx
/* WithLog.tsx */

const WithLog = (Component: FC<any>) => {
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
/* About.tsx */

const MyComponentLog = WithLog(MyComponent)

const About = () => {
  return <MyComponentLog title="About" />
}
```

## Diffing

### 简单介绍

- 当数据发生变化时，React 会生成新的虚拟 DOM，然后对新生成的虚拟 DOM 与当前虚拟 DOM 进行比较；

- React 通过比较这两棵虚拟 DOM 树的差异，决定如何修改 DOM 结构。这种算法称为 Diffing 算法；

- Diffing 算法可以提升 React 的渲染性能，计算出虚拟 DOM 中变化的部分，针对该部分进行 DOM 操作。

### 算法策略

**策略一**

- 两棵树只对同一层级的节点进行比较，若该节点不存在，则该节点及所有子节点将被删除，不再进行比较；

- React Diffing 只考虑同层级的节点的位置变换，若为跨层级的位置变换，则为删除节点和创建节点的操作；

- React 官方建议不要进行 DOM 节点的跨层级操作。

**策略二**

- 同类型组件，按照原策略（Tree Diff）进行深层次比较；

- 不同类型组件，Diffing 算法会将当前组件、及其所有子节点全部删除，添加新的组件。

**策略三**

- 对于同一层级的节点，React Diffing 提供了四种节点操作：插入，删除，移动，更新；

- 插入：新的元素不在当前虚拟 DOM 中，而是全新的节点，则进行插入操作；

- 删除：元素已经在当前 DOM 中，但虚拟 DOM 更新后没有了，则进行删除操作；

- 移动：元素已经在当前 DOM 中，并且虚拟 DOM 更新时，元素没有变化，只是位置改变，则进行移动操作；

- 更新：元素只是属性发生了改变，则进行更新操作。

### Key

- 当某个节点添加了同级节点中唯一的 key 属性，当它在当前层级的位置发生变化后，Diffing 算法通过比较之后，如果发现了 key 值相同的新旧节点，就会执行移动操作，而不会执行删除旧节点与创建新节点的操作；

- React 建议不要用遍历时的 index 作为节点的 key 值，因为每个元素的 index 会随结构的改变而发生变化。

- key 的注意事项：

  - key 必须在当前列表具有唯一性；
  
  - key 必须具有稳定性。

## Router <Badge text="v6" type="tip" />

### 基本配置

使用 `<Routes>` 和 `<Route>` 的组合写法。

```tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
```

v6 提供了 `useRoutes`，可以定义 `Vue Router` 风格的路由。

```tsx
import { BrowserRouter, useRoutes, Navigate } from "react-router-dom"

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

// `useRoutes` may be used only in the context of a <Router> component.
const Router = () => {
  return useRoutes(routes)
}

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="home" />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
]
```

v6 推荐将 `<BrowserRouter>` 迁移到 `<RouterProvider>` 。

```tsx
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom"

const App = () => {
  return <RouterProvider router={router} />
}

const router = createBrowserRouter(routes)

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="home" />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
]
```

如果更喜欢 JSX 风格的路由，推荐使用 `createRoutesFromElements`。

```tsx
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"

const App = () => {
  return <RouterProvider router={router} />
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Navigate to="home" />} />
    <Route path="home" element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>
))
```

### Link & NavLink

`<Link>` 是一种导航链接，当用户点击时会跳转到另一个页面。

`<NavLink>` 是一种特殊的 `<Link>`，它会给活跃的路由提供三种状态：`isActive` 激活、`isPending` 加载、`isTransitioning` 过渡。我们可以根据它不同的状态，设置对应的样式。

```tsx
const Layout = () => {
  return (
    <>
      <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
        About
      </NavLink>
      
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </>
  )
}
```

### useNavigate

`useNavigate()` 会返回一个函数，通常命名为 `navigate`，它是一种编程式的导航。

`navigate` 接受两个参数：

- 第一个参数 `to` 与 `<Link to>` 的类型相同。可以是一个路径字符串，也可以是一个描述路径的对象。

- 第二个参数 `options` 与 `<Link props>` 相似。常用的属性有 `state` `replace`。

下面是 `navigate` 的类型声明。可以看出 `to.search` `to.hash` `options.state` 可以在导航跳转时携带参数。

```ts
declare function useNavigate(): NavigateFunction

export interface NavigateFunction {
  (to: To, options?: NavigateOptions): void
  (delta: number): void
}

type To = string | Partial<Path>

interface Path {
  /**
   * A URL pathname, beginning with a /.
   */
  pathname: string
  
  /**
   * A URL search string, beginning with a ?.
   */
  search: string
  
  /**
   * A URL fragment identifier, beginning with a #.
   */
  hash: string
}

interface NavigateOptions {
  replace?: boolean
  state?: any
  preventScrollReset?: boolean
  relative?: RelativeRoutingType
  unstable_flushSync?: boolean
  unstable_viewTransition?: boolean
}
```

通过 `to.search` 传递 search 参数（query string）。

```tsx
const navigate = useNavigate()

const goto = () => {
  navigate({ pathname: "/user", search: "?id=1&name=minji" })
}
```

通过 `options.state` 传递 state 参数。

```tsx
const navigate = useNavigate()

const goto = () => {
  navigate("/user", { state: { id: 1, name: "minji" } })
}
```

### useLocation

`useLocation` 会返回一个 location 对象。下面是它的类型声明。

```ts
declare function useLocation(): Location

interface Location<State = any> extends Path {
  /**
   * A value of arbitrary data associated with this location.
   */
  state: State
  
  /**
   * A unique string associated with this location. May be used to safely store
   * and retrieve data in some other storage API, like `localStorage`.
   *
   * Note: This value is always "default" on the initial location.
   */
  key: string
}

interface Path {
  /**
   * A URL pathname, beginning with a /.
   */
  pathname: string
  
  /**
   * A URL search string, beginning with a ?.
   */
  search: string
  
  /**
   * A URL fragment identifier, beginning with a #.
   */
  hash: string
}
```

我们可以使用 `useLocation` 获取 search 参数，并对它进行解析。

```tsx
import { useLocation } from "react-router-dom"
import qs from "query-string"

const location = useLocation()
/* {
  hash: ""
  key: "xlmnk210"
  pathname: "/user"
  search: "?id=1&name=minji"
  state: null
} */

qs.parse(location.search) // { id: '1', name: 'minji' }
```

`useLocation` 还扩展了一个 state 属性，它就是通过 `options.state` 传递的参数。

```tsx
const location = useLocation()

location.state // { id: '1', name: 'minji' }
```

### useSearchParams

`useSearchParams` 类似于 `useState`，它返回 `[searchParams, setSearchParams]`，分别用来获取参数的值，和修改当前位置的 Query String，并且会触发组件的更新。

```tsx
import { useSearchParams } from "react-router-dom"

const [searchParams, setSearchParams] = useSearchParams()

searchParams.get("id") // 1
searchParams.get("name") // minji
```

### useParams

如果需要传递 params 参数，可以使用 `useParams`。**注意**：需要使用 ":" 占位。

```tsx
const goto = () => {
  () => navigate("/user/1/minji")
}
```

`useParams` 返回的就是 params 参数。

```tsx
import { useParams } from "react-router-dom"

const params = useParams() // { id: '1', name: 'minji' }
```

### 路由懒加载

`<Suspense>` 用于在加载过程中作为替换的临时组件。`fallback` 属性可以指定临时替换的组件。

```tsx
/* router.tsx */

import { lazy, Suspense } from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

const load = (Component) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
)

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="Home" element={load(lazy(() => import("@/pages/Home.tsx")))} />
    <Route path="About" element={load(lazy(() => import("@/pages/About.tsx")))} />
  </Route>
))
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

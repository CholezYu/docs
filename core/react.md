---
title: React 18
icon: react
date: 2024-07-16
description: React
---

<script setup>
  import Tsx from "@source/components/Icons/Tsx.vue"
  import Ts from "@source/components/Icons/Ts.vue"
</script>

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
const InputContext = createContext(null)

const [content, setContent] = useState("Hello React")

const inputModel = {
  value: content,
  onChange: (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value)
  }
}

return (
  <InputContext.Provider value={inputModel}>
    <Input />
  </InputContext.Provider>
)
```

`useContext` 类似于 `Vue Inject`，可以注入上层组件提供的数据。

```tsx
/* input.tsx */

const inputModel = useContext(InputContext)

return <input {...inputModel} />
```

### useReducer

`useReducer` 就是简化版的 Redux。我们需要制定一套更新 state 的规则，根据不同事件类型，做出相应处理。我们将上述操作定义成一个 reducer 函数，它接受两个参数：

- `state`：状态。
- `action`：必须有一个 `type` 属性，表示事件类型。如果有额外的参数，通常写在 `payload` 中。

最后，需要将处理后的数据返回。

`useReducer` 需要接受一个 reducer 函数和初始的 state。它会返回一个只读的 state 和 dispatch 函数。我们只能使用该函数来统一处理 state，而不是直接修改。

```tsx
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "increment":
      return { ...state, count: state.count + payload.count }
    case "decrement":
      return { ...state, count: state.count - payload.count }
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
type Action<T = any> = {
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

::: tabs#hoc

@tab <Tsx /> withLog.tsx

下面是一个简单的案例。通过 `useEffect` 模拟组件挂载和卸载，并打印日志。

```tsx
const withLog = (Component: FC<any>) => {
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

@tab <Tsx /> *.tsx

将任意组件作为参数传递给高阶组件，会返回的一个新的组件，并且它已经具有了打印日志的功能。

```tsx
const TitleLog = withLog(({ title }) => (
  <h2>{title}</h2>
))

return <TitleLog title="hello react" />
```

:::

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

## Router

### 路由配置

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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
```

v6 提供了 `useRoutes`，支持 `Vue Router` 风格的路由。

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
      },
      {
        path: "*",
        element: <NotFound />
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
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]
```

如果更喜欢 JSX 风格的路由，可以使用 `createRoutesFromElements`。

```tsx
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate
} from "react-router-dom"

const App = () => {
  return <RouterProvider router={router} />
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Navigate to="home" />} />
    <Route path="home" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Route>
))
```

### Link & NavLink

`<Link>` 是一种导航链接，当用户点击时会跳转到另一个页面。

`<NavLink>` 是一种特殊的 `<Link>`，它会给路由提供三种状态：`isActive` 激活、`isPending` 加载、`isTransitioning` 过渡。我们可以根据它不同的状态，设置对应的样式。

```tsx
<NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>
  Home
</NavLink>
<NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
  About
</NavLink>

<Link to="/home">Home</Link>
<Link to="/about">About</Link>
```

### useNavigate

`useNavigate` 会返回一个 `navigate` 函数，它是一种编程式的导航。

`navigate` 接受两个参数：

- 第一个参数 `to` 与 `<Link to>` 的类型相同。可以是一个路径字符串，也可以是一个描述路径的对象。

- 第二个参数 `options` 与 `<Link props>` 相似。常用的属性有 `state` `replace`。

下面是 `navigate` 的类型声明。

```ts
declare function useNavigate(): NavigateFunction

interface NavigateFunction {
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

我们可以使用 `useNavigate` 传递三种路由参数：search (query string)、params、state。

```tsx
import { useNavigate } from "react-router-dom"

const navigate = useNavigate()

// 传递 search 参数
navigate({ pathname: "/user", search: "?id=1&name=minji" })

// 传递 params 参数，需要设置动态路径
navigate("/user/1/minji") // <Route path="user/:id/:name" />

// 传递 state 参数
navigate("/user", { state: { id: 1, name: "minji" } })
```

### search

使用 `useLocation` 获取 search 参数，并对它进行解析。

```ts
import { useLocation } from "react-router-dom"
import qs from "query-string"

const location = useLocation()

location.search // ?id=1&name=minji
qs.parse(location.search) // { id: '1', name: 'minji' }
```

使用 `useSearchParams` 获取 search 参数。

```tsx
import { useSearchParams } from "react-router-dom"

const [searchParams, setSearchParams] = useSearchParams()

searchParams.get("id") // 1
searchParams.get("name") // minji
```

### params

使用 `useParams` 获取 params 参数。

```tsx
import { useParams } from "react-router-dom"

const params = useParams() // { id: '1', name: 'minji' }
```

### state

使用 `useLocation` 获取 state 参数。

```tsx
import { useLocation } from "react-router-dom"

const location = useLocation()

location.state // { id: '1', name: 'minji' }
```

### 路由懒加载

`<Suspense>` 用于在加载过程中临时替换组件，用 `fallback` 指定被替换的组件。

```tsx
import { type FC, Suspense, lazy } from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

const load = (Component: FC) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
)

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="home" element={load(lazy(() => import("@/pages/home.tsx")))} />
    <Route path="about" element={load(lazy(() => import("@/pages/about.tsx")))} />
  </Route>
))
```

## Redux Toolkit

### 创建 Store

::: tabs#createStore

@tab <Ts /> slice/counter.ts

使用 `createSlice` 创建一个 slice。

```tsx
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type CounterState = {
  value: number
}

type CounterAction = PayloadAction<CounterState>

const initialState: CounterState = {
  value: 0
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, { payload }: CounterAction) {
      state.value += payload.value
    },
    decrement(state, { payload }: CounterAction) {
      state.value -= payload.value
    }
  }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
```

@tab <Ts /> store.ts

一个 store 中可能会有多个 slice，所以需要整合所有 slice，集中管理数据。

```tsx
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./slice/counter"

const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
})

// 订阅 store 的更新
store.subscribe(() => console.log(store.getState()))

// 推导 state 的类型
export type RootState = ReturnType<typeof store.getState>

// 推导 action 的类型
export type AppDispatch = typeof store.dispatch

export default store
```

:::

### 在组件中使用

```tsx
import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "@/store"
import { increment, decrement } from "@/store/slice/counter"

const counterState = useSelector((state: RootState) => state.counter)

const dispatch: AppDispatch = useDispatch()

const increase = () => {
  dispatch(increment({ value: 1 }))
}

const decrease = () => {
  dispatch(decrement({ value: 1 }))
}
```

直接使用 `useSelector` 和 `useDispatch` 会导致每次使用 Store 都需要引入类型，写很多重复的代码。

我们可以创建 “预输入” 的 hooks，让它们在使用前就已经具有类型。

```ts
import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "@/store"

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
```

在组件中使用新的 hooks，就不需要再关注类型了。

```tsx
import { useAppSelector, useAppDispatch } from "@/store/hooks"

const counterState = useAppSelector(state => state.counter) // { value: 0 }

const dispatch = useAppDispatch()
```

### 异步操作

::: tabs#async

@tab <Ts /> slice/user.ts

```tsx
import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"
import type { LoginParams } from "@/api/user"

type UserState = {
  token: string
  userInfo: {
    id: number
    name: string
  }
}

type LoginAction = PayloadAction<Pick<UserState, "token">>

type UserInfoAction = PayloadAction<Pick<UserState, "userInfo">>

const initialState: UserState = {
  token: "",
  userInfo: null
}

export const fetchLogin = createAsyncThunk("fetchLogin", async (data: LoginParams) => {
  const response = await (await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })).json()
  return response.data // response.data => { "token": "rhcvbzsdrhtgmner" }
})

export const fetchUserInfo = createAsyncThunk("fetchUserInfo", async () => {
  const response = await (await fetch("/api/user")).json()
  return { userInfo: response.data } // response.data => { "id": 1, "name": "minji" }
})

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLogin.fulfilled, (state, { payload }: LoginAction) => {
        state.token = payload.token
      })
      .addCase(fetchLogin.rejected, () => {
        console.log("login rejected")
      })
      
      .addCase(fetchUserInfo.fulfilled, (state, { payload }: UserInfoAction) => {
        state.userInfo = payload.userInfo
      })
      .addCase(fetchUserInfo.pending, () => {
        console.log("userInfo pending")
      })
  }
})

export default userSlice.reducer
```

:::

## Zustand

### 创建 Store

相比于 Redux，Zustand 在 store 中添加 actions 非常简单。

```ts
import { create } from "zustand"

type CounterState = {
  count: number
}

type CounterAction = {
  increment: () => void
  decrement: () => void
  update: (value: number) => void
  reset: () => void
}

const useCounterStore = create<CounterState & CounterAction>(set => ({
  count: 0,
  increment: () => {
    set(state => ({ count: state.count + 1 }))
  },
  decrement: () => {
    set(state => ({ count: state.count - 1 }))
  },
  update: value => {
    set({ count: value })
  },
  reset: () => {
    set({ count: 0 })
  }
}))
```

### 在组件中使用

Zustand 与 Pinia 非常相似，只需要把 state 和 actions 解构出来就可以直接使用了。

```tsx
import useCounterStore from "@/store/counterStore"

const { count, increment, decrement, update, reset } = useCounterStore()

const random = Math.ceil(Math.random() * 100)

return <>
  <button onClick={increment}>increment</button>
  <button onClick={decrement}>decrement</button>
  <button onClick={() => update(random)}>update</button>
  <button onClick={reset}>reset</button>
</>
```

### 异步操作

Zustand 处理异步操作不需要进行特殊处理，与同步操作没有区别。

```ts
import { create } from "zustand"

interface LoginParams {
  username: string
  password: number
}

type UserState = {
  token: string
  userInfo: { id: number, name: string }
}

type UserAction = {
  fetchLogin: (data: LoginParams) => void
  fetchUserInfo: () => void
}

const useUserStore = create<UserState & UserAction>(set => ({
  userInfo: null,
  token: "",
  fetchLogin: async data => {
    const response = await (await fetch("/api/login", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })).json()
    set({ token: response.data.token })
  },
  fetchUserInfo: async () => {
    const response = await (await fetch("/api/user")).json()
    set({ userInfo: response.data })
  }
}))
```

在组件中依然是解构之后就可以直接使用。

```tsx
import useUserStore from "@/store/userStore"

const { token, userInfo, fetchLogin, fetchUserInfo } = useUserStore()

const login = () => fetchLogin({
  username: "root",
  password: 1234
})

return <>
  <button onClick={login}>login</button>
  <button onClick={fetchUserInfo}>user</button>
</>
```

### 切片模式

上面的案例中，我们创建了两个 store，它们是独立的。现在我们将其整合成一个 store，并以切片的形式拆分。

```ts
import { create, type StateCreator } from "zustand"

type CounterSlice = {
  count: number
  increment: () => void
  decrement: () => void
  update: (value: number) => void
  reset: () => void
}

const createCounterStore: StateCreator<CounterSlice> = set => ({
  count: 0,
  increment: () => {/* do something... */},
  decrement: () => {/* do something... */},
  update: value => {/* do something... */},
  reset: () => {/* do something... */}
})

type UserSlice = {
  token: string
  userInfo: { id: number, name: string }
  fetchLogin: (data: LoginParams) => void
  fetchUserInfo: () => void
}

const createUserStore: StateCreator<UserSlice> = set => ({
  userInfo: null,
  token: "",
  fetchLogin: async data => {/* do something... */},
  fetchUserInfo: async () => {/* do something... */}
})

const useStore = create<CounterSlice & UserSlice>((...args) => ({
  ...createCounterStore(...args),
  ...createUserStore(...args)
}))
```

## CSS 解决方案

### CSS Modules

使用 Sass 定义样式。注意：后缀名必须为 `*.module.css`。

```scss
/* layout.module.scss */

.menu {
  width: 240px;
  height: 100%;
  background: #344156;
  
  .menu-item {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #222d3d;
    color: #c1cbd9;
    text-align: center;
    cursor: pointer;
    
    &:hover {
      background: #051528;
    }
  }
  
  .active {
    .menu-item {
      background-color: #051528;
    }
  }
}
```

使用 `classnames` + CSS Modules 在 React 中优雅地引入 CSS。

```tsx
/* layout.tsx */

import classNames from "classnames"
import styles from "./layout.module.scss"

type NavLinkRenderProps = {
  isActive: boolean
  isPending: boolean
  isTransitioning: boolean
}

const menuClassName = classNames(styles["menu"])
const menuItemClassName = classNames(styles["menu-item"])
const activeClassName = ({ isActive }: NavLinkRenderProps) => classNames({
  [styles["active"]]: isActive
})

return <div className={menuClassName}>
  {routes.map(route => (
    <NavLink
      to={route.path}
      key={route.path}
      className={activeClassName}
    >
      <div className={menuItemClassName}>
        {route.path}
      </div>
    </NavLink>
  ))}
</div>
```

### CSS in JS

使用 `styled components` 定义样式，它会返回一个组件，这个组件已经包含了我们定义的样式。

详见 [styled-components](https://styled-components.com)。

```tsx
import styled, { css } from "styled-components"

type ButtonProps = {
  $primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  background: transparent;
  color: #bf4f74;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  cursor: pointer;
  
  ${props => props.$primary && css`
    background: #bf4f74;
    color: white;
  `}
`

const ButtonGroup = styled.div`
  text-align: center;
`

return (
  <ButtonGroup>
    <Button>Normal Button</Button>
    <Button $primary>Primary Button</Button>
  </ButtonGroup>
)
```

### CSS 原子化

#### Tailwind

首先需要对 Tailwind 进行一些配置 [Install Tailwind CSS using PostCSS - Tailwind CSS](https://tailwindcss.com/docs/installation/using-postcss)。

我们将上面 CSS in JS 的案例进行重写。

```tsx
<div className="text-center">
  <button
    className="mx-[1em] my-[0.5em] px-[1em] py-[0.25em] rounded-[3px] bg-transparent text-[#bf4f74]
      border-[2px] border-solid border-[#bf4f74]"
  >
    Normal Button
  </button>
  <button
    className="mx-[1em] my-[0.5em] px-[1em] py-[0.25em] rounded-[3px] bg-[#bf4f74] text-white
      border-[2px] border-solid border-[#bf4f74]"
  >
    Primary Button
  </button>
</div>
```

可以看到，对于边距、背景、文本等样式，Tailwind 是很方便的，但是要实现复合属性就比较繁琐。

#### UnoCSS

UnoCSS 基于 Tailwind，但是它更加强大。

当然，如果需要使用一些扩展的功能，也是需要进行配置的。

```ts
/* uno.config.ts */

import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetTagify,
  transformerDirectives
} from "unocss"

export default defineConfig({
  shortcuts: [
    { "flex-center": "flex justify-center items-center" },
    { pointer: "cursor-pointer" }
  ],
  rules: [
    [/^m-([.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
    [/^mx-([.\d]+)$/, ([_, num]) => ({ "margin-left": `${num}px`, "margin-right": `${num}px` })],
    [/^my-([.\d]+)$/, ([_, num]) => ({ "margin-top": `${num}px`, "margin-bottom": `${num}px` })],
    [/^p-([.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
    [/^px-([.\d]+)$/, ([_, num]) => ({ "padding-left": `${num}px`, "padding-right": `${num}px` })],
    [/^py-([.\d]+)$/, ([_, num]) => ({ "padding-top": `${num}px`, "padding-bottom": `${num}px` })],
    [/^rounded-([.\d]+)$/, ([_, num]) => ({ "border-radius": `${num}px` })]
    // ...
  ],
  presets: [
    presetUno(), // default
    presetAttributify(), // class to prop
    presetTagify({
      // prefix: "un-"
    })
  ],
  transformers: [
    transformerDirectives() // @apply
  ]
})
```

再次对上面的案例进行重写。

```tsx
<div className="text-center">
  <button
    m="x-1em y-0.5em"
    p="x-1em y-0.25em"
    border="2px solid #bf4f74"
    className="rounded-3 bg-transparent text-#bf4f74"
  >
    Normal Button
  </button>
  <button
    m="x-1em y-0.5em"
    p="x-1em y-0.25em"
    border="2px solid #bf4f74"
    className="rounded-3 bg-#bf4f74 text-white"
  >
    Primary Button
  </button>
</div>
```

不难看出，我们可以对 CSS 进行 “分类”，并且使用复合属性也变得简单了。

但是仍然有大量重复的样式，我们需要进行抽离与复用，`@apply` 指令可以帮助我们完成这一点。

```css
.custom {
  @apply mx-1em my-0.5em px-1em py-0.25em border-2 border-solid border-#bf4f74 rounded-3;
}

.normal {
  @apply bg-transparent text-#bf4f74;
}

.primary {
  @apply bg-#bf4f74 text-white;
}
```

```tsx
<div className="text-center">
  <button className="custom normal">
    Normal Button
  </button>
  <button className="custom primary">
    Primary Button
  </button>
</div>
```

这样似乎又回到了最原始的写法，在 CSS 文件中定义样式，然后使用类名。

但是它们是不一样的。如果有很多相同的样式，使用传统的写法会产生大量重复的 CSS 代码；而使用 `@apply` 的好处是，它只会生成一次代码，然后进行多次复用。这样可以在一定程度上减小文件的体积。

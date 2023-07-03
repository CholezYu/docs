# vue3基础

## 01.插件安装

- 禁用 Vetur 插件
- 禁用 vue-helper 插件
- 安装 TypeScript Vue Plugin(volar)
- 安装 Vue3 Snippets(已安装)
- 安装 Vue language Features(volar)

## 02.脚手架的安装

- vue-cli脚手架
  * npm i -g vue@cli
  * vue create xxxx
  * 默认启动:`npm run serve`

- vite脚手架的安装
  * npm creat vite@latest
  * 首先安装所有的包`npm i`
  * 默认启动:`npm run dev`

## 03.基础内容

- createApp方法
  * 创建一个应用实例,作用有两个:
    + 激活vue的应用
    + 返回一个应用实例对象,这个对象提供了很多方法供我们对整个应用的操作(mount,directive,use,component,mixin)
  * 接受两个参数
    + 第一个参数是根组件
    + 第二个参数可选，它是要传递给根组件的 props

- 挂载应用
  * 应用实例必须在调用了 .mount() 方法后才会渲染出来。
  * 该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串
  * .mount() 方法应该始终在整个应用配置和资源注册完成后被调用

- 创建组件
  * 创建组件使用defineComponent方法,他是在定义 Vue 组件时提供类型推导的辅助函数。
  * defineComponent方法直接返回接受的组件对象,所以没有任何副作用

- 组合式 api->setup
  * 在组件的配置对象中可以书写一个setup配置项
  * 在 setup() 函数中返回的对象会暴露给模板和组件实例
  * 所以我们可以在setup中书写数据,方法等等,还有操作数据的计算数据,watch等等

- setup的语法糖
  * 我们可以在组件内新建一个script标签,书写一个setup属性,这个script中的内部就会被当做setup配置项中的内容,并且不需要书写return,而是直接把所有定义的变量默认return出去
  * 如果我们要使用ts,则必须在所有的script标签上都书写lang="ts"

- 注册组件
  * 如果在setup语法糖中引入某个组件,则不需要注册,直接可以在模板中使用

## 04.响应式数据

- ref方法
  1. 使用ref方法来创建响应式数据
  2. ref方法接受一个值，返回一个响应式的、可更改的 ref 对象
  3. 如果接受的是ref对象,则直接把这个ref对象返回
  4. 如果接受的是一个非ref对象,则实例化RefImpl构造函数,得到一个实例化ref对象,
     对象也是通过RefImpl类getter和setter来进行数据劫持的(收集依赖和触发依赖更新)
  5. ref对象中的dep属性就是收集的依赖,ref对象中的value属性就是我们ref保存的值
  6. 想要在js中使用ref对象的值,必须要添加value属性才能拿到,在模板中使用ref对象的值可以省略value

- ref对象的类型书写

  1. 直接引入Ref类型,并传入泛型
     `a: Ref<number> = ref(1)`
  2. 在使用ref方法的时候直接传入泛型
     `ref<number>(1)`

- reactive创建响应式对象

  * 返回一个对象的响应式代理对象
  * 响应式转换是“深层”的：它会影响到所有嵌套的属性
  * 响应式原理是,reactive内部根据接受的对象通过Proxy创建了对应的代理对象,代理对象可以监听所有对象的操作(
    增删改查遍历等等),替代并完善了vue的defineProperty的数据劫持方式(所以vue3没有Vue.set和Vue.delete方法)

- reactive对象的类型限制

  1. 只需要使用reactive方法的泛型即可
     `reactive<T>()`

- ref和reactive的区别
  1. 作用:ref和reactive都是在vue3中用来创建响应式数据的
  2. 接受的类型:ref可以接受对象和基本类型值,reactive只能接受对象类型值(内部有泛型约束)
  3. 原理:ref是通过RefImpl类的getter和setter函数进行数据劫持的,reactive是通过创建proxy代理对象进行数据劫持的,如果ref接受的是对象类型,则对象也会用Proxy代理对象进行处理
  4. 替换值的情况:ref被替换的是value,所有仍然具有响应式,reactive的proxy对象直接被替换,所以没有响应式了

- 使用ref还是reactive
  1. 对于基本类型来说,只能使用ref,因为reactive有类型约束为对象类型
  2. 对应对象类型比较如下

  + 使用reactive创建代理对象需要注意的是
    * 如果我们直接替换这个值,则不具备任何的响应式
    * 解决方法:我们可以创建这个数据的时候多嵌套一层结构,不去替换值,而是修改这个对象中某个属性值(比较麻烦)
  + 使用ref创建对象数据,可以直接被替换,并且具有响应式(
    因为ref对象的劫持就是监听ref对象的value的变化,而我们替换的本身就是value)

  3. 所以我们推荐ref创建数据

- watch监听数据
  + 侦听一个或多个响应式数据源，并在数据源变化时调用所给的回调函数
  + 第一个参数是被监听的值,第二个参数是回调函数,第三个参数是配置对象(deep和immediate)
  + 监听规律一般只说ref,因为监听reactive其实就是和监听ref是对象值的规则是一样的
    1. 对于ref基本类型值

    * 我们直接监听这个ref对象即可,一旦value值发生变化，即执行回调函数

    2. ref数据值为对象类型

    * 直接监听ref对象,只能监听到这个对象的value被替换,其他的修改无法监听到(没有深度监听)
    * 监听ref对象的value属性(整个代理对象),无法监听到对象被替换,但是可以监听到对象的修改(默认深度监听)
    * 监听ref对象value值中的某个对象值类型属性(代理对象中的某个对象值类型属性)
      ,无法监听到对象被替换,但是可以监听对象内部的修改(默认深度监听)
    * 如果想要监听某个属性值是否被替换(无论值是基本类型还是对象类型)
      ,watch的第一个参数需要写成函数写法返回被监听的值`()=>被监听的值`

- computed计算属性
  * 接受一个 getter 函数，返回一个只读的响应式 ref 对象
  * 它也可以接受一个带有 get 和 set 函数的对象来创建一个可读可写的 ref 对象

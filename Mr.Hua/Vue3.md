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
  * 响应式原理是,reactive内部根据接受的对象通过Proxy创建了对应的代理对象,代理对象可以监听所有对象的操作(增删改查遍历等等),替代并完善了vue的defineProperty的数据劫持方式(所以vue3没有Vue.set和Vue.delete方法)

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
    + 使用ref创建对象数据,可以直接被替换,并且具有响应式(因为ref对象的劫持就是监听ref对象的value的变化,而我们替换的本身就是value)
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
      * 监听ref对象value值中的某个对象值类型属性(代理对象中的某个对象值类型属性),无法监听到对象被替换,但是可以监听对象内部的修改(默认深度监听)
      * 如果想要监听某个属性值是否被替换(无论值是基本类型还是对象类型),watch的第一个参数需要写成函数写法返回被监听的值`()=>被监听的值`

- computed计算属性
  * 接受一个 getter 函数，返回一个只读的响应式 ref 对象
  * 它也可以接受一个带有 get 和 set 函数的对象来创建一个可读可写的 ref 对象

### 生命周期

- vue3的生命周期
  1. 生命周期函数的destroyed和beforeDestory被替换为了unmounted和beforeUnmount
  2. 如果书写选项式api的生命周期,则setup函数会在beforeCreate和created之前调用,在beforeCreate中可以拿到setup中定义的数据,但是还是拿不到data选项定义的数据
  3. 如果书写组合式api,则没有beforeCreate和created两个生命周期函数,setup在组合式api中其实是取代了这两个生命周期函数的过程(数据的注入和劫持,watch监听,computed,方法的定义)
  4. 在组合式api中,使用Vue暴露出来的onxxxx方法来作为生命周期函数,并接受回调函数作为参数
  5. 组合式api中的生命周期函数可以多次调用

### 自定义hooks
  * 自定义hooks都是函数写法,函数内部可以书写任意vue的setup中的内容
  * hooks函数需要把数据返回出去
  * 在组件内调用hooks函数,使用解构方式接受所有暴露的值
  * 因为hooks是一个函数,在setup中调用,所以hooks函数中的生命周期watch等等都是可以生效的
  * 自定义hooks可以有效的解耦组件的逻辑

### vite配置

- 路径别名

  1. 在`vite.config.js`中引入path模块`import path from "path";`
  2. 在`vite.config.js`中配置别名

    ```js
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
    ```

  3. 安装node环境类型 `npm i @types/node`
  4. 修改`tsconfig.json`

    ```json
      "compilerOptions":{
        "baseUrl": "./",
        "paths": {
          "@/*": [
            "src/*"
          ]
        }
      }
    ```

### 其他

- 在setup中接受props-不限制类型

  * 可以直接使用defineProps方法接受props
  * defineProps的参数是一个数组，数组中就要接受的props
  * 一旦props被接受，则可以直接在模板中使用
  * defineProps返回一个对象,对象包含所有接受的props的值(如果想要在setup中使用props的值,则必须接收返回值)

- 在setup中接收props-限制类型

  * defineProps可以传递一个泛型,泛型是限制defineProps返回的props对象的类型

  * 我们只要把这个类型限制好,则不再需要给defineProps传递任何参数,因为在限制类型的时候,已经告诉他要结束哪些值

  * ```js
    interface propsType {
      todoList: todoListType;
      a?: number;
    }
    const props = defineProps<propsType>();
    ```

- 在setup中接受自定义事件

  * 可以直接在模板中使用$emit调用当前组件上的自定义事件,但是这种写法没有类型限制

  * 我们可以使用defineEmits方法来接受当前组件上的自定义事件,并返回一个emit方法,可以调用接受的自定义事件

  * defineEmits方法不需要传递任何参数,只需要传入泛型 限制接受的自定义事件有哪些,和参数及返回值的类型,实例如下

    ```js
      const emit = defineEmits<{
        //小括号中的event是限制当前自定事件的名称,其他都是限制参数的类型,void代表函数返回值类型
        (event: "getNewTodo", a: number): void;
      }>();
      //调用自定义事件
      emit("getNewTodo", 1);
    ```

### 路由v4的配置

- 基础配置

  * 使用createRouter方法创建一个路由器对象
  * 路由的配置中使用history配置项来确定路由模式,分别用createWebHashHistory()或者createWebHistory()来创建不同的模式
  * 路由表还是使用routes来配置,但是配置一个类型是RouteRecordRaw
  * 把路由器在入口文件引入,然后使用app.use(router)给项目引入路由
  * 在路由展示的位置书写<router-view>组件进行占位

- 其他补充

  * 匹配其他我们用的是`/*`,而我们现在修改为`/:pathMatch(.*)*`

  * 删除了router-link的tag属性,而是使用插槽方式改变路由标签的类型

  * 在使用动画和缓存组件的时候,v4版本已经更换为了 插槽写法

    ```js
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    ```

- 动态路由和编程式路由导航

  * 动态路由的核心就是传值,传值没有改变,改变的是我们在setup中无法使用this.$route,我们在v4版本中直接引入`useRoute`的方法,调用这个useRoute方法即可得到route对象
  * 编程式路由导航的核心是$router对象,我们在v4中通过`useRouter`方法,调用以后得到router对象

- 滚动行为

  * 之前使用x和y代表滚动条,现在用left和top代表滚动条


### pinia的基础使用

- 让项目中可以使用pinia

  * 安装pinia `npm i pinia`
  * 新建一个`store/index.ts`
  * 使用createPinia方法得到一个pinia对象,并暴露
  * 在入口中引入pinia对象,并作为插件使用
  * 此时项目中就可以直接使用pinia了

- 创建一个pinia仓库

  * 新建一个`store/count.ts`
  * 使用defineStore方法创建一个小仓库(返回一个当前仓库的hooks函数)
  * defineStore中的第一个参数其实就这个这个仓库的名称,第二个参数就是一个配置对象,内部是当前state action getters的配置

- 组件中使用pinia的某个仓库数据

  * 直接因为某个仓库暴露的hooks函数
  * 调用hooks函数即可拿到当前小仓库的数据和方法
  * 在使用pinia的数据的时候
    1. 如果没有解构,则每次使用都要xxxStore.xxxx去使用,因为xxxStore是一个代理对象,所以我们拿到的值是具有响应式的
    2. 如果直接解构,则从xxxStore拿到的值不再是ref对象,所以如果解构出来的值是基本类型，则不再具有响应式
    3. 可以在解构的时候使用 storeToRefs方法解构，则可以得到ref对象,所以在setup中使用的时候一定要添加.value

- pinia中state配置的书写

  * state可以的写法类似于选项式API的data写法

  * 因为我们都要给state书写完整的类型,所以state都会写成箭头函数写法,方便书写类型
    类型其实就是state函数的returnd的对象的类型

    ```js
      state: (): countStateType => {
        return {
          count: 1,
        };
      },
    ```

- pinia中getters的使用

  * 在pinia中配置getters对象，每一个属性都是一个函数，函数接收一个state作为参数，函数的内部this也是指向state(所以在函数内部使用this或者state都可以),函数的返回值就是当前getters属性的值
  * 在组件中读取pinia仓库中的getters数据的时候，和读取state数据一致

### vue3组件通信

- props
  * 使用方法和逻辑和vue2保持一致
  * 在setup中接收的时候需要使用 defineProps 方法接收

- 自定义事件
  * 在vue3中，给组件绑定的属性或者事件或者style，class样式等等都会透传给组件内部的根元素上（组件绑定的事件都可以是原生事件，vue3取消的.native修饰符）
  * 如果组件内部是fragment写法，则不再透传
  * 不管是事件还是属性，只要被接收，则不再透传
  * 使用defineEmits方法来接收父组件传递进来的事件，返回一个emit对象，使用这个emit对象可以触发传来的事件

- $attrs
  * 可以拿到父组件传递过来的方法、属性和自定义事件,整合在$attrs对象中
  * 可以使用v-bind一次性传递给子组件,达到祖孙传值的目的
  * 透传attr
    + “透传 attribute”指的是传递给一个组件，却没有被该组件声明为 props 或 emits 的 attribute 或者 v-on 事件监听器
    + 当一个组件以单个元素为根作渲染时，透传的 attribute 会自动被添加到根元素上

- ref
  * ref在组件或者DOM的设置和vue2一致:设置一个ref属性,值为一个命名字符串
  * 我们在setup中获取这个值的时候,需要设置一个ref对象,对象的命名要和模板中的对应的ref的命名字符串同名
  * 如果我们通过ref设置的是一个组件,则我们拿到的是这个组件所暴露的数据组成的一个对象
  * 但是组件一般都是封闭的,也就是说数据无法让外部访问,我们需要通过defineExpose方法暴露当前组件的某些数据可以让外部访问
  * 获取组件的数据需要在onMounted生命周期中访问,否则子组件还没有挂载完成,获取不到

- parent方法
  * 我们通过$parent拿到的父组件也是父组件的数据组成的proxy代理对象
  * 父组件的数据也需要defineExpose暴露才可以供子组件获取

- v-model方法
  * 在Vue3中 v-mode在组件上的时候本质已经发生变化，不再是 value 和 input 的简写了
  * v-model一般给组件使用的时候,`v-model:modelValue="xxxx"`的本质是 modelValue属性 和@update:modelValue属性的简写
  * v-model在组件上使用的时候可以绑定多次,所以在vue3中删除了.sync修饰符

- PubSub
  * 发布 PubSub.publish('xxxx',数据)
  * 订阅 PubSub.subscribe("xxxx",(_,data)=>{data})

- provide/inject 依赖注入
  * 在父组件中使用 provide方法进行提供依赖 `provide("xxx",xxxx)`
  * 在后代组件中使用 inject方法提供注入 `inject("xxx")`
  * 提供的依赖最好是对象或者ref对象,这样可以保持响应式

- vuex

- pinia







  
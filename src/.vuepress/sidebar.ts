import { sidebar } from "vuepress-theme-hope"

export default sidebar({
  "/": [
    {
      text: "概览",
      icon: "guide",
      link: "overview/",
      collapsible: true
    },
    
    {
      text: "前端",
      icon: "network",
      prefix: "front-end/",
      collapsible: true,
      children: [
        {
          text: "Vue 3",
          icon: "vue",
          link: "vue"
        },
        {
          text: "Vue 2",
          icon: "vue",
          link: "history/vue"
        },
        {
          text: "Nuxt",
          icon: "nuxt",
          link: "nuxt"
        },
        {
          text: "React 18",
          icon: "react",
          link: "react"
        },
        {
          text: "React Native",
          icon: "react",
          link: "react-native"
        },
        {
          text: "WeChat",
          icon: "wechat",
          link: "wechat"
        },
        {
          text: "uni-app",
          icon: "uni-app",
          link: "uni-app"
        },
        {
          text: "JavaScript",
          icon: "javascript",
          link: "javascript"
        },
        {
          text: "TypeScript",
          icon: "typescript",
          link: "typescript"
        },
        {
          text: "Ajax",
          icon: "ajax",
          link: "ajax"
        },
        {
          text: "Node.js",
          icon: "nodeJS",
          link: "nodejs"
        },
        {
          text: "Webpack",
          icon: "webpack",
          link: "webpack"
        },
        {
          text: "Git",
          icon: "git",
          link: "git"
        },
        {
          text: "HTML5",
          icon: "html",
          link: "html5"
        },
        {
          text: "CSS",
          icon: "css",
          link: "css"
        },
        {
          text: "Bootstrap",
          icon: "bootstrap",
          link: "bootstrap"
        }
      ]
    },
    
    {
      text: "后端",
      icon: "back-stage",
      prefix: "after-end/",
      collapsible: true,
      children: [
        {
          text: "Java",
          icon: "java",
          link: "java"
        },
        {
          text: "Python",
          icon: "python",
          link: "python"
        },
        {
          text: "MySQL",
          icon: "mysql",
          link: "mysql"
        },
        {
          text: "Nginx",
          icon: "nginx",
          link: "nginx"
        }
      ]
    },
    
    {
      text: "工具",
      icon: "tool",
      prefix: "tools/",
      collapsible: true,
      children: [
        {
          text: "VueUse",
          icon: "vueuse",
          link: "vueuse"
        },
        {
          text: "ECharts",
          icon: "echarts",
          link: "echarts"
        },
        {
          text: "Lodash",
          icon: "lodash",
          link: "lodash"
        },
        {
          text: "Dayjs",
          icon: "dayjs",
          link: "dayjs"
        },
        {
          text: "Exceljs",
          icon: "exceljs",
          link: "exceljs"
        }
      ]
    },
    
    {
      text: "高级",
      icon: "launch",
      prefix: "high-end/",
      collapsible: true,
      children: [
        {
          text: "WebGL",
          icon: "webgl",
          link: "webgl"
        },
        {
          text: "Threejs",
          icon: "threejs",
          link: "threejs"
        },
        {
          text: "MicroFrontend",
          icon: "microfrontend",
          link: "microfrontend"
        }
      ]
    }
  ],
  
  "/algorithm": [
    {
      text: "介绍",
      icon: "hot",
      link: "/algorithm/"
    },
    {
      text: "栈与队列",
      icon: "stack",
      link: "stack_queue"
    },
    {
      text: "数组与链表",
      icon: "extend",
      link: "array_linked"
    },
    {
      text: "哈希表",
      icon: "map",
      link: "hashmap"
    },
    {
      text: "树",
      icon: "tree",
      link: "tree"
    },
    {
      text: "查找算法",
      icon: "search",
      link: "search"
    },
    {
      text: "排序算法",
      icon: "sort",
      link: "sort"
    }
  ],
  
  "/notes": [
    {
      text: "面试重点",
      icon: "markdown",
      link: "面试重点"
    },
    
    {
      text: "代码规范",
      icon: "markdown",
      link: "代码规范"
    },
    
    {
      text: "报错处理",
      icon: "markdown",
      link: "报错处理"
    },
    
    {
      text: "心得体会",
      icon: "markdown",
      link: "心得体会"
    }
  ]
})

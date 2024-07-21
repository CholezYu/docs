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
      text: "基础",
      icon: "module",
      prefix: "base/",
      collapsible: true,
      children: [
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
          text: "JavaScript",
          icon: "javascript",
          link: "javascript"
        }
      ]
    },
    
    {
      text: "核心",
      icon: "chrome",
      prefix: "core/",
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
          link: "vue-history"
        },
        {
          text: "React 18",
          icon: "react",
          link: "react"
        },
        {
          text: "Nuxt",
          icon: "nuxt",
          link: "nuxt"
        },
        {
          text: "Next",
          icon: "next",
          link: "next"
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
        }
      ]
    },
    
    {
      text: "移动端",
      icon: "phone",
      prefix: "mobile/",
      collapsible: true,
      children: [
        {
          text: "Kotlin",
          icon: "kotlin",
          link: "Kotlin"
        },
        {
          text: "Dart",
          icon: "dart",
          link: "Dart"
        },
        {
          text: "Flutter",
          icon: "flutter",
          link: "Flutter"
        },
        {
          text: "React Native",
          icon: "react",
          link: "react-native"
        },
        {
          text: "微信小程序",
          icon: "mini-app",
          link: "mini-app"
        }
      ]
    },
    
    {
      text: "工具库",
      icon: "plugin",
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
      text: "服务端",
      icon: "back-stage",
      prefix: "server/",
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

import { sidebar } from "vuepress-theme-hope"

export default sidebar({
  "/": [
    {
      text: "概览",
      icon: "guide",
      link: "overview",
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
          link: "Vue"
        },
        {
          text: "Vue 2",
          icon: "vue",
          link: "history/Vue"
        },
        {
          text: "Nuxt",
          icon: "nuxt",
          link: "Nuxt"
        },
        {
          text: "React 18",
          icon: "react",
          link: "React"
        },
        {
          text: "React Native",
          icon: "react",
          link: "ReactNative"
        },
        {
          text: "WeChat",
          icon: "wechat",
          link: "WeChat"
        },
        {
          text: "UniApp",
          icon: "uniapp",
          link: "UniApp"
        },
        {
          text: "JavaScript",
          icon: "javascript",
          link: "JavaScript"
        },
        {
          text: "TypeScript",
          icon: "typescript",
          link: "TypeScript"
        },
        {
          text: "Bootstrap",
          icon: "bootstrap",
          link: "Bootstrap"
        },
        {
          text: "Ajax",
          icon: "ajax",
          link: "Ajax"
        },
        {
          text: "Nodejs",
          icon: "nodeJS",
          link: "Nodejs"
        },
        {
          text: "Webpack",
          icon: "webpack",
          link: "Webpack"
        },
        
        {
          text: "Git",
          icon: "git",
          link: "Git"
        },
        {
          text: "HTML5",
          icon: "html",
          link: "HTML5"
        },
        {
          text: "CSS",
          icon: "css",
          link: "CSS"
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
          link: "Java"
        },
        {
          text: "Python",
          icon: "python",
          link: "Python"
        },
        {
          text: "MySQL",
          icon: "mysql",
          link: "MySQL"
        },
        {
          text: "Nginx",
          icon: "nginx",
          link: "Nginx"
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
          link: "VueUse"
        },
        {
          text: "ECharts",
          icon: "echarts",
          link: "ECharts"
        },
        {
          text: "Lodash",
          icon: "lodash",
          link: "Lodash"
        },
        {
          text: "Dayjs",
          icon: "dayjs",
          link: "Dayjs"
        },
        {
          text: "Exceljs",
          icon: "exceljs",
          link: "Exceljs"
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
          link: "WebGL"
        },
        {
          text: "Threejs",
          icon: "threejs",
          link: "Threejs"
        },
        {
          text: "MicroFrontend",
          icon: "microfrontend",
          link: "MicroFrontend"
        }
      ]
    }
  ],
  
  "/algorithm": [
    {
      text: "介绍",
      icon: "hot",
      link: "README"
    },
    {
      text: "栈与队列",
      icon: "stack",
      link: "Stack_Queue"
    },
    {
      text: "数组与链表",
      icon: "extend",
      link: "Array_Linked"
    },
    {
      text: "哈希表",
      icon: "map",
      link: "HashMap"
    },
    {
      text: "树",
      icon: "tree",
      link: "Tree"
    },
    {
      text: "查找算法",
      icon: "search",
      link: "Search"
    },
    {
      text: "排序算法",
      icon: "sort",
      link: "Sort"
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

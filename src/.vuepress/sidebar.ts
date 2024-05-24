import { sidebar } from "vuepress-theme-hope"

export default sidebar({
  "/": [
    {
      text: "概览",
      icon: "guide",
      prefix: "overview/",
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
          link: "Vue"
        },
        {
          text: "Vue 2",
          icon: "vue",
          link: "/history/Vue"
        },
        {
          text: "React",
          icon: "react",
          link: "React"
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
          text: "Ajax",
          icon: "ajax",
          link: "Ajax"
        },
        {
          text: "Webpack",
          icon: "webpack",
          link: "Webpack"
        },
        {
          text: "Nodejs",
          icon: "nodeJS",
          link: "Nodejs"
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
        },
        {
          text: "Bootstrap",
          icon: "bootstrap",
          link: "Bootstrap"
        },
        {
          text: "Wxapp",
          icon: "wechat",
          link: "Wxapp"
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
          text: "Dayjs",
          icon: "dayjs",
          link: "Dayjs"
        },
        {
          text: "Lodash",
          icon: "lodash",
          link: "Lodash"
        },
        {
          text: "Exceljs",
          icon: "exceljs",
          link: "Exceljs"
        },
        {
          text: "VueUse",
          icon: "vueuse",
          link: "VueUse"
        },
        {
          text: "ECharts",
          icon: "echarts",
          link: "ECharts"
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
          text: "Algorithm",
          icon: "keyboard",
          link: "Algorithm"
        },
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
      text: "便笺",
      icon: "list",
      prefix: "notes/",
      collapsible: true,
      children: [
        {
          text: "面试集锦",
          icon: "markdown",
          link: "面试集锦"
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
    }
  ]
})

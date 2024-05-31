import { navbar } from "vuepress-theme-hope"

export default navbar([
  {
    text: "导航",
    icon: "context",
    children: [
      {
        text: "前端",
        prefix: "front-end/",
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
        prefix: "library/",
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
      }
    ]
  },
  
  {
    text: "算法",
    icon: "hot",
    link: "high-end/Algorithm"
  },
  
  {
    text: "Vue 生态",
    icon: "vue",
    children: [
      {
        text: "Element UI",
        link: "https://element.eleme.cn/#/zh-CN"
      },
      {
        text: "Element Plus",
        link: "https://element-plus.org/zh-CN"
      },
      {
        text: "Arco Design",
        link: "https://arco.design"
      },
      {
        text: "Arco Design Pro",
        link: "https://pro.arco.design"
      },
      {
        text: "Vuetify",
        link: "https://vuetifyjs.com/zh-Hans"
      },
      {
        text: "VueUse",
        link: "https://vueuse.org"
      },
      {
        text: "Nuxt",
        link: "https://nuxt.com"
      },
      {
        text: "Nuxt UI",
        link: "https://ui.nuxt.com"
      },
      {
        text: "Vben",
        link: "https://github.com/vbenjs/vue-vben-admin"
      }
    ]
  },
  
  {
    text: "React 生态",
    icon: "react",
    children: [
      {
        text: "Ant Design",
        link: "https://ant.design/index-cn"
      },
      {
        text: "Ant Design Pro",
        link: "https://pro.ant.design/zh-CN"
      },
      {
        text: "Shadcn UI",
        link: "https://ui.shadcn.com"
      },
      {
        text: "Zustand",
        link: "https://zustand-demo.pmnd.rs"
      },
      {
        text: "Next",
        link: "https://nextjs.org"
      },
      {
        text: "Next UI",
        link: "https://nextui.org"
      }
    ]
  },
  
  {
    text: "Cholez",
    icon: "/icon/cholez.svg",
    link: "http://yuwenjian.com"
  }
])

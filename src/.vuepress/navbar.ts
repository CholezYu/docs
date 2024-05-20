import { navbar } from "vuepress-theme-hope"

export default navbar([
  "/",
  {
    text: "导航",
    icon: "context",
    prefix: "/",
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
        prefix: "tools/",
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
    text: "深入解析 Vue.js ",
    link: "http://vapor.yuwenjian.com"
  }
])

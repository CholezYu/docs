// @ts-ignore
import { navbar } from "vuepress-theme-hope"

export default navbar([
  "/",
  {
    text: "导航",
    icon: "guide",
    prefix: "/",
    children: [
      {
        text: "front-end",
        icon: "context",
        prefix: "front-end/",
        children: [
          "HTML5",
          "CSS",
          "Less",
          "Bootstrap",
          "JavaScript",
          "JavaScript-算法",
          "TypeScript",
          "Ajax",
          "Node",
          "Git",
          "Webpack",
          "React",
          "Vue",
          "Wxapp",
          "ECharts",
          "WebGL",
          "Threejs",
          "Exceljs"
        ]
      },
      {
        text: "after-end",
        icon: "context",
        prefix: "after-end/",
        children: [
          "Java",
          "Java-算法",
          "MySQL",
          "JDBC",
          "JavaWeb",
          "Python"
        ]
      }
    ]
  },
  {
    text: "官方文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/"
  }
])

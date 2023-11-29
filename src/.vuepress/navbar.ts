// @ts-ignore
import { navbar } from "vuepress-theme-hope"

export default navbar([
  "/",
  "/demo/",
  {
    text: "Docs",
    icon: "info",
    prefix: "/docs/",
    children: [
      {
        text: "前端",
        icon: "context",
        prefix: "前端/",
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
        text: "后端",
        icon: "context",
        prefix: "后端/",
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
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/"
  }
])

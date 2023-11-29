// @ts-ignore
import { sidebar } from "vuepress-theme-hope"

export default sidebar({
  "/": [
    "",
    {
      text: "案例",
      icon: "code",
      prefix: "demo/",
      link: "demo/",
      children: "structure"
    }
  ],
  
  "/docs": [
    "",
    {
      text: "前端",
      icon: "markdown",
      prefix: "前端/",
      collapsible: true,
      children: [
        "",
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
      icon: "markdown",
      prefix: "后端/",
      collapsible: true,
      children: [
        "",
        "Java",
        "Java-算法",
        "MySQL",
        "JDBC",
        "JavaWeb",
        "Python"
      ]
    },
    "Bug",
    "Experience",
    "面试"
  ]
})

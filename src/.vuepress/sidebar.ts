// @ts-ignore
import { sidebar } from "vuepress-theme-hope"

export default sidebar({
  "/": [
    {
      text: "返回主页",
      icon: "home",
      link: "/"
    },
    {
      text: "前端",
      icon: "markdown",
      prefix: "front-end/",
      link: "front-end/",
      collapsible: true,
      children: [
        {
          title: "HTML5",
          icon: "html",
          link: "HTML5"
        },
        {
          title: "CSS",
          icon: "css",
          link: "CSS"
        },
        {
          title: "Less",
          icon: "css",
          link: "Less"
        },
        {
          title: "Bootstrap",
          icon: "css",
          link: "Bootstrap"
        },
        {
          title: "JavaScript",
          icon: "javascript",
          link: "JavaScript"
        },
        {
          title: "JavaScript 算法",
          icon: "javascript",
          link: "JavaScript-算法"
        },
        {
          title: "TypeScript",
          icon: "typescript",
          link: "TypeScript"
        },
        {
          title: "Ajax",
          icon: "ajax",
          link: "Ajax"
        },
        {
          title: "Node",
          icon: "nodeJS",
          link: "Node"
        },
        {
          title: "Git",
          icon: "git",
          link: "Git"
        },
        {
          title: "Webpack",
          icon: "javascript",
          link: "Webpack"
        },
        {
          title: "React",
          icon: "react",
          link: "React"
        },
        {
          title: "Vue",
          icon: "vue",
          link: "Vue"
        },
        {
          title: "Wxapp",
          icon: "wechat",
          link: "Wxapp"
        },
        {
          title: "ECharts",
          icon: "javascript",
          link: "ECharts"
        },
        {
          title: "WebGL",
          icon: "javascript",
          link: "WebGL"
        },
        {
          title: "Threejs",
          icon: "javascript",
          link: "Threejs"
        },
        {
          title: "Exceljs",
          icon: "javascript",
          link: "Exceljs"
        }
      ]
    },
    {
      text: "后端",
      icon: "markdown",
      prefix: "after-end/",
      link: "after-end/",
      collapsible: true,
      children: [
        "Java",
        "Java-算法",
        "MySQL",
        "JDBC",
        "JavaWeb",
        "Python"
      ]
    },
    {
      text: "其他",
      icon: "code",
      prefix: "demo/",
      link: "demo/",
      collapsible: true,
      children: "structure"
    },
    {
      text: "其他",
      icon: "code",
      prefix: "docs/",
      link: "docs/",
      collapsible: true,
      children: [
        "",
        "Bug",
        "Experience",
        "面试"
      ]
    }
  ]
})

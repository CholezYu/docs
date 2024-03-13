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
          text: "JavaScript",
          icon: "javascript",
          link: "JavaScript"
        },
        {
          text: "JavaScript-Algo",
          icon: "javascript",
          link: "JavaScript-Algo"
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
          text: "Node",
          icon: "nodeJS",
          link: "Node"
        },
        {
          text: "Git",
          icon: "git",
          link: "Git"
        },
        {
          text: "Webpack",
          icon: "javascript",
          link: "Webpack"
        },
        {
          text: "React",
          icon: "react",
          link: "React"
        },
        {
          text: "Vue",
          icon: "vue",
          link: "Vue"
        },
        {
          text: "Wxapp",
          icon: "wechat",
          link: "Wxapp"
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
          text: "Java-Algo",
          icon: "java",
          link: "Java-Algo"
        },
        {
          text: "MySQL",
          icon: "mysql",
          link: "MySQL"
        },
        {
          text: "JDBC",
          icon: "java",
          link: "JDBC"
        },
        {
          text: "JavaWeb",
          icon: "java",
          link: "JavaWeb"
        },
        {
          text: "Python",
          icon: "python",
          link: "Python"
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
          text: "ECharts",
          icon: "javascript",
          link: "ECharts"
        },
        {
          text: "WebGL",
          icon: "javascript",
          link: "WebGL"
        },
        {
          text: "Threejs",
          icon: "javascript",
          link: "Threejs"
        },
        {
          text: "Exceljs",
          icon: "javascript",
          link: "Exceljs"
        }
      ]
    },
    {
      text: "便笺",
      icon: "align",
      prefix: "notes/",
      collapsible: true,
      children: [
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
        },
        {
          text: "面试题",
          icon: "markdown",
          link: "面试题"
        }
      ]
    }
  ]
})

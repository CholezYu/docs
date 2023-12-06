// @ts-ignore
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
          text: "Less",
          icon: "css",
          link: "Less"
        },
        {
          text: "Bootstrap",
          icon: "css",
          link: "Bootstrap"
        },
        {
          text: "JavaScript",
          icon: "javascript",
          link: "JavaScript"
        },
        {
          text: "JavaScript 算法",
          icon: "javascript",
          link: "JavaScript-算法"
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
        },
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
          text: "Java 算法",
          icon: "java",
          link: "Java-算法"
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
      text: "更多",
      icon: "more",
      prefix: "more/",
      collapsible: true,
      children: [
        {
          text: "解决问题",
          icon: "question",
          link: "解决问题"
        },
        {
          text: "项目细节",
          icon: "write",
          link: "项目细节"
        },
        {
          text: "面试经验",
          icon: "storage",
          link: "面试经验"
        }
      ]
    },
    {
      text: "尚博",
      icon: "computer",
      prefix: "shang-bo/",
      collapsible: true,
      children: [
        {
          text: "渠道-抖音",
          icon: "navigation",
          link: "渠道-抖音"
        },
        {
          text: "渠道-快手",
          icon: "navigation",
          link: "渠道-快手"
        },
        {
          text: "总后台管理系统",
          icon: "navigation",
          link: "总后台管理系统"
        }
      ]
    }
  ]
})

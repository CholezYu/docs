// @ts-ignore
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
            icon: "waline",
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
            text: "Wxapp",
            icon: "wechat",
            link: "Wxapp"
          }
        ]
      },
      {
        text: "后端",
        prefix: "after-end/",
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
          }
        ]
      }
    ]
  },
  {
    text: "深入解析 Vue.js ",
    link: "https://cholez.gitee.io/vapor/"
  }
])

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
            text: "Webpack",
            icon: "waline",
            link: "Webpack"
          },
          {
            text: "React",
            icon: "react",
            link: "React"
          },
          {
            text: "Vue 3",
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
        prefix: "after-end/",
        children: [
          {
            text: "Java",
            icon: "java",
            link: "Java"
          },
          {
            text: "MySQL",
            icon: "mysql",
            link: "MySQL"
          },
          {
            text: "Python",
            icon: "python",
            link: "Python"
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

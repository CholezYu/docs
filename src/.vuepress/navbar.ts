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
            link: "vue"
          },
          {
            text: "Vue 2",
            icon: "vue",
            link: "history/vue"
          },
          {
            text: "Nuxt",
            icon: "nuxt",
            link: "nuxt"
          },
          {
            text: "React 18",
            icon: "react",
            link: "react"
          },
          {
            text: "React Native",
            icon: "react",
            link: "react-native"
          },
          {
            text: "WeChat",
            icon: "wechat",
            link: "wechat"
          },
          {
            text: "uni-app",
            icon: "uni-app",
            link: "uni-app"
          },
          {
            text: "JavaScript",
            icon: "javascript",
            link: "javascript"
          },
          {
            text: "TypeScript",
            icon: "typescript",
            link: "typescript"
          },
          {
            text: "Ajax",
            icon: "ajax",
            link: "ajax"
          },
          {
            text: "Node.js",
            icon: "nodeJS",
            link: "nodejs"
          },
          {
            text: "Webpack",
            icon: "webpack",
            link: "webpack"
          },
          
          {
            text: "Git",
            icon: "git",
            link: "git"
          },
          {
            text: "HTML5",
            icon: "html",
            link: "html5"
          },
          {
            text: "CSS",
            icon: "css",
            link: "css"
          },
          {
            text: "Bootstrap",
            icon: "bootstrap",
            link: "bootstrap"
          }
        ]
      },
      
      {
        text: "后端",
        icon: "back-stage",
        prefix: "after-end/",
        children: [
          {
            text: "Java",
            icon: "java",
            link: "java"
          },
          {
            text: "Python",
            icon: "python",
            link: "python"
          },
          {
            text: "MySQL",
            icon: "mysql",
            link: "mysql"
          },
          {
            text: "Nginx",
            icon: "nginx",
            link: "nginx"
          }
        ]
      }
    ]
  },
  
  {
    text: "算法",
    icon: "hot",
    link: "algorithm/"
  },
  
  {
    text: "随笔",
    icon: "write",
    prefix: "notes/",
    children: [
      {
        text: "面试重点",
        icon: "markdown",
        link: "面试重点"
      },
      
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
      }
    ]
  },
  
  {
    text: "Cholez",
    icon: "/icon/cholez.svg",
    link: "http://cholez.cn"
  }
])

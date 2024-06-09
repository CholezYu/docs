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
            link: "Vue"
          },
          {
            text: "Vue 2",
            icon: "vue",
            link: "history/Vue"
          },
          {
            text: "Nuxt",
            icon: "nuxt",
            link: "Nuxt"
          },
          {
            text: "React 18",
            icon: "react",
            link: "React"
          },
          {
            text: "React Native",
            icon: "react",
            link: "ReactNative"
          },
          {
            text: "WeChat",
            icon: "wechat",
            link: "WeChat"
          },
          {
            text: "UniApp",
            icon: "uniapp",
            link: "UniApp"
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
            text: "Bootstrap",
            icon: "bootstrap",
            link: "Bootstrap"
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
            text: "Webpack",
            icon: "webpack",
            link: "Webpack"
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
          },
          {
            text: "Nginx",
            icon: "nginx",
            link: "Nginx"
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

import { navbar } from "vuepress-theme-hope"

export default navbar([
  {
    text: "概览",
    icon: "guide",
    link: "overview/"
  },
  
  {
    text: "导航",
    icon: "context",
    children: [
      {
        text: "基础",
        prefix: "base/",
        children: [
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
            text: "JavaScript",
            icon: "javascript",
            link: "javascript"
          }
        ]
      },
      
      {
        text: "核心",
        prefix: "core/",
        children: [
          {
            text: "Vue 3",
            icon: "vue",
            link: "vue"
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
            text: "Mini Program",
            icon: "mini-app",
            link: "mini-app"
          },
          {
            text: "TypeScript",
            icon: "typescript",
            link: "typescript"
          }
        ]
      }
      
      // {
      //   text: "动态",
      //   children: [
      //     {
      //       text: "Cholez",
      //       icon: "/icon/cholez.svg",
      //       link: "http://cholez.cn"
      //     }
      //   ]
      // }
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
  }
])

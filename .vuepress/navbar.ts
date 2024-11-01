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
          }
        ]
      },
      
      {
        text: "移动端",
        prefix: "mobile/",
        children: [
          {
            text: "React Native",
            icon: "react",
            link: "react-native"
          },
          {
            text: "微信小程序",
            icon: "mini-app",
            link: "mini-app"
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
        text: "解决问题",
        icon: "markdown",
        link: "解决问题"
      },
      
      {
        text: "项目难点",
        icon: "markdown",
        link: "项目难点"
      },
      
      {
        text: "代码规范",
        icon: "markdown",
        link: "代码规范"
      }
    ]
  },
  
  // {
  //   text: "主页",
  //   icon: "cholez",
  //   link: "http://cholez.cn"
  // }
])

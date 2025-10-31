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
        text: "客户端",
        prefix: "client/",
        children: [
          {
            text: "JavaScript",
            icon: "javascript",
            link: "javascript"
          },
          {
            text: "React",
            icon: "react",
            link: "react"
          },
          {
            text: "Vue 3",
            icon: "vue",
            link: "vue"
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
          }
        ]
      },
      
      {
        text: "服务端",
        prefix: "server/",
        children: [
          {
            text: "Java",
            icon: "java",
            link: "java"
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
  }
  
  // {
  //   text: "主页",
  //   icon: "cholez",
  //   link: "http://cholez.cn"
  // }
])

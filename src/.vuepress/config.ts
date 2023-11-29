// @ts-ignore
import { defineUserConfig } from "vuepress"
import theme from "./theme.js"

export default defineUserConfig({
  base: "/docs",
  lang: "zh-CN",
  description: "vuepress-theme-hope 的文档演示",
  theme
  // Enable it with pwa
  // shouldPrefetch: false,
})

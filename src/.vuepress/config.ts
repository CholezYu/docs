// @ts-ignore
import { defineUserConfig } from "vuepress"
import theme from "./theme.js"

export default defineUserConfig({
  base: "/docs/",
  lang: "zh-CN",
  description: "",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
})

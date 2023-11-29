export const data = JSON.parse("{\"key\":\"v-1473bf53\",\"path\":\"/demo/\",\"title\":\"其他功能\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"其他功能\",\"index\":false,\"icon\":\"code\",\"category\":[\"使用指南\"],\"description\":\"目录 Markdown 展示 (markdown.md); 页面展示 (page.md); 禁用展示 (disable.md); 加密展示 (encrypt.md);\"},\"headers\":[{\"level\":2,\"title\":\"目录\",\"slug\":\"目录\",\"link\":\"#目录\",\"children\":[]}],\"readingTime\":{\"minutes\":0.12,\"words\":35},\"filePathRelative\":\"demo/README.md\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

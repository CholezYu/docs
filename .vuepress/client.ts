import { defineClientConfig } from "@vuepress/client"
import Vue from "./components/Icons/Vue.vue"
import Ts from "./components/Icons/Ts.vue"
import Tsx from "./components/Icons/Tsx.vue"
import Js from "./components/Icons/JS.vue"
import Json from "./components/Icons/Json.vue"
import Wechat from "./components/Icons/Wechat.vue"

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Vue", Vue)
    app.component("Ts", Ts)
    app.component("Tsx", Tsx)
    app.component("Js", Js)
    app.component("Json", Json)
    app.component("Wechat", Wechat)
  }
})

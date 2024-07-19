import { defineClientConfig } from "@vuepress/client"
import Vue from "./components/Icons/Vue.vue"
import Ts from "./components/Icons/Ts.vue"
import Tsx from "./components/Icons/Tsx.vue"
import JS from "./components/Icons/JS.vue"
import Json from "./components/Icons/Json.vue"
import Prop from "./components/Icons/Prop.vue"
import Event from "./components/Icons/Event.vue"

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Vue", Vue)
    app.component("Ts", Ts)
    app.component("Tsx", Tsx)
    app.component("JS", JS)
    app.component("Json", Json)
    app.component("Prop", Prop)
    app.component("Event", Event)
  }
})

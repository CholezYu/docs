import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "F:/docs/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-506a65be29/0/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.1-835fd429ef-5ca96f53ed.zip/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "F:/docs/.yarn/__virtual__/vuepress-shared-virtual-87419d9b1d/0/cache/vuepress-shared-npm-2.0.0-rc.1-c527170904-5a37df8af3.zip/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "F:/docs/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-506a65be29/0/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.1-835fd429ef-5ca96f53ed.zip/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import { useHint } from "F:/docs/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-506a65be29/0/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.1-835fd429ef-5ca96f53ed.zip/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "F:/docs/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-506a65be29/0/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.1-835fd429ef-5ca96f53ed.zip/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import CodeDemo from "F:/docs/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-506a65be29/0/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.1-835fd429ef-5ca96f53ed.zip/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "F:/docs/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-506a65be29/0/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.1-835fd429ef-5ca96f53ed.zip/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "F:/docs/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-506a65be29/0/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.1-835fd429ef-5ca96f53ed.zip/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import Playground from "F:/docs/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-506a65be29/0/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.1-835fd429ef-5ca96f53ed.zip/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "F:/docs/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-506a65be29/0/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.1-835fd429ef-5ca96f53ed.zip/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "F:/docs/.yarn/cache/katex-npm-0.16.9-721692b7ff-861194dfd4.zip/node_modules/katex/dist/katex.min.css";
import "F:/docs/.yarn/__virtual__/vuepress-plugin-md-enhance-virtual-506a65be29/0/cache/vuepress-plugin-md-enhance-npm-2.0.0-rc.1-835fd429ef-5ca96f53ed.zip/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});

import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "F:/docs/.yarn/__virtual__/vuepress-shared-virtual-87419d9b1d/0/cache/vuepress-shared-npm-2.0.0-rc.1-c527170904-5a37df8af3.zip/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "F:/docs/.yarn/cache/@vueuse-core-npm-10.6.1-cc73c8581b-13b892a32f.zip/node_modules/@vueuse/core/index.mjs";
import Badge from "F:/docs/.yarn/__virtual__/vuepress-plugin-components-virtual-074bf694fe/0/cache/vuepress-plugin-components-npm-2.0.0-rc.1-74fdfbfd3b-9adc51d091.zip/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "F:/docs/.yarn/__virtual__/vuepress-plugin-components-virtual-074bf694fe/0/cache/vuepress-plugin-components-npm-2.0.0-rc.1-74fdfbfd3b-9adc51d091.zip/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "F:/docs/.yarn/__virtual__/vuepress-plugin-components-virtual-074bf694fe/0/cache/vuepress-plugin-components-npm-2.0.0-rc.1-74fdfbfd3b-9adc51d091.zip/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "F:/docs/.yarn/__virtual__/vuepress-plugin-components-virtual-074bf694fe/0/cache/vuepress-plugin-components-npm-2.0.0-rc.1-74fdfbfd3b-9adc51d091.zip/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
      useStyleTag(`\
  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});

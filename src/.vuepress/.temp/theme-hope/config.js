import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "F:/docs/.yarn/__virtual__/vuepress-shared-virtual-87419d9b1d/0/cache/vuepress-shared-npm-2.0.0-rc.1-c527170904-5a37df8af3.zip/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "F:/docs/.yarn/__virtual__/vuepress-theme-hope-virtual-f905e326c2/0/cache/vuepress-theme-hope-npm-2.0.0-rc.1-d22c326206-e503de2190.zip/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineAutoCatalogIconComponent } from "F:/docs/.yarn/__virtual__/vuepress-plugin-auto-catalog-virtual-e77ab5793b/0/cache/vuepress-plugin-auto-catalog-npm-2.0.0-rc.1-9e49789223-63ae995619.zip/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import { GlobalEncrypt, LocalEncrypt } from "F:/docs/.yarn/__virtual__/vuepress-theme-hope-virtual-f905e326c2/0/cache/vuepress-theme-hope-npm-2.0.0-rc.1-d22c326206-e503de2190.zip/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "F:/docs/.yarn/__virtual__/vuepress-theme-hope-virtual-f905e326c2/0/cache/vuepress-theme-hope-npm-2.0.0-rc.1-d22c326206-e503de2190.zip/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "F:/docs/.yarn/__virtual__/vuepress-theme-hope-virtual-f905e326c2/0/cache/vuepress-theme-hope-npm-2.0.0-rc.1-d22c326206-e503de2190.zip/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogIconComponent(HopeIcon);

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);
    // provide VPLink as global component
    app.component("VPLink", VPLink);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
});
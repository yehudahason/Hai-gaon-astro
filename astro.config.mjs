// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/book.html": "/book",
    "/book-2.html": "/book-2",
    "/book-3.html": "/book-3",
    "/about.html": "/about",
    "/roe1.html": "/roe1",
    "/roe2.html": "/roe2",
    "/roe3.html": "/roe3",
    "/roe4.html": "/roe4",
    "/roe5.html": "/roe5",
    "/roe6.html": "/roe6",
    "/roe7.html": "/roe7",
    "/roe8.html": "/roe8",
  },
  integrations: [vue()],
  adapter: node({
    mode: "standalone",
  }),
});

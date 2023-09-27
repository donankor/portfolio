import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
      ],
    },
  },

  css: [
    "~/assets/base.scss",
    "~/assets/font/stolzy/stylesheet.css",
    "~/assets/font/machina/stylesheet.css",
  ],

  modules: ["@pinia/nuxt", "@nuxt/content"],
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/styles/global.css", "~/assets/css/tailwind.css"],
  alias: {
    css: "/<rootDir>/styles",
  },

  modules: [
    "@pinia/nuxt", // required
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
  ],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
      ],
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/styles/global.css"],
  alias: {
    css: "/<rootDir>/styles",
  },

  modules: [
    "@pinia/nuxt", // required
    "pinia-plugin-persistedstate/nuxt",
  ],

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

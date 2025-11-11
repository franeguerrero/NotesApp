// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon"],

  runtimeConfig: {
    public: {
      apiBase: "http://localhost:3001",
    },
  },

  css: ["../assets/styles/main.css"],
});

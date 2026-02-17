// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
    },
  },

  routeRules: {
    "/": { isr: 60 },
    "/blog/**": { isr: 300 },
  },
});

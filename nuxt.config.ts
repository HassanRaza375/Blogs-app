// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@pinia/nuxt", "nuxt-toast", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],
  //  toast
  toast: {
    composableName: "useNotification",
    settings: {
      rtl: true,
      position: "topRight",
      timeout: 5000,
      closeOnEscape: true,
      closeOnClick: true,
      pauseOnHover: true,
    },
  },
  // route rules
  routeRules: {
    "/": { isr: 300 }, // SSR homepage
    "/admin/**": { ssr: false }, // SPA dashboard
    "/blog/**": { isr: 60 }, // Revalidate every 60 seconds
  },
  // / runtime config
  runtimeConfig: {
    public: {
      blogApiBase: process.env.BLOGS_API_BASE_URL,
    },
  },
});

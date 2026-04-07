// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  ssr: true,
  srcDir: "src/",

  components: [
    { path: "~/components/common", prefix: "Base" },
    { path: "~/components/layout", prefix: "Layout" },
    { path: "~/components/sections", prefix: "" },
  ],

  imports: {
    dirs: ["constants", "composables"],
  },

  app: {
    head: {
      title: "LUXE Timepieces - Luxury Watches",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Discover luxury watches from the world's finest brands. Timeless elegance and precision craftsmanship." },
      ],
    },
    baseURL: "/",
  },

  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@element-plus/nuxt",
  ],
  
  elementPlus: {},
  
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },
  
  i18n: {
    defaultLocale: "vi",
    langDir: "../i18n/locales",
    locales: [
      { code: "vi", name: "Tiếng Việt", file: "vi.json" },
      { code: "en", name: "English", file: "en.json" }
    ],
  },

  css: ["@unocss/reset/tailwind.css", "boxicons/css/boxicons.min.css"],

  compatibilityDate: "2025-04-15",
});

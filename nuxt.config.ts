// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  ssr: true,
  srcDir: "src/",

  imports: {
    dirs: ["constants", "composables"],
  },

  app: {
    head: {
      title: "Luyện Thi Toán Học",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Hệ thống luyện thi toán trực tuyến" },
      ],
    },
    baseURL: "/",
  },

  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/color-mode",
  ],
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },
  i18n: {
    defaultLocale: "vi",
    langDir: "locales",
    locales: [{ code: "vi", name: "Tiếng Việt", file: "vi.json" }],
  },

  css: ["@unocss/reset/tailwind.css", "boxicons/css/boxicons.min.css"],

  compatibilityDate: "2025-04-15",
});

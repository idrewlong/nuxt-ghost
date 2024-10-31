// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, "/")
  },
  site: {
    url: 'https://example.com',
    name: 'Awesome Site',
    description: 'Welcome to my awesome site!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  gtag: {
    id: 'G-XXXXXXXXXX'
  },
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  image: {
    format: ['webp'],
    domains: [],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  purgecss: {
    enabled: true, // Always enable purgecss
  },

  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/seo",
    'nuxt-gtag',
    'nuxt-purgecss',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ]
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Nuxt Shop",
      meta: [{ name: "description", content: "Nuxt shop for shopping online" }],
      // Add CDN links to the document head
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  typescript: {
    shim: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    // only for server routes
    testKey: process.env.TEST_API_KEY,
    // public keys available for frontend
    public: {
      publicKey: process.env.PUBLIC_TEST_VALUE,
    },
  },
  modules: ["@pinia/nuxt"],
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  app: {
    head: {
      title: "Test",
      meta: [
        {
          name: "description",
          content: "Website Description",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    "~/assets/css/tailwind.css",
    "~/assets/css/font.css",
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

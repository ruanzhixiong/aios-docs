// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image", "nuxt-gtag", "@vueuse/motion/nuxt", "@nuxt/eslint"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  runtimeConfig: {
    public: {
      site: {
        ogImage: "/logo.png",
      },
    },
  },
  extends: ["shadcn-docs-nuxt"],
  compatibilityDate: "2024-07-06",
  devServer: {
    port: 3888,
    host: "localhost",
  },
});

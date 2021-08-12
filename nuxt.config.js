export default {
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss', '@nuxtjs/composition-api/module'],
  modules: ['@nuxtjs/apollo'],
  plugins: ['~/plugins/apollo/provider.ts'],
  srcDir: 'src/',
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api.spacex.land/graphql/',
      },
    },
  },
}

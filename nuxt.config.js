export default {
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss', '@nuxtjs/composition-api/module'],
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
  },
  modules: ['@nuxtjs/apollo'],
  srcDir: 'src/',
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api.spacex.land/graphql/',
      },
    },
  },
}

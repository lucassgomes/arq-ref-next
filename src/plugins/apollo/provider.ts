import { provide } from '@nuxtjs/composition-api'
import { Context, Plugin } from '@nuxt/types'
import { ApolloClients, DefaultApolloClient } from '@vue/apollo-composable'

const provideApollo: Plugin = ({ app }: Context) => {
  app.setup = () => {
    // since plugin is eval'd after module app.apolloProvider will always be defined
    const clients = app.apolloProvider?.clients
    provide(DefaultApolloClient, clients?.defaultClient)
    // not functionally important but req'd return type
    return { [ApolloClients]: clients }
  }
}

export default provideApollo

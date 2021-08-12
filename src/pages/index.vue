<template>
  <div class="w-full h-full flex justify-center align-middle flex-col px-10">
    <div v-if="!show && $apollo.queries.lauchesPast.loading">Loading...</div>
    <button v-else-if="show" class="animate-bounce bg-green-300" @click="startData">Clica aqui pra iniciar a query</button>
    <ul v-else-if="lauchesPast && !error">
      <li v-for="launch of lauchesPast" :key="launch.id">{{ launch.mission_name }}</li>
    </ul>
    <button v-if="!show && !error && lauchesPast.length" class="bg-blue-300" @click="refetchData">
      Clica aqui pra carregar mais dados
    </button>
    <button v-if="!show && !error && lauchesPast.length" class="bg-red-300" @click="cleanData">Clica aqui para limpar os dados</button>
  </div>
</template>

<script>
// import { defineComponent, ref } from '@nuxtjs/composition-api'
// import { useResul } from '@vue/apollo-composable'
import { useLaunchesPastQuery } from '~/generated/graphql'
export default {
  apollo: {
    lauchesPast: useLaunchesPastQuery({
      variables: {
        limit: 10,
        offset: 0,
      },
      loadingKey: 'loadingLaunches',
      fetchPolicy: 'no-cache',
      skip: true,
      error() {
        return this.error
      },
      update: (data) => data.launchesPast,
    }),
  },
  data() {
    return {
      show: true,
      error: null,
      limit: 10,
      offset: 0,
      lauchesPast: [],
    }
  },
  watch: {
    offset: {
      handler(newValue) {
        if (newValue >= 10) {
          this.$apollo.queries.lauchesPast.refetch({
            limit: this.limit,
            offset: newValue,
          })
        } else {
          this.$apollo.queries.lauchesPast.refetch({
            limit: this.limit,
            offset: 0,
          })
        }
      },
      deep: true,
    },
  },
  methods: {
    startData() {
      this.show = false
      this.$apollo.queries.lauchesPast.skip = false
      this.$apollo.queries.lauchesPast.start()
    },
    refetchData() {
      this.offset += 10
    },
    cleanData() {
      this.limit = 10
      this.offset = 0
      this.lauchesPast = []
      this.show = true
    },
  },
}
</script>
<template>
  <div>
    <div class="w-full h-full flex justify-center align-middle" v-if="loading">Loading...</div>

    <ul v-else-if="result">
      <li v-for="user of result.launchesPast" :key="user.id">{{ user.mission_name }}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { useLaunchesPastQuery } from '~/types/graphql'
export default defineComponent({
  setup() {
    const { result, loading, error } = useLaunchesPastQuery()

    return {
      result,
      loading,
      error,
    }
  }
})
</script>
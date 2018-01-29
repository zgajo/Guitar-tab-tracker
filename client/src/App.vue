<template>
  <v-app  id="app">
    <pageHeader></pageHeader>
    <router-view />
  </v-app >
</template>

<script>
import PageHeader from '@/components/Header'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
</style>

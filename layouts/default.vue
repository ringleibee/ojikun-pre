<template>
  <div>
    <header>
      <default-header />
    </header>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DefaultHeader from '~/layouts/DefaultHeader.vue'

export default Vue.extend({
  components: {
    DefaultHeader
  }
})
</script>

<style>
header {
  @apply absolute left-0 right-0;
}
</style>

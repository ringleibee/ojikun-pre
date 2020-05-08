<template>
  <div id="wrapper">
    <header>
      <default-header />
    </header>
    <main>
      <nuxt />
    </main>
    <footer>
      <default-footer />
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DefaultHeader from '~/layouts/DefaultHeader.vue'
import DefaultFooter from '~/layouts/DefaultFooter.vue'

export default Vue.extend({
  components: {
    DefaultHeader,
    DefaultFooter
  }
})
</script>

<style>
header {
  background: black;
  @apply fixed top-0 left-0 right-0 z-10;
}

body,
#wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

footer {
  margin-top: auto;
}

</style>

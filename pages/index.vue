<template>
  <div>
    <o-home-section />
    <o-about-section />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OHomeSection from '~/components/OHomeSection.vue'
import OAboutSection from '~/components/OAboutSection.vue'

export default Vue.extend({
  components: {
    OAboutSection,
    OHomeSection
  }
})
</script>

<style>
</style>
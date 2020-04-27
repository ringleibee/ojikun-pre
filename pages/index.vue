<template>
  <div>
    <o-home-section />
    <o-about-section />
    <o-services-section />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OHomeSection from '~/components/OHomeSection.vue'
import OAboutSection from '~/components/OAboutSection.vue'
import OServicesSection from '~/components/OServicesSection.vue'

export default Vue.extend({
  components: {
    OAboutSection,
    OHomeSection,
    OServicesSection
  }
})
</script>

<style>
</style>
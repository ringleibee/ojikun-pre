<template>
  <div>
    <o-home-section />
    <o-about-section />
    <o-services-section />
    <o-works-section />
    <o-contact-section />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OHomeSection from '~/components/OHomeSection.vue'
import OAboutSection from '~/components/OAboutSection.vue'
import OServicesSection from '~/components/OServicesSection.vue'
import OWorksSection from '~/components/OWorksSection.vue'
import OContactSection from '~/components/OContactSection.vue'

export default Vue.extend({
  components: {
    OAboutSection,
    OHomeSection,
    OServicesSection,
    OWorksSection,
    OContactSection
  }
})
</script>

<style>
</style>
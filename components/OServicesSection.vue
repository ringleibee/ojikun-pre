<template>
  <div>
      <section id="services" class="services min-h-screen flex items-center">
        <div class="container mx-auto">
          <div class="flex flex-col text-center leading-none">
            <h1 class="font-bold text-6xl">Services</h1>
            <h3>"Give" is life... yeah-_-</h3>
          </div>

          <div class="services-contents flex flex-row justify-center">
            <div v-inview:animate="'fadeInLeft'">
              <div class="box">
                <img src="~assets/images/webdev.jpg">
                Web Developping.
              </div>
            </div>

            <div class="box">
              <img src="~assets/images/movdev.jpg">
              Movie creating.
            </div>

            <div class="box">
              <img src="~assets/images/webmak.jpg">
              Web Marketing.
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {
  }
})
</script>

<style>
.services-contents {
  margin-top: 70px;
}

.box {
  @apply mx-10 text-center;
}

.box > img {
  width: 300px;
  height: 300px;
  @apply rounded flex flex-col mb-2;
}
</style>

<template>
  <div class="wrapper relative">
    <div class="container mx-auto">
      <div class="top-button-wrapper flex items-center flex-col">
        <a v-scroll-to="'body'" class="top-button bg-white text-gray-800 flex items-center justify-center w-12 h-12"><i class="fas mt-2 bg-white fa-2x fa-sort-up"></i></a>
        <div class="flex justify-center items-center h-32">
          <div class="footer-sns">
            <a href="https://www.instagram.com/0ffice365/"><i class="fab fa-2x fa-instagram"></i></a>
            <a href="https://twitter.com/xtyyyy"><i class="fab fa-2x fa-twitter"></i></a>
            <a href="https://github.com/ringleibee"><i class="fab fa-2x fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

export default Vue.extend({
  scrollToTop: true
  });
</script>

<style scoped>
.wrapper {
  border-top: 3px solid white;
}

.top-button {
  border-radius: 50%;
}
.footer-sns > a {
  @apply mx-2;
}

.top-button {
  position: absolute;
  top:-25px;
}
</style>

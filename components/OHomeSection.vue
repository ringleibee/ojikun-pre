<template>
  <div>
      <section id="home" class="home min-h-screen flex items-center">
        <div class="container mx-auto">
          <div class="home-content flex flex-col leading-none">
            <h6 class="text-2xl">Hello, world</h6>
            <h1 class="font-bold">HELLO WORLD.com</h1>
            <h3 class="text-xl">web developer</h3>
            <button class="cv-btn w-1/5 bg-transparent hover:bg-white hover:text-black text-white font-semibold mt-10 py-2 px-2 border border-white rounded">
              More about...
            </button>
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
.home-content {
  border-left: 5px solid white;
  padding-left: 5%;
}

h1 {
  font-size: 60px;
}
</style>

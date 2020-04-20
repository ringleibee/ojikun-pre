<template>
  <div>
      <section class="about min-h-screen flex items-center">
        <div class="container mx-auto">
          <div class="about-title flex flex-col leading-none">
            <p class="font-bold text-6xl">ABOUT ME</p>
            <p>INFOMATION ABOUT ME</p>
          </div>

          <div class="about-contents flex flex-row">
            <!-- Photo -->
            <img class="about-photo" alt="about-me" src="~assets/images/aboutme.png">

            <!-- Desc -->
            <div class="flex flex-col ml-10 leading-none">
              <p class="text-3xl">I'M a hello world!!!</p>
              <p class="text-2xl">web developping for my dream!</p>
              <p class="text-gray-500 text-xs mt-5">
                hello, world.hello, worldhello, worldhello, worldhello, worldhello, worldhello, world
                hello, worldhello, worldhello, worldhello, worldhello, worldhello, worldhello, world
                hello, worldhello, worldhello, worldhello, worldhello, worldhello, worldhello, world
                hello, worldhello, worldhello, worldhello, worldhello, worldhello, worldhello, world
              </p>
              <div class="info">
                <label>Birthday:</label>
                <p>7th July 1996</p>
                <label>Birthday:</label>
                <p>7th July 1996</p>
                <label>Birthday:</label>
                <p>7th July 1996</p>
                <label>Birthday:</label>
                <p>7th July 1996</p>
                <label>Birthday:</label>
                <p>7th July 1996</p>
                <label>Birthday:</label>
                <p>7th July 1996</p>
                <label>Birthday:</label>
                <p>7th July 1996</p>
                <label>Birthday:</label>
                <p>7th July 1996</p>
              </div>
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
.about-photo {
  width: 400px;
  height: 400px;
}

.about-contents {
  margin-top: 70px;
}
</style>

<template>
  <div>
      <section class="home">
        <div class="container mx-auto">
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
.home {
  @apply min-h-screen bg-cover bg-center;
  background-image: url("~assets/images/top.jpg");
}
</style>

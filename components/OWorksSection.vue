<template>
  <div>
    <section class="works min-h-screen flex items-center">
      <div class="container mx-auto">
        <div class="works-content flex flex-col leading-none">
          <h6 class="text-2xl">talking about with you...</h6>
          <h1 class="font-bold">Works</h1>
          <h3 class="text-xl">Please write this form</h3>
          <div class=" w-1/2 bg-transparent mt-10">
            <a href="#">
              <img class="works-img rounded" src="~assets/images/works_nakamu.png">
            </a>
            <p class="mt-3">
               香港でエンジニアをされている方のプロフィールサイトのリニューアルに携わりました。
               主にtailwindCSS, Nuxt.js, TypeScriptと、モダンフロントエンド技術を利用。
            </p>
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
  },
  data() {
    return {
      icon: ['\uf007', '\uf0e0']
    }
  }
})
</script>

<style scoped>
.works-content {
  border-left: 5px solid white;
  padding-left: 5%;
}

h1 {
  font-size: 60px;
}

label {
  line-height: 2 !important;
  @apply inline-block w-full border border-gray-700 rounded mb-3 px-2 ;
}

.form-end {
  margin-bottom: 0
}

input {
  font-family: "Font Awesome 5 Free";
  font-weight: 400;
  content: '\f007';
}
</style>

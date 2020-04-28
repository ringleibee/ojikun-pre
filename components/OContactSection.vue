<template>
  <div>
    <section class="contact min-h-screen flex items-center">
      <div class="container mx-auto">
        <div class="contact-content flex flex-col leading-none">
          <h6 class="text-2xl">talking about with you...</h6>
          <h1 class="font-bold">Contact Me</h1>
          <h3 class="text-xl">Please write this form</h3>
          <form class=" w-1/2 bg-transparent text-gray-700 mt-10">
            <label for="name">
              <input type="text" name="name" id="name" :placeholder="icon[0] + ' name'" />
            </label>
            <label for="email">
              <input type="email" name="email" id="email" :placeholder="icon[1] +' email'">
            </label>
            <label for="contents" class="form-end">
              <textarea class="resize-none" name="contents" id="contents" placeholder="Please contact me.."></textarea>
            </label>
          </form>
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
.contact-content {
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

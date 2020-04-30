<template>
  <div>
    <section id="contact" class="contact min-h-screen flex items-center">
      <div class="container mx-auto flex flex-row-reverse">
        <div class="wrap flex flex-row-reverse w-1/2">
          <div class="contact-content flex flex-col leading-none">
            <h6 class="text-2xl">talking about with you...</h6>
            <h1 class="font-bold">Contact Me</h1>
            <h3 class="text-xl">Please write this form</h3>
            <validation-observer refs="obs" v-slot="{ handleSubmit, invalid, valid }">
                <form class="w-full bg-transparent text-gray-700 mt-10">
                  <validation-provider v-slot="{ errors }" rules="required" name="名前">
                    <label for="name">
                      <input v-model="name" type="text" name="name" id="name" :placeholder="icon[0] + ' name'" />
                    </label>
                    <span v-show="errors.length" class="error-message mt-0"> {{ errors[0] }}</span>
                  </validation-provider>
                  <validation-provider v-slot="{ errors}" rules="required" name="メールアドレス">
                    <label for="email">
                      <input v-model="email" type="email" name="email" id="email" :placeholder="icon[1] +' email'">
                    </label>
                    <span v-show="errors.length" class="error-message mt-0"> {{ errors[0] }}</span>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" rules="required" name="お問い合わせ内容">
                    <label for="contents" class="form-end">
                      <textarea v-model="contents" class="resize-none" name="contents" id="contents" placeholder="Please contact me.."></textarea>
                    </label>
                    <span v-show="errors.length" class="error-message mt-0"> {{ errors[0] }}</span>
                  </validation-provider>
                  <button type="submit" class="inActive" :class="{ active:valid }" :disabled="invalid">Send</button>
                </form>
            </validation-observer>
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
      icon: ['\uf007', '\uf0e0'],
      name: "",
      email: "",
      contents: "",
    }
  }
});
</script>

<style scoped>
.contact-content {
  border-right: 5px solid white;
  padding-right: 64px;
}

.contact-content > h6, h3, h1 {
  text-align: right;
}

h1 {
  font-size: 60px;
}

label {
  line-height: 2 !important;
  @apply inline-block w-full border border-gray-700 my-1 rounded px-2;
}

.form-end {
  margin-bottom: 0
}

input {
  @apply w-full;
  font-family: "Font Awesome 5 Free";
  font-weight: 400;
  content: '\f007';
}

.error-message {
  @apply text-xs inline w-full;
  color: red;
  }

.inActive {
  @apply hidden;
}

.active {
  @apply text-gray-700 font-semibold py-2 inline-block px-4 my-2 border border-gray-700 rounded
}

.active:hover {
  @apply text-white border-white;
}

button {
  animation: fadeIn 1s ease 0s 1 normal 0ms;
  -webkit-animation: fadeIn 1s ease 0s 1 normal;
}

@keyframes fadeIn {
  0% {opacity: 0}
  100% {opacity: 1}
}

@-webkit-keyframes fadeIn {
  0% {opacity: 0}
  100% {opacity: 1}
}

</style>

<template>
  <div>
    <div class="container mx-auto">
      <div class="row flex flex-wrap justify-between h-20 items-center">
          <div class="brand-name">
            <nuxt-link to="/" class="logo">Ojikun.com</nuxt-link>
          </div>
          <div class="navbar">
            <ul class="menulink">
              <li>
                <nuxt-link v-scroll-to="'#home'" to>
                  Home
                </nuxt-link>
              </li>

              <li>
                <nuxt-link v-scroll-to="'#about'" to>
                  About
                </nuxt-link>
              </li>

              <li>
                <nuxt-link v-scroll-to="'#services'" to>
                  Services
                </nuxt-link>
              </li>

              <li>
                <nuxt-link v-scroll-to="'#works'" to>
                  Works
                </nuxt-link>
              </li>

              <li>
                <nuxt-link v-scroll-to="'#contact'" to>
                  Contact
                </nuxt-link>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.logo {
  @apply text-2xl tracking-widest;
}

ul {
  @apply p-0 m-0;
}

li {
  @apply inline-block mx-5;
}

.navbar ul li {
  line-height: 72px;
}

.menulink > li {
  @apply relative inline-block no-underline tracking-widest;
}

.menulink > li::after {
  @apply absolute left-0 w-full;
  bottom: -30px;
  content: '';
  height: 4px;
  background: white;
  transform: scale(0, 1);
  transform-origin: left top;
  transition: transform 0.5s;
}

.menulink > li:hover::after {
  transform: scale(1, 1);
}

.brand-name {
  opacity: 0;
  animation: header-delay 1s;
  animation-delay: .5s;
  animation-fill-mode: forwards;
}

.navbar {
  opacity: 0;
  animation: header-delay 1s;
  animation-delay: .7s;
  animation-fill-mode: forwards;
}

@keyframes header-delay {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<template>
  <div>
    <div class="container mx-auto">
      <div class="row flex flex-wrap justify-between items-center">
        <div class="brand-name">
          <nuxt-link to="/" class="logo">Ojikun.com</nuxt-link>
        </div>
        <div class="navbar">
          <ul class>
            <li>
              <nuxt-link to="/">
                Home
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/">
                About
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/">
                Services
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/">
                Works
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/">
                Contact
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
ul {
  @apply p-0 m-0;
}

li {
  @apply inline-block mx-5;
}

.navbar ul li {
  line-height: 72px;
}
</style>

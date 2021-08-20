<template>
  <v-app>
    <v-app-bar app flat hide-on-scroll height="180">
      <nav class="tw-flex tw-gap-4">
        <nuxt-link to="/home">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/testimonials">Testimonials</nuxt-link>
        <nuxt-link to="/case-studies">Case Studies</nuxt-link>
      </nav>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
<style>
.v-app-bar {
  background-color: transparent !important;
  transition: background-color 500ms ease-in-out 500ms !important;
}

.v-app-bar.v-app-bar--is-scrolled {
  background-color: red !important;
}
</style>
<style lang="scss" scoped>
::v-deep .v-toolbar__content {
  padding: 28px 50px;
}

nav {
  a {
    @apply tw-text-gray-50 tw-font-medium tw-text-lg;
  }
}
</style>

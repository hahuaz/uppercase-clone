<template>
  <v-app dark class="tw-py-48 tw-px-12 tw-bg-blue-dark-lighten">
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/" class="tw-text-blue-dark tw-underline tw-text-3xl">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  /* treat error layout as a page regardless it's in layout */
  layout: (ctx) => (ctx.$device.isMobile ? 'mobile' : 'default'),
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>

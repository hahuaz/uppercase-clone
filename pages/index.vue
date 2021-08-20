<template>
  <div class="tw-pt-64">
    hi from index
    <div class="tw-bg-green-200 tw-min-h-screen"></div>
    <div class="tw-bg-red-200 tw-min-h-screen"></div>
  </div>
</template>

<script>
export default {
  layout: (ctx) => (ctx.$device.isMobile ? 'mobile' : 'default'),
}
</script>

<style lang="scss" scoped></style>

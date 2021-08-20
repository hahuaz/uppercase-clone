<template>
  <div>hi from index</div>
</template>

<script>
export default {
  layout: (ctx) => (ctx.$device.isMobile ? 'mobile' : 'default'),
}
</script>

<style lang="scss" scoped></style>

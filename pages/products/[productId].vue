<template>
  <div>Product by {{ productId }}</div>
</template>

<script setup>
const { productId } = useRoute().params;
</script>

<style lang="scss" scoped></style>

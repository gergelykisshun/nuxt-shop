<template>
  <div>Product by {{ productId }}</div>
</template>

<script setup>
const { productId } = useRoute().params;

definePageMeta({ layout: "products" });
</script>

<style lang="scss" scoped></style>

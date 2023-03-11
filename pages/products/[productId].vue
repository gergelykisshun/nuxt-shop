<template>
  <div>Product by {{ product.id }}</div>
  <div>
    {{ product.title }}
  </div>
  <div>
    {{ product.price }}
  </div>
  <div>
    {{ product.id }}
  </div>
</template>

<script setup>
const { productId } = useRoute().params;
const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${productId}`,
  { key: productId }
);

definePageMeta({ layout: "products" });
</script>

<style lang="scss" scoped></style>

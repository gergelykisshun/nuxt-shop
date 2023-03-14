<template>
  <h2 class="mb-5">All products</h2>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
  >
    <ProductCard v-for="product in products" :product="product" />
  </div>
</template>

<script setup>
definePageMeta({ layout: "products" });

const { data: products, pending } = await useFetch(
  "https://fakestoreapi.com/products"
);

useHead({
  title: "Next Shop | Merch",
  meta: [{ name: "description", content: "Nuxt Shop Merch" }],
});
</script>

<style lang="scss" scoped></style>

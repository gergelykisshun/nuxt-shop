<template>
  <div class="card">
    <img
      :src="product.image"
      alt="product thumb"
      class="w-[150px] h-[120px] object-contain"
    />
    <p class="font-bold text-gray-500 block w-full truncate">
      {{ product.title }}
    </p>
    <p>{{ product.category }}</p>
    <p>{{ product.price }} $</p>
    <NuxtLink :to="`/products/${product.id}`" class="btn"
      >View Details</NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
import { IProduct } from "~~/interfaces/product";

const { product } = defineProps<{ product: IProduct }>();
</script>

<style scoped></style>

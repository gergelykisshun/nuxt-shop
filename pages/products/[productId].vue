<template>
  <div v-if="product" class="flex flex-col md:flex-row gap-10">
    <img
      :src="product.image"
      alt="product thumb"
      class="w-96 h-96 object-contain"
    />
    <div class="flex flex-col gap-5">
      <p class="font-bold text-gray-500 text-4xl block w-full truncate">
        {{ product.title }}
      </p>
      <p class="text-[#12b488] font-bold text-lg">
        Price: {{ product.price }} $
      </p>
      <p class="font-bold border-b-2">Product description:</p>
      <p>{{ product.description }}</p>
      <NuxtLink :to="`/products`" class="btn">Buy</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IProduct } from "~~/interfaces/product";

const { productId } = useRoute().params;
const { data: product } = await useFetch<IProduct>(
  `https://fakestoreapi.com/products/${productId}`,
  { key: productId as string }
);

definePageMeta({ layout: "products" });
</script>

<style lang="scss" scoped></style>

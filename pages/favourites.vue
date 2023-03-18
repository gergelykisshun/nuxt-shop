<template>
  <h2 class="mb-5">Your Favourite Products</h2>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
  >
    <ProductCard v-for="product in favProducts" :product="product" />
  </div>
</template>

<script setup lang="ts">
import { useFavouritesStore } from "~~/store/favourites";
import { storeToRefs } from "pinia";
import { IProduct } from "~~/interfaces/product";

const favStore = useFavouritesStore();
const { favourites } = storeToRefs(favStore);

const favProducts = (
  await Promise.all(
    favourites.value.map(
      async (productId) =>
        await useFetch<IProduct>(
          `https://fakestoreapi.com/products/${productId}`,
          { key: String(productId) }
        )
    )
  )
)
  .map((productResData) => productResData.data.value)
  .filter((product) => !!product) as IProduct[];
</script>

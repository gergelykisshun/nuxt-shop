<template>
  <div class="card relative">
    <i
      @click="favStore.toggleFavourite(product.id)"
      class="material-icons absolute top-5 right-10 w-3 cursor-pointer"
      >{{
        favourites.includes(product.id)
          ? "favorite_icon"
          : "favorite_border_icon"
      }}</i
    >

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
import { useFavouritesStore } from "~~/store/favourites";
import { storeToRefs } from "pinia";

const favStore = useFavouritesStore();
const { favourites } = storeToRefs(favStore);

const { product } = defineProps<{ product: IProduct }>();
</script>

<style scoped></style>

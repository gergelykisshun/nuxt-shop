import { defineStore } from "pinia";

export const useFavouritesStore = defineStore("favourites", () => {
  // state props
  const favourites = ref<number[]>([]);

  // computed values
  const favouriteAmount = computed(() => favourites.value.length);

  // actions
  function toggleFavourite(id: number) {
    if (favourites.value.includes(id)) {
      favourites.value = favourites.value.filter((favId) => favId !== id);
    } else {
      favourites.value = [...favourites.value, id];
    }
  }

  return { favourites, favouriteAmount, toggleFavourite };
});

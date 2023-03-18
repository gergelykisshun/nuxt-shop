import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useFavouritesStore = defineStore("favourites", {
  state: () => ({ favourites: [] as number[] }),
  getters: {
    favouriteAmount: (state) => state.favourites.length,
  },
  actions: {
    toggleFavourite(id: number) {
      if (this.favourites.includes(id)) {
        this.favourites = this.favourites.filter((favId) => favId !== id);
      } else {
        this.favourites = [...this.favourites, id];
      }
      localStorage.setItem("favourites", JSON.stringify(this.favourites));
    },
  },
  hydrate(state) {
    state.favourites = useLocalStorage("favourites", [] as number[]).value;
  },
});

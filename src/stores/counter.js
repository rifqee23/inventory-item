import { defineStore } from "pinia";
import { authGuard } from "../plugins/authGuard";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    //objek yang mendifinisikan state awal
    count: 0,
    iAuthenticated: false,
  }),
  actions: {
    //aksi yang dapat dijalankan
    increment() {
      this.count++;
    },
    reset() {
      this.$reset();
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  plugins: [authGuard],
});

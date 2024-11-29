import { defineStore } from "pinia";

export const useItemStore = defineStore("counter", {
  state: () => ({
    items: [
      {
        kode: "A001",
        nama: "Laptop",
        deskripsi: "Laptop 15 inch",
        stok: 10,
      },
      {
        kode: "A002",
        nama: "Mouse",
        deskripsi: "Mouse Logitech",
        stok: 5,
      },
    ],
  }),

  getters: {
    getItemByKode: (state) => (kode) => {
      return state.items.find((item) => item.kode === kode);
    },
  },

  actions: {
    addItem(item) {
      this.items.push(item);
    },

    updateItem(updatedItem) {
      const index = this.items.findIndex(
        (item) => item.kode === updatedItem.kode
      );

      if (index !== -1) {
        this.items[index] = updatedItem;
      }
    },

    deleteItem(kode) {
      this.items = this.items.filter((item) => item.kode !== kode);
    },
  },
  persist: true,
});

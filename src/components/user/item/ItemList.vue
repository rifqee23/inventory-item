<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import Modal from "@/components/Modal.vue";
import ItemForm from "./ItemForm.vue";
import { EventBus } from "../../../utils/EventBus";

const items = ref([
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
]);

const showForm = ref(false);
const selectedItem = ref(null);
const searchQuery = ref("");

const filteredItems = computed(() => {
  if (searchQuery.value) {
    return items.value.filter((item) =>
      item.nama.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  return items.value;
});

const borrowItem = (item) => {
  selectedItem.value = { ...item };
  showForm.value = true;
};

const handleBorrow = (item) => {
  const index = items.value.findIndex((i) => i.kode === item.kode);
  items.value[index].stok -= 1;
  selectedItem.value = null;
  showForm.value = false;
};

const cancelBorrowForm = () => {
  showForm.value = false;
  selectedItem.value = null;
};

const handleSearch = (query) => {
  searchQuery.value = query;
};

onMounted(() => {
  EventBus.on("search", handleSearch);
});

onBeforeUnmount(() => {
  EventBus.off("search", handleSearch);
});
</script>

<template>
  <div class="item-list">
    <h2>Daftar Barang</h2>

    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Kode Barang</th>

            <th>Nama Barang</th>

            <th>Deskripsi</th>

            <th>Stok</th>

            <th class="action-column">Aksi</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in items" :key="item.kode">
            <td>{{ item.kode }}</td>

            <td>{{ item.nama }}</td>

            <td>{{ item.deskripsi }}</td>

            <td>{{ item.stok }}</td>

            <td class="action-buttons">
              <button class="borrow-btn" @click="borrowItem(item)">
                Pinjam
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Modal :visible="showForm" @close="cancelBorrowForm">
      <ItemForm
        :item="selectedItem"
        @submit="handleBorrow"
        @cancel="cancelBorrowForm"
      />
    </Modal>
  </div>
</template>

<style scoped>
.item-list {
  padding: 16px;

  background-color: #fff;

  border-radius: 8px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  margin: 8px 0;
}

h2 {
  margin-bottom: 20px;

  color: #4b3f6b;

  text-align: center;

  font-size: 24px;
}

table {
  width: 100%;

  border-collapse: collapse;

  margin-top: 20px;
}

th,
td {
  border: 1px solid #ddd;

  padding: 12px 15px;

  text-align: center;
}

th {
  background-color: #4b3f6b;

  color: white;

  text-transform: uppercase;

  letter-spacing: 0.1em;
}

.table-responsive {
  width: 100%;

  overflow-x: auto;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

.action-column {
  width: 100px;

  text-align: center;
}

button {
  padding: 8px 12px;

  border: none;

  cursor: pointer;

  border-radius: 4px;

  font-size: 14px;

  margin: 0 2px;
}

.borrow-btn {
  background-color: #754bc5;

  color: white;
}

.borrow-btn:hover {
  background-color: #5a37a0;
}

@media (max-width: 600px) {
  th,
  td {
    padding: 8px 10px;
  }

  .action-buttons {
    flex-direction: column;

    align-items: stretch;
  }
}
</style>

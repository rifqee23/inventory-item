<script setup>
import { ref } from "vue";

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

const emit = defineEmits(["add-item", "edit-item", "delete-item"]);

const deleteItem = (kode) => {
  items.value = items.value.filter((item) => item.kode !== kode);
  emit("delete-item", kode);
};
</script>

<template>
  <div class="item-list">
    <div class="header">
      <h2>Daftar Item</h2>
      <button class="add-btn" @click="$emit('add-item')">Tambah Item</button>
    </div>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Kode</th>
            <th>Nama</th>
            <th>deskripsi</th>
            <th>stok</th>
            <th class="action-column">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.kode }}</td>
            <td>{{ item.nama }}</td>
            <td>{{ item.deskripsi }}</td>
            <td>{{ item.stok }}</td>
            <td>
              <button class="edit-btn" @click="$emit('edit-item', item)">
                Edit
              </button>
              <button class="delete-btn" @click="deleteItem(item.kode)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.item-list {
  padding: 24px;

  background-color: #fff;

  border-radius: 8px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  margin: 20px 0;
}

.header {
  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 12px;
}

h2 {
  color: #4b3f6b;

  font-size: 24px;
}

.add-btn {
  background-color: #754bc5;

  color: white;

  padding: 6px 12px;

  border: none;

  cursor: pointer;

  border-radius: 4px;

  font-size: 14px;
}

.add-btn:hover {
  background-color: #5a37a0;
}

.table-responsive {
  width: 100%;

  overflow-x: auto;
}

table {
  width: 100%;

  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;

  padding: 12px 15px;

  text-align: center;

  vertical-align: middle;
}

th {
  background-color: #4b3f6b;

  color: white;

  text-transform: uppercase;

  letter-spacing: 0.1em;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

button {
  padding: 6px 12px;

  border: none;

  cursor: pointer;

  border-radius: 4px;

  font-size: 14px;
}

.edit-btn {
  background-color: #4caf50;

  color: white;

  margin-right: 5px;
}

.edit-btn:hover {
  background-color: #45a049;
}

.delete-btn {
  background-color: #f44336;

  color: white;
}

.delete-btn:hover {
  background-color: #d32f2f;
}

@media (max-width: 600px) {
  th,
  td {
    padding: 8px 10px;
  }

  .action-buttons {
    display: flex;

    flex-direction: column;

    align-items: stretch;
  }

  .action-buttons button {
    margin: 5px 0;
  }
}
</style>

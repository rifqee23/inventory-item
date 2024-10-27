<script setup>
import { ref } from "vue";
const transactions = ref([
  {
    id: 1,
    namaKaryawan: "John Doe",
    namaBarang: "Laptop 15 inch",
    jumlahPinjam: 2,
    tanggalPinjam: "2022-01-01",
    tanggalKembali: "2022-01-02",
    status: "Dipinjam",
  },
  {
    id: 2,
    namaKaryawan: "Jane Doe",
    namaBarang: "Mouse Logitech",
    jumlahPinjam: 1,
    tanggalPinjam: "2022-01-02",
    tanggalKembali: "2022-01-03",
    status: "Dipinjam",
  },
]);

const emit = defineEmits([
  "add-transaction",
  "edit-transaction",
  "delete-transaction",
]);

const deleteTransaction = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );
  emit("delete-transaction", id);
};
</script>
<template>
  <div class="transaction-list">
    <div class="header">
      <h2>Daftar Transaksi</h2>
      <button class="add-btn" @click="$emit('add-transaction')">
        Tambah Transaksi
      </button>
    </div>

    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Karyawan</th>
            <th>Nama Barang</th>
            <th>Jumlah Pinjam</th>
            <th>Tanggal Pinjam</th>
            <th>Tanggal Kembali</th>
            <th>Status</th>
            <th class="action-column">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{ transaction.id }}</td>
            <td>{{ transaction.namaKaryawan }}</td>
            <td>{{ transaction.namaBarang }}</td>
            <td>{{ transaction.jumlahPinjam }}</td>
            <td>{{ transaction.tanggalPinjam }}</td>
            <td>{{ transaction.tanggalKembali }}</td>
            <td>{{ transaction.status }}</td>
            <td>
              <button
                class="edit-btn"
                @click="$emit('edit-transaction', transaction)"
              >
                Edit
              </button>

              <button
                class="edit-btn"
                @click="deleteTransaction(transaction.id)"
              >
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.transaction-list {
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

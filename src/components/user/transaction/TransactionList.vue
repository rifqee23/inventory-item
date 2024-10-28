<script setup>
import { ref } from "vue";

const transactions = ref([
  {
    id: "2024001",

    namaUser: "John Doe",

    namaBarang: "Acer Nitro 15 AN515-58",

    jumlahPinjam: 1,

    tanggalPinjam: "2022-10-10",

    tanggalPengembalian: "2022-10-17",

    status: "Borrowed",
  },

  {
    id: "2024002",

    namaUser: "Jane Smith",

    namaBarang: "Lenovo LOQ 15 15IRH8",

    jumlahPinjam: 1,

    tanggalPinjam: "2022-10-10",

    tanggalPengembalian: "2022-10-17",

    status: "Borrowed",
  },
]);

const showForm = ref(false);
const selectedTransaction = ref(null);

const openReturnForm = (transaction) => {
  selectedTransaction.value = transaction;
  showForm.value = true;
};

const handleReturn = (updatedTransaction) => {
  const index = transactions.value.findIndex(
    (t) => t.id === updatedTransaction.id
  );
  if (index !== -1) {
    transactions.value[index] = {
      ...updatedTransaction,
      status: "Returned",
    };
  }
  cancelReturnForm();
};

const cancelReturnForm = () => {
  showForm.value = false;
  selectedTransaction.value;
};
</script>

<template>
  <div class="transaction-list">
    <div class="table-responsive">
      <table>
        >
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama User</th>
            <th>Nama Barang</th>
            <th>Jumlah Pinjam</th>
            <th>Tanggal Pinjam</th>
            <th>Tanggal Pengembalian</th>
            <th>Status</th>
            <th class="action-column">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{ transaction.id }}</td>
            <td>{{ transaction.namaUser }}</td>
            <td>{{ transaction.namaBarang }}</td>
            <td>{{ transaction.jumlahPinjam }}</td>
            <td>{{ transaction.tanggalPinjam }}</td>
            <td>{{ transaction.tanggalPengembalian }}</td>
            <td>{{ transaction.status }}</td>
            <td class="action-buttons">
              <button
                class="return-btn"
                @click="$emit('return-item', transaction)"
              >
                Kembalikan
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

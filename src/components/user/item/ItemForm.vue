<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  isEdit: {
    type: Boolean,
    default: false,
  },
});

const form = ref({
  kode: props.item ? props.item.kode : "",

  nama: props.item ? props.item.nama : "",

  deskripsi: props.item ? props.item.deskripsi : "",

  tanggal_pinjam: "",

  tanggal_kembali: "",

  jumlah_pinjam: 1,
});

watch(
  () => props.item,
  (newItem) => {
    if (newItem) {
      form.value.kode = newItem.kode;
      form.value.nama = newItem.nama;
      form.value.deskripsi = newItem.deskripsi;
    }
  },
  { immediate: true }
);

const emit = defineEmits(["submit", "cancel"]);

const submitForm = () => {
  emit("submit", form.value);
};

const cancelForm = () => {
  emit("cancel");
};

watch(
  () => props.item,
  (newItem) => {
    if (newItem) {
      form.value.kode = newItem.kode;
      form.value.nama = newItem.nama;
      form.value.deskripsi = newItem.deskripsi;
    }
  }
);
</script>

<template>
  <div>
    <form @submit.prevent="submitForm">
      <h2>Peminjaman Barang</h2>

      <div>
        <label for="kode">Kode Barang:</label>

        <input type="text" v-model="form.kode" id="kode" :disabled="true" />
      </div>

      <div>
        <label for="nama">Nama Produk:</label>

        <input type="text" v-model="form.nama" id="nama" :disabled="true" />
      </div>

      <div>
        <label for="deskripsi">Deskripsi:</label>

        <input
          type="text"
          v-model="form.deskripsi"
          id="deskripsi"
          :disabled="true"
        />
      </div>

      <div>
        <label for="tanggal_pinjam">Tanggal Pinjam:</label>

        <input type="date" v-model="form.tanggal_pinjam" id="tanggal_pinjam" />
      </div>

      <div>
        <label for="tanggal_kembali">Tanggal Kembali:</label>

        <input
          type="date"
          v-model="form.tanggal_kembali"
          id="tanggal_kembali"
        />
      </div>

      <div>
        <label for="jumlah_pinjam">Jumlah Pinjam:</label>

        <input type="number" v-model="form.jumlah_pinjam" id="jumlah_pinjam" />
      </div>

      <div class="button-container">
        <button type="button" @click="cancelForm">Batal</button>

        <button type="submit" @click="submitForm">Ajukan</button>
      </div>
    </form>
  </div>
</template>

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
  kode: "",
  nama: "",
  deskripsi: "",
  stok: "",
});

watch(
  () => props.item,
  (newItem) => {
    if (props.isEdit) form.value = { ...newItem };
    else form.value = { kode: "", nama: "", deskripsi: "", stok: "" };
  },
  { immediate: true }
);

const emit = defineEmits(["submit"]);

const submitForm = () => {
  emit("submit", form.value);
};
</script>

<template>
  <div>
    <form @submit.prevent="submitForm">
      <table>
        <tbody>
          <tr>
            <td>Kode Barang</td>
            <td>
              <input
                type="text"
                v-model="form.kode"
                :disabled="isEdit"
                id="kode"
                required
              />
            </td>
          </tr>
          <tr>
            <td>Nama Barang</td>
            <td>
              <input type="text" v-model="form.nama" id="nama" required />
            </td>
          </tr>
          <tr>
            <td>Deskripsi</td>
            <td>
              <input
                type="text"
                v-model="form.deskripsi"
                id="deskripsi"
                required
              />
            </td>
          </tr>
          <tr>
            <td>Stok</td>
            <td>
              <input type="text" v-model="form.stok" id="stok" required />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">
                {{ isEdit ? "Edit" : "Simpan" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<style scoped>
/* Gaya untuk tabel */

table {
  width: 100%;

  border-collapse: collapse;
}

/* Gaya untuk sel tabel */

td {
  padding: 10px;

  border: 1px solid #ddd;
}

/* Gaya untuk input teks dan number */

input[type="text"],
input[type="number"] {
  width: 100%;

  padding: 8px;

  box-sizing: border-box;
}

/* Gaya untuk tombol submit */

button[type="submit"] {
  background-color: #4caf50;

  color: white;

  padding: 10px;

  border: none;

  border-radius: 5px;

  cursor: pointer;
}

/* Gaya untuk tombol submit saat di-hover */

button[type="submit"]:hover {
  background-color: #45a049;
}
</style>

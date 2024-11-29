<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  user: {
    type: Object,
    default: () => ({}),
  },
  isEdit: {
    type: Boolean,
    default: false,
  },
});

const form = ref({
  id: "",
  username: "",
  email: "",
  role: "",
});

watch(
  () => props.item,
  (newItem) => {
    if (props.isEdit) form.value = { ...newItem };
    else form.value = { id: "", username: "", email: "", role: "" };
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
            <td>ID</td>
            <td>
              <input
                type="text"
                v-model="form.id"
                :disabled="isEdit"
                id="kode"
                required
              />
            </td>
          </tr>
          <tr>
            <td>Username</td>
            <td>
              <input
                type="text"
                v-model="form.username"
                id="username"
                required
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input type="email" v-model="form.email" id="email" required />
            </td>
          </tr>
          <tr>
            <td>Role</td>
            <td>
              <input type="text" v-model="form.role" id="role" required />
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

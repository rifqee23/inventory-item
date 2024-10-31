<script setup>
const name = "ItemCard";
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <div>
      <h3 class="card-title">{{ item.nama }}</h3>
      <div class="card-body">
        <p class="card-text">{{ item.deskripsi }}</p>
        <p class="card-text">Stok: {{ item.stok }}</p>
        <div class="d-flex gap-2">
          <button
            class="btn btn-primary custom-btn"
            @click="$emit('edit-item', item)"
          >
            Edit
          </button>
          <button
            class="btn btn-danger custom-btn"
            @click="$emit('delete-item', item.kode)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-btn {
  transition: transform 0.3s ease;
}

.custom-btn:hover {
  transform: scale(1.1);
}
</style>

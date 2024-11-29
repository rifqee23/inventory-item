<template>
  <div
    class="d-flex justify-content-center align-items-center vh-100 flex-column"
  >
    <p class="mb-3">{{ count }}</p>
    <p class="mb-3">{{ doubleCount }}</p>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-secondary mt-2" @click="reset">Reset</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useCounterStore } from "../stores/counter";

export default {
  setup() {
    const counterStore = useCounterStore();

    const count = computed(() => counterStore.count);
    const doubleCount = computed(() => counterStore.doubleCount); // Mengakses getter doubleCount

    const { increment, reset } = counterStore; // Memanggil fungsi reset dari store

    return {
      count,
      increment,
      reset,
      doubleCount,
    };
  },
};
</script>

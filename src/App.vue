<script setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { RouterView, useRouter } from "vue-router";
import Navbar from "./components/Navbar.vue";
import UserComponent from "./components/user/UserList.vue";
import ItemComponent from "./components/item/ItemList.vue";
import TransactionComponent from "./components/transaction/TransactionList.vue";

const router = useRouter();
const currentPage = ref("user");
const items = ref([]);
const handleNavigation = (page) => {
  currentPage.value = page.toLowerCase();
};

const handleAddItem = (item) => {
  items.value.push(item);
};

const handleEditItem = (updatedItem) => {
  const index = items.value.findIndex((i) => i.kode === updatedItem.kode);
  if (index !== -1) items.value.splice(index, 1, updatedItem);
};

const handleDeleteItem = (itemKode) => {
  items.value = items.value.filter((item) => item.kode !== itemKode);
};
</script>

<template>
  <Navbar @navigate-to="handleNavigation" />
  <div class="main-content">
    <div v-if="currentPage === 'user'">
      <UserComponent />
    </div>
    <div v-if="currentPage === 'item'">
      <ItemComponent
        @add-item="handleAddItem"
        @edit-item="handleEditItem"
        @delete-item="handleDeleteItem"
      />
    </div>
    <div v-if="currentPage === 'transaction'">
      <TransactionComponent />
    </div>
  </div>
  <RouterView />
</template>

<style scoped>
.app-content {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  font: 1em sans-serif;
  height: 100vh;
  margin-top: 60px;
}

.main-content {
  flex-grow: 1;
  transition: margin-left 0.3s ease;
}

.main-content.expanded {
  margin-left: 200px;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
  }
}
</style>

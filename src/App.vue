<script setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { RouterView, useRouter } from "vue-router";
import Navbar from "./components/Navbar.vue";
import UserComponent from "./components/UserList.vue";
import ItemComponent from "./components/ItemList.vue";

const router = useRouter();
const currentPage = ref("user");
const handleNavigation = (page) => {
  currentPage.value = page.toLowerCase();
};
</script>

<template>
  <Navbar @navigate-to="handleNavigation" />
  <div class="main-content">
    <div v-if="currentPage === 'user'">
      <UserComponent />
    </div>
    <div v-if="currentPage === 'item'">
      <ItemComponent />
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

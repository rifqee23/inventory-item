<script setup>
import { ref, computed } from "vue";

import Header from "./components/dashboard/Header.vue";
import Sidebar from "./components/dashboard/Sidebar.vue";
// import { useRouter } from "vue-router";
import UserView from "./views/UserView.vue";
import AdminView from "./views/AdminView.vue";

// instance Data
// untuk membuat state sederhana
const params = new URLSearchParams(window.location.search);
const currentRole = ref(params.get("role") || "admin");
const currentComponent = ref(params.get("component") || "item");
const isSidebarVisible = ref(params.get("sidebar") !== "hidden");

// computed
const currentView = computed(() => {
  return currentRole.value === "admin" ? AdminView : UserView;
});

// methods
const updateRole = (role) => {
  currentRole.value = role;
  navigateTo("item");
};

const navigateTo = (component) => {
  currentComponent.value = component;
  updateURLParams();
};

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
  updateURLParams();
};

const updateURLParams = () => {
  const params = new URLSearchParams();
  params.set("role", currentRole.value);
  params.set("component", currentComponent.value);
  params.set("sidebar", isSidebarVisible.value ? "visible" : "hidden");
  window.history.replaceState({}, "", `?${params.toString()}`);
};

const items = ref([]);

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
  <div id="app">
    <Header
      :currentRole="currentRole"
      @update-role="updateRole"
      @toggle-sidebar="toggleSidebar"
      :isSidebarVisible="isSidebarVisible"
    />

    <div class="app-content">
      <Sidebar
        :currentRole="currentRole"
        :isSidebarVisible="isSidebarVisible"
        @showComponent="navigateTo"
      />

      <div class="main-content" :class="{ expanded: isSidebarVisible }">
        <component
          :is="currentView"
          :currentComponent="currentComponent"
          v-if="currentRole === 'admin'"
          @add-item="handleAddItem"
          @edit-item="handleEditItem"
          @delete-item="handleDeleteItem"
        />

        <component
          :is="currentView"
          v-else
          :currentComponent="currentComponent"
        />
      </div>
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

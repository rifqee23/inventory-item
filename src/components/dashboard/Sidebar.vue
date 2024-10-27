<script setup>
const props = defineProps({
  currentRole: {
    type: String,
    required: true,
  },
  isSidebarVisible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["showComponent"]);

const showComponent = (component) => {
  emit("showComponent", component.toLowerCase());
};
</script>

<template>
  <div :class="['sidebar', { 'd-none': !props.isSidebarVisible }]">
    <a class="logo">Simbok</a>
    <ul>
      <li v-if="props.currentRole === 'admin'">
        <a href="#" @click.prevent="showComponent('user')">
          <i class="fas fa-home"></i> Users
        </a>
      </li>

      <li>
        <a href="#" @click.prevent="showComponent('item')">
          <i class="fas fa-box"></i> Items
        </a>
      </li>

      <li>
        <a href="#" @click.prevent="showComponent('transaction')">
          <i class="fas fa-exchange-alt"></i> Transactions
        </a>
      </li>

      <li v-if="props.currentRole == 'user'">
        <a href="#" @click.prevent="showComponent('history')">
          <i class="fas fa-history"></i> History
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 200px;

  background: #4b3f6b;

  color: white;

  padding: 14px;

  height: 100vh;

  display: flex;

  flex-direction: column;

  position: fixed;

  top: 0;

  left: 0;

  z-index: 999;

  font-size: 18px;

  font-family: sans-serif;

  transition: transform 0.3s ease;
}

.sidebar.hidden {
  transform: translateX(-100%);
}

.logo {
  font-size: 24px;

  margin-bottom: 30px;

  font-weight: bold;

  text-align: center;
}

ul {
  list-style: none;

  padding: 0;

  margin: 0;
}

li {
  margin-bottom: 20px;

  text-align: center;
}

a {
  color: white;

  text-decoration: none;

  cursor: pointer;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 10px 0;

  transition: background-color 0.3s ease;
}

a:hover {
  text-decoration: underline;

  background-color: rgba(255, 255, 255, 0.1);
}

a i {
  margin-right: 8px;
}
</style>

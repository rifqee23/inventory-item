<template>
  <div class="container mt-5">
    <h2 class="text-center">Login</h2>

    <form @submit.prevent="login" class="mt-4">
      <div class="form-group">
        <label for="role">Role:</label>
        <select v-model="role" id="role" class="form-control">
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary btn-block">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      role: "admin",
    };
  },
  methods: {
    login() {
      localStorage.setItem("auth", true);

      localStorage.setItem("role", this.role);

      this.$router.push({ name: this.role, params: { component: "items" } });
    },
  },
};
</script>

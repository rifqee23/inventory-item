<template>
  <div class="transaction-list">
    <div class="header">
      <h2>Daftar Transaksi</h2>
      <button class="add-btn" @click="$emit('add-transaction')">
        Tambah Transaksi
      </button>
    </div>
  </div>
</template>

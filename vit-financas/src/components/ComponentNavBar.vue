<template>
  <div>
    <q-toolbar class="bg-red text-white">
      <q-btn-toggle
        v-model="model"
      />
    </q-toolbar>
  </div>
  <q-toolbar class="bg-green text-white">
    <q-tooblar-title class="col-1flex justify-center">
      <a class="q-mx-xl text-white" href="/">Home</a>
      <a class="q-mx-xl text-white" href="">Contact</a>
      <a class="q-mx-xl text-white" href="">About</a>
    </q-tooblar-title>
  </q-toolbar>
</template>

<script setup lang="ts"></script>
<!-- <style scoped>
  .ny-toolbar {
    position: fixed;
    height: 100%;
  }
</style> -->

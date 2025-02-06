<template>
  <p>Main Page</p>

  <nav>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/login">Go to login</router-link>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script ts lang="ts">
import { RouterView } from "vue-router";
</script>

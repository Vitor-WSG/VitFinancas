<template>
  <div
    class="bg-green-1 q-pa-xl flex column items-center"
    style="width: 100%; height: 100vh"
  >
    <section class="text-center">
      <h4>Welcome</h4>
      <h1>VitFinances</h1>
      <h5>The best way to get control your finances</h5>
    </section>

    <div class="q-gutter-lg q-mt-xl">
      <q-btn
        label="Sing In"
        unelevated
        rounded
        color="green"
        size="lg"
        @click="goToLogin"
      />
      <q-btn
        label="Sing Up"
        outline
        rounded
        color="green"
        size="lg"
        @click="goToCadastro"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goToLogin() {
  router.push({ path: "login" });
}
function goToCadastro() {
  router.push({ path: "cadastro" });
  
}
</script>

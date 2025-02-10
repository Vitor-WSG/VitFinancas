<template>
  <div class="bg-green-1">
    <section>
      <div class="col-12 flex justify-center">
        <h4 style="margin-bottom: 0">Welcome</h4>
      </div>

      <div class="col-12 flex justify-center">
        <h1 style="margin-bottom: 0">VitFinances</h1>
      </div>

      <div class="col-12 flex justify-center">
        <h5 style="margin-top: 0">The best way to get control your finances</h5>
      </div>
    </section>

    <div class="col-12 flex justify-center q-gutter-lg q-mt-xl">
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
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRouter();

function goToLogin() {
  router.push({ path: "login" });
}
function goToCadastro() {
  router.push({ path: "cadastro" });
}
</script>

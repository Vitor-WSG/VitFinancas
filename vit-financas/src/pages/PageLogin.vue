<template>
  <div class="q-pa-xl row justify-center">
    <q-card class="bg-green-1 q-gutter-md">
      <q-card-section>
        <div class="text-h6">Login</div>
        <div class="text-subtitle2">Informe seus dados de login</div>
      </q-card-section>

      <q-form @submit="onSubmit" @reset="onReset">
        <q-card-section>
          <q-input
            label="Usuário"
            rounded
            standout
            v-model="store_login.user"
            v-bind="store_login.userAlt"
            :error="!!store_login.errors.user"
            :error-message="store_login.errors.user"
          />

          <q-input
            label="Senha"
            rounded
            standout
            v-model="store_login.password"
            v-bind="store_login.passwordAlt"
            :error="!!store_login.errors.password"
            :error-message="store_login.errors.password"
          />
        </q-card-section>

        <q-separator dark-1 />

        <q-card-section>
          <q-btn label="Submit" type="submit" color="primary" push glossy />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </q-card-section>
      </q-form>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { LoginStore } from "../stores/login.store";
import "../styles/style-login.css";

const store_login = reactive(LoginStore());

function onSubmit() {
  console.log("submit");
}

function onReset() {
  console.log("reset");
}
</script>

<style scooped>
.my-card {
  width: 100%;
}
</style>

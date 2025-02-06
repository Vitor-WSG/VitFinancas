<template>
  <div class="q-pa-xl bg-purple">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
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

      <div>
        <q-btn label="Submit" type="submit" color="primary" push glossy />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
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

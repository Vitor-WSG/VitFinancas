<template>
  <div
    class="bg-green-1 q-pa-xl column items-center"
    style="width: 100%; height: 100vh"
  >
    <q-card class="q-gutter-lg" style="min-width: 30%">
      <q-card-section>
        <div class="text-h6">Login</div>
        <div class="text-subtitle2">Enter your login details</div>
      </q-card-section>

      <q-form @submit="onSubmit" @reset="onReset">
        <q-card-section>
          <q-input
            label="User"
            outlined
            color="green"
            rounded
            standout
            v-model="store_login.user"
            v-bind="store_login.userAlt"
            :error="!!store_login.errors.user"
            :error-message="store_login.errors.user"
          />

          <q-input
            label="Password"
            outlined
            color="green"
            rounded
            standout
            v-model="store_login.password"
            v-bind="store_login.passwordAlt"
            :error="!!store_login.errors.password"
            :error-message="store_login.errors.password"
          />
        </q-card-section>

        <q-separator dark-1 />
        <q-card-section class="q-mt-xl flex justify-center">
          <q-btn label="Submit" type="submit" color="green" push glossy />
          <q-btn
            label="Cancel"
            type="reset"
            color="green"
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
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/useAuthStore";
import "../styles/style-login.css";

const authStore = useAuthStore();
const store_login = reactive(LoginStore());
const router = useRouter();

function onSubmit() {
  store_login.onSubmit();
  authStore.login(store_login.user, store_login.password);
}

function onReset() {
  router.back();
  store_login.resetForm();
}
</script>

<style scooped>
.my-card {
  width: 100%;
}
</style>

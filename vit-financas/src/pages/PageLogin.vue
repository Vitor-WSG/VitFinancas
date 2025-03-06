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
        <q-card-section class="q-gutter-md">
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

  <q-dialog v-model="singinAlert">
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="warning" color="green" text-color="white" />
        <span class="q-ml-sm"
          >User not found, please check your credentials or register.</span
        >
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          label="Sing Up"
          unelevated
          rounded
          color="green"
          @click="goToCadastro"
        />
        <q-btn label="Cancel" outline rounded color="green" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { LoginStore } from "../stores/login.store";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/useAuthStore";
import "../styles/style-login.css";

const authStore = useAuthStore();
const store_login = reactive(LoginStore());
const router = useRouter();
const singinAlert = ref<boolean>(false);

async function onSubmit() {
  store_login.onSubmit();
  const isAutenticate = await authStore.login(
    store_login.user,
    store_login.password
  );
  if (isAutenticate) {
    router.push("/dashboard");
  } else {
    singinAlert.value = true;
  }
}

function onReset() {
  router.back();
  store_login.resetForm();
}

function goToCadastro() {
  router.push({ path: "cadastro" });
}
</script>

<style scooped>
.my-card {
  width: 100%;
}
</style>

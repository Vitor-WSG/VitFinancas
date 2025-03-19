<template>
  <div
    class="bg-green-1 q-pa-xl column items-center"
    style="width: 100%; height: 100vh"
  >
    <q-card class="q-gutter-lg" style="min-width: 30%">
      <q-card-section>
        <div class="text-h6">Register</div>
        <div class="text-subtitle2">Register your user</div>
      </q-card-section>

      <q-form @submit="onSubmit" @reset="onReset">
        <q-card-section class="q-gutter-md">
          <q-input
            label="* Name"
            outlined
            color="green"
            rounded
            standout
            v-model="store_login_register.name"
            v-bind="store_login_register.nameAlt"
            :error="!!store_login_register.errors.name"
            :error-message="store_login_register.errors.name"
          />

          <q-input
            label="* Last name"
            outlined
            color="green"
            rounded
            standout
            v-model="store_login_register.lastName"
            v-bind="store_login_register.lastNameAlt"
            :error="!!store_login_register.errors.lastName"
            :error-message="store_login_register.errors.lastName"
          />

          <q-input
            type="password"
            label="* Password"
            outlined
            color="green"
            rounded
            standout
            v-model="store_login_register.passwordRegister"
            v-bind="store_login_register.passwordRegisterAlt"
            :error="!!store_login_register.errors.passwordRegister"
            :error-message="store_login_register.errors.passwordRegister"
          />
        </q-card-section>

        <q-separator dark-1 />
        <q-card-section class="q-mt-xl flex justify-center">
          <q-btn label="Create" type="submit" color="green" push glossy />
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
import { RegisterLoginStore } from "../stores/register.store";
import "../styles/style-login.css";
import { useRouter } from "vue-router";

const store_login_register = reactive(RegisterLoginStore());
const router = reactive(useRouter());

function onSubmit() {
  store_login_register.onSubmit();
}

function onReset() {
  router.back();
  store_login_register.resetForm();
}
</script>

<style scooped>
.my-card {
  width: 100%;
}
</style>

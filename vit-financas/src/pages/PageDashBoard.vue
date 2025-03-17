<template>
  <h2>Seja bem Vindo Usuário</h2>
  <div class="row q-ma-xl flex justify-around">
    <q-btn
      :ripple="{ color: 'green' }"
      :label="allValues"
      outline
      rounded
      color="green"
      @click="valuesShow"
    />
  </div>
  <div class="row q-gutter-xl flex justify-around">
    <q-card class="bg-teal text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Current Balance</div>
      </q-card-section>

      <q-card-section class="q-pt-none bg-teal-1 text-teal q-py-md row">
        <div v-if="showValues" class="text-h6 col-10">R$ 1.000,00</div>
        <div v-else="!showValues" class="text-h6 col-10">******</div>
        <div class="col-2">
          <q-btn round flat icon="camera_enhance" @click="valuesShow" />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="bg-green text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Revenues</div>
      </q-card-section>

      <q-card-section class="q-pt-none bg-green-1 text-green q-py-md row">
        <div v-if="showValues" class="text-h6 col-10">R$ 1.000,00</div>
        <div v-else="!showValues" class="text-h6 col-10">******</div>
        <div class="col-2">
          <q-btn round flat icon="camera_enhance" @click="valuesShow" />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="bg-red-14 text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Expenses</div>
      </q-card-section>

      <q-card-section class="q-pt-none bg-red-1 text-red-14 q-py-md row">
        <div v-if="showValues" class="text-h6 col-10">R$ 1.000,00</div>
        <div v-else="!showValues" class="text-h6 col-10">******</div>
        <div class="col-2">
          <q-btn round flat icon="camera_enhance" @click="valuesShow" />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="bg-purple-7 text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Credit Card</div>
      </q-card-section>

      <q-card-section class="q-pt-none bg-purple-1 text-purple-7 q-py-md row">
        <div v-if="showValues" class="text-h6 col-10">R$ 1.000,00</div>
        <div v-else="!showValues" class="text-h6 col-10">******</div>
        <div class="col-2">
          <q-btn round flat icon="camera_enhance" />
        </div>
      </q-card-section>
    </q-card>
  </div>
  <ChartComponent />
</template>

<script setup lang="ts">
import { ref } from "vue";
import ChartComponent from "../components/ChartComponent.vue";

let showValues = ref(false);
let allValues = ref<string>("SHOW ALL VALUES");

function valuesShow() {
  showValues.value = !showValues.value;
  allValues.value = showValues.value ? "HIDE ALL VALUES" : "SHOW ALL VALUES";
}
</script>

<!-- <template>
  <h2>Dashboard de Vendas</h2>
  <ChartComponent />
</template>

<script>
import { defineComponent } from "vue";
import ChartComponent from "../components/ChartComponent.vue";

export default defineComponent({
  components: { ChartComponent },
});
</script> -->

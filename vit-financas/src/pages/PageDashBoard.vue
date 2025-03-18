<template>
  <!-- <h2>Seja bem Vindo Usuário</h2> -->
  <div class="row flex justify-center q-ma-xl">
    <div class="col-2">
      <q-select
        item-aligned
        label-color="green"
        color="green"
        standard
        v-model="current_month"
        :options="option_months"
        label="Current Month"
      />
    </div>
    <div class="col-4 flex justify-center">
      <q-btn
        class="self-start"
        :ripple="{ color: 'green' }"
        :label="allValues"
        outline
        rounded
        color="green"
        @click="valuesShow"
      />
    </div>
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
        <div class="text-h6">Revenues {{ current_month }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none bg-green-1 text-green q-py-md row">
        <div v-if="showValues" class="text-h6 col-10">R$ 1.000,00</div>
        <div v-else="!showValues" class="text-h6 col-10">******</div>
        <div class="col-2">
          <q-btn round flat icon="camera_enhance" @click="valuesShow" />
        </div>
      </q-card-section>
      <div class="q-ma-md flex justify-center">
        <q-btn
          label="Add Revenue"
          outline
          rounded
          icon="add"
          @click="ShowAddValues('revenues', 'green')"
        />
      </div>
    </q-card>

    <q-card class="bg-red-14 text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Expenses {{ current_month }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none bg-red-1 text-red-14 q-py-md row">
        <div v-if="showValues" class="text-h6 col-10">R$ 1.000,00</div>
        <div v-else="!showValues" class="text-h6 col-10">******</div>
        <div class="col-2">
          <q-btn round flat icon="camera_enhance" @click="valuesShow" />
        </div>
      </q-card-section>
      <div class="q-ma-md flex justify-center">
        <q-btn label="Add Expense" outline rounded icon="add" />
      </div>
    </q-card>

    <q-card class="bg-purple-7 text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Credit Card {{ current_month }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none bg-purple-1 text-purple-7 q-py-md row">
        <div v-if="showValues" class="text-h6 col-10">R$ 1.000,00</div>
        <div v-else="!showValues" class="text-h6 col-10">******</div>
        <div class="col-2">
          <q-btn round flat icon="camera_enhance" />
        </div>
      </q-card-section>
      <div class="q-ma-md flex justify-center">
        <q-btn label="Add Credi Card" outline rounded icon="add" />
      </div>
    </q-card>
  </div>
  <ChartComponent class="q-mt-xl" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import ChartComponent from "../components/ChartComponent.vue";
import AddCountsComponent from "../components/AddCountsComponent.vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const title_release = ref("");
const color_release = ref("");

$q.dialog({
  component: AddCountsComponent,

  componentProps: {
    release_title: title_release.value,
    release_color: color_release.value,
  },
})
  .onOk(() => {
    console.log("clicou aqui");
  })
  .onCancel(() => {
    console.log("Cancel");
  })
  .onDismiss(() => {
    console.log("Called on OK or Cancel");
  });

const option_months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const current_month = ref(null);
let showValues = ref(false);
let allValues = ref<string>("SHOW ALL VALUES");

function ShowAddValues(title: any, color: any) {
  (title_release.value = title), (color_release.value = color);
}

function valuesShow() {
  showValues.value = !showValues.value;
  allValues.value = showValues.value ? "HIDE ALL VALUES" : "SHOW ALL VALUES";
}
</script>

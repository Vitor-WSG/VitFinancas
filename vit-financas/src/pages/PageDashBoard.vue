<template>
  <!-- <h2>Seja bem Vindo Usuário</h2> -->
  <div class="row flex justify-center q-ma-xl">
    <div class="col-4">
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
      >
        <q-tooltip
          transition-show="scale"
          transition-hide="scale"
          class="bg-green text-white"
        >
          Click to {{ allValues }}
        </q-tooltip>
      </q-btn>
    </div>
    <div class="col-4 flex justify-center">
      <q-btn
        class="self-start"
        :ripple="{ color: 'green' }"
        :label="valuesChart"
        outline
        rounded
        color="green"
        @click="chartShow"
      >
        <q-tooltip
          transition-show="scale"
          transition-hide="scale"
          class="bg-green text-white"
        >
          Click to {{ valuesChart }}
        </q-tooltip>
      </q-btn>
    </div>
  </div>
  <div class="row q-gutter-xl flex justify-around">
    <q-card
      class="bg-teal text-white"
      style="width: 300px; height: 160px; max-height: 160px"
    >
      <q-card-section>
        <div class="text-h6">Current Balance</div>
      </q-card-section>

      <q-card-section class="bg-teal-1 text-teal q-py-md row">
        <div v-if="showValues" class="text-h6 col-10">R$ 1.000,00</div>
        <div v-else="!showValues" class="text-h6 col-10">******</div>
      </q-card-section>
    </q-card>

    <q-card class="bg-green text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Revenues {{ current_month }}</div>
      </q-card-section>

      <q-card-section class="bg-green-1 text-green q-py-md row">
        <div v-if="showValues" class="text-h6 col-10">R$ 1.000,00</div>
        <div v-else="!showValues" class="text-h6 col-10">******</div>
      </q-card-section>
      <div class="flex justify-center q-gutter-md q-my-md">
        <q-btn
          size="sm"
          label="Add Revenue"
          outline
          glossy
          rounded
          icon="add"
          @click="ShowAddValues('revenues', 'green')"
        />
        <q-btn
          size="sm"
          label="Detail"
          outline
          glossy
          rounded
          icon="add"
          @click="tableShow()"
        />
      </div>
    </q-card>

    <q-card class="bg-red-14 text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Expenses {{ current_month }}</div>
      </q-card-section>

      <q-card-section class="bg-red-1 text-red-14 q-py-md row">
        <div v-if="showValues" class="text-h6 col-10">R$ 1.000,00</div>
        <div v-else="!showValues" class="text-h6 col-10">******</div>
      </q-card-section>

      <div class="flex justify-center q-gutter-md q-my-md">
        <q-btn
          size="sm"
          label="Add Expense"
          outline
          glossy
          rounded
          icon="add"
          @click="ShowAddValues('expense', 'red')"
        />
        <q-btn
          size="sm"
          label="Detail"
          outline
          glossy
          rounded
          icon="add"
          @click="tableShow()"
        />
      </div>
    </q-card>

    <q-card class="bg-purple-7 text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Credit Card {{ current_month }}</div>
      </q-card-section>

      <q-card-section class="bg-purple-1 text-purple-7 q-py-md row">
        <div v-if="showValues" class="text-h6 col-10">R$ 1.000,00</div>
        <div v-else="!showValues" class="text-h6 col-10">******</div>
      </q-card-section>

      <div class="flex justify-center q-gutter-md q-my-md">
        <q-btn
          size="sm"
          label="Add Expense"
          outline
          glossy
          rounded
          icon="add"
          @click="ShowAddValues('expense', 'red')"
        />
        <q-btn
          size="sm"
          label="Detail"
          outline
          glossy
          rounded
          icon="add"
          @click="tableShow()"
        />
      </div>
    </q-card>
  </div>

  <div class="q-ma-md q-mt-xl">
    <q-table
      v-if="showTable"
      separator="cell"
      flat
      bordered
      :title="current_month"
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
    </q-table>
  </div>
  <ChartComponent v-if="showChart" class="q-mt-xl" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import ChartComponent from "../components/ChartComponent.vue";
import AddCountsComponent from "../components/AddCountsComponent.vue";
import { useQuasar } from "quasar";

const columns = ref<Array<object>>([
  {
    name: "name",
    required: true,
    label: "Description",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "values",
    align: "center",
    label: "Values(R$)",
    field: "values",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
  { name: "sodium", label: "Sodium (mg)", field: "sodium" },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "iron",
    label: "Iron (%)",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
]);

const rows = ref<Array<object>>([
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
]);

const showTable = ref<boolean>(false);
const $q = useQuasar();
const title_release = ref<string>("");
const color_release = ref<string>("");

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

const option_months = ref<Array<string>>([
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
]);

const current_month = ref<string>("");
let showValues = ref<boolean>(false);
let allValues = ref<string>("show all values");
let showChart = ref<boolean>(true);
let valuesChart = ref<string>("show chart");

function ShowAddValues(title: string, color: string): void {
  (title_release.value = title), (color_release.value = color);
}

function valuesShow(): void {
  showValues.value = !showValues.value;
  allValues.value = showValues.value ? "hide all values" : "show all values";
}

function chartShow(): void {
  showChart.value = !showChart.value;
  valuesChart.value = showChart.value ? "hide chart" : "show chart";
}

function tableShow(): void {
  showTable.value = !showTable.value;
}
</script>

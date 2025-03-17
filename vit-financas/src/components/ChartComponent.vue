<template>
  <div>
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="chartSeries"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  components: { apexchart: VueApexCharts },
  data() {
    return {
      chartOptions: {
        chart: { id: "vue-chart" },
        xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
        stroke: { curve: "smooth" },
      },
      chartSeries: [{ name: "Vendas", data: [30, 50, 35, 60, 70] }],
    };
  },
});
</script>

<template>
  <div>
    <apexchart
      type="bar"
      height="380"
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
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "July",
            "June",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
        stroke: { curve: "smooth" },
        fill: {
          colors: ["#4cb050", "#d50100", "#8e24aa"],
        },
      },
      chartSeries: [
        {
          name: "Revenues(R$)",
          data: [1400, 1150, 1135, 1160, 1170, 1145, 1166, 1143, 1312, 1145.67, 1189,1000],
        },
        {
          name: "Expenses(R$)",
          data: [1000, 1250, 835, 860, 870, 845, 866, 843, 812, 845.67, 889,800],
        },
        {
          name: "Credit Card(R$)",
          data: [900, 820, 935, 960, 970, 945, 966, 943, 912, 945.67, 989,900],
        },
      ],
    };
  },
});
</script>

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
          colors: ["red", "green", "#9C27B0"],
        },
      },
      chartSeries: [
        {
          name: "Expenses",
          data: [30, 50, 35, 60, 70, 45, 66, 43, 312, 45.67, 89],
        },
        {
          name: "Revenues",
          data: [30, 50, 35, 60, 70, 45, 66, 43, 312, 45.67, 89],
        },
        {
          name: "Credit Card",
          data: [30, 50, 35, 60, 70, 45, 66, 43, 312, 45.67, 89],
        },
      ],
    };
  },
});
</script>

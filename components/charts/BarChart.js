import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ["chartData"],
  data() {
    return {
      options: {
        scales: {
          xAxes: [
            {
              display : false
            }
          ],
          yAxes: [
            {
              display : false
            }
          ]
        },
        responsive: true,
        maintainAspectRatio: false,
        legend : false
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};

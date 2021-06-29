import { Doughnut, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Doughnut,
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
        legend : {
          position : 'left',
          fullSize : false
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};

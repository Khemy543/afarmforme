<template>
  <main>
    <!-- no active farm  -->
    <div
      class=" w-full mt-48 flex justify-center items-center text-center"
      v-if="false"
    >
      <div>
        <p>You don’t have any active farms.</p>
        <nuxt-link class=" text-primary" to="/">Purchase a farm</nuxt-link>
      </div>
    </div>
    <!-- end no active farms -->

    <!-- main content -->

    <div class="w-full">
      <div class=" flex justify-between">
        <h4 class=" gray-heading mb-5">Active farms</h4>
        <div>
          <button class="light-green-button px-4 py-3" @click="scrollCarousel('left')">
            <i class="fa fa-chevron-left" />
          </button>
          <button class="light-green-button px-4 py-3" @click="scrollCarousel('right')">
            <i class="fa fa-chevron-right" />
          </button>
        </div>
      </div>
      <div class=" flex h-30 lg:h-54 w-full overflow-y-hidden overflow-x-scroll slick-carousel" ref="slick-carousel" >
        <div class=" bg-primary w-52 rounded-xl mr-3 text-center p-4 flex-shrink-0">
          <h4 class="text-white">New Farm</h4>
          <p class=" text-white">
            Choose the option that best meets your investment needs.
          </p>
          <button class=" dash-button mt-3">Purchase farm</button>
        </div>
        <FarmTile class="mr-3" v-for="n in 3" :key="n" />
      </div>

      <div class="small-padding">
        <h4 class="gray-heading mb-5">Statitics</h4>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div class=" bg-white px-5 py-6 rounded-xl">
            <h5>Fertiliser Application</h5>
            <div class="chart-wrapper">
              <Doughnut :chartData="pie_chartdata" :style="myStyles" />
            </div>
          </div>
          <div class=" bg-white px-5 py-6 rounded-xl">
            <h5>Rain Pattern</h5>
            <div class="chart-wrapper">
              <BarChart :chartData="bar_chartdata" :styles="myStyles" />
            </div>
          </div>
        </div>
      </div>

      <div class=" small-padding">
        <h4 class="gray-heading mb-5">Farm history</h4>
        <div class=" bg-white px-5 py-6 rounded-xl shadow-lg overflow-x-auto">
          <table>
            <thead class="table-head">
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Quantity</th>
                <th>ROI</th>
                <th>Duration</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pepper farm</td>
                <td>Kpetoe V/R</td>
                <td>13 plots</td>
                <td>80%</td>
                <td>3 months</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Pepper farm</td>
                <td>Kpetoe V/R</td>
                <td>13 plots</td>
                <td>80%</td>
                <td>3 months</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Pepper farm</td>
                <td>Kpetoe V/R</td>
                <td>13 plots</td>
                <td>80%</td>
                <td>3 months</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  layout: "dashboard",
  components: {
    FarmTile: () => import("~/components/dashboard/farmTile.vue"),
    Doughnut: () => import("~/components/charts/Doughnut.js"),
    BarChart: () => import("~/components/charts/BarChart.js")
  },
  data() {
    return {
      pie_chartdata: {
        labels: ["Foo", "Bar", "Baz"],
        datasets: [
          {
            backgroundColor: ["#f36e60", "#ffdb3b", "#185190"],
            hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"],
            data: [10, 20, 40]
          }
        ]
      },

      bar_chartdata: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            backgroundColor: "#de98ab",
            borderColor: "#0c0306",
            data: [1, 3, 5, 7, 2, 4, 6],
            label: "Bar"
          },
          {
            backgroundColor: "#98ddde",
            borderColor: "#030c0c",
            data: [1, 5, 2, 6, 3, 7, 4],
            label: "Baz"
          }
        ]
      }
    };
  },
  computed: {
    myStyles() {
      return {
        height: `250px`,
        position: "relative"
      };
    }
  },
  mounted(){
    /* let slick_carousel = this.$refs['slick-carousel'];
    slick_carousel.addEventListener('scroll', this.handleScroll()) */
  },
  methods : {
    scrollCarousel(direction){
      this.$refs['slick-carousel'].scrollBy({
        ...(direction === 'left' ? { left : -300 } : { left : 300 } ),
        top : 0,
        behavior: 'smooth'
    });
    }
  }
};
</script>
<style scoped>
h5 {
  font: normal normal bold 20px/23px Proxima Nova;
  letter-spacing: 0px;
  color: #767676;
  opacity: 1;
}
.slick-carousel::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.slick-carousel {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>

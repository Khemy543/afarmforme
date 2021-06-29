<template>
    <main>
        <!-- no active farm  -->
        <div class=" w-full mt-48 flex justify-center items-center text-center" v-if="false">
            <div>
                <p>You don’t have any active farms.</p>
                <nuxt-link class=" text-primary" to="/">Purchase a farm</nuxt-link>
            </div>
        </div>
        <!-- end no active farms -->

        <!-- main content -->

        <div>
            <h4 class=" gray-heading">Active farms</h4>
            <div class=" flex h-52">
                <div class=" bg-primary w-52 rounded-xl mr-3 text-center p-4">
                    <h4 class="text-white">New Farm</h4>
                    <p class=" text-white">Choose the option that best meets your investment needs.</p>
                    <button class=" dash-button mt-3">Purchase farm</button>
                </div><!-- 
                <ProductTile /> -->
            </div>
            
            <div class="small-padding">
                <h4 class="gray-heading">Statitics</h4>
                <div class="grid grid-cols-2 gap-5">
                    <div class=" bg-white px-5 py-6 rounded-xl">
                        <h5>Fertiliser Application</h5>
                        <div class="chart-wrapper">
                            <PieChart :chartdata="chartdata" :options="options" />
                        </div>
                    </div>
                    <div class=" bg-white px-5 py-6 rounded-xl">
                         <h5>Rain Pattern</h5>
                        <div class="chart-wrapper">
                            <BarChart :chartdata="chartdata" :options="options" />
                        </div>
                    </div>
                </div>
            </div>

            <div class=" small-padding">
                <h4 class="gray-heading">Farm history</h4>
                <div class=" bg-white px-5 py-6 rounded-xl">
                    <table>
                        <tr class="table-head">
                            <th>Name</th>
                            <th>Location</th>
                            <th>Quantity</th>
                            <th>ROI</th>
                            <th>Duration</th>
                            <th>Status</th>
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
                        <tr>
                            <td>Pepper farm</td>
                            <td>Kpetoe V/R</td>
                            <td>13 plots</td>
                            <td>80%</td>
                            <td>3 months</td>
                            <td>Active</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    layout : 'dashboard',
    components : {
        FarmTile : () => import('~/components/dashboard/farmTile.vue'),
        PieChart : () => import('~/components/charts/PieChart.js'),
        BarChart : () => import('~/components/charts/BarChart.js')
    },
    data(){
        return{
            chartdata: {
            labels: ['January', 'February'],
            datasets: [
                {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [40, 20]
                }
            ]
            },
            options: {
            responsive: true,
            maintainAspectRatio: false
            }
        }
    }
}
</script>
<style scoped>
.gray-heading { 
    color: #767676;
}

h5 {
    font: normal normal bold 20px/23px Proxima Nova;
    letter-spacing: 0px;
    color: #767676;
    opacity: 1;
}
</style>
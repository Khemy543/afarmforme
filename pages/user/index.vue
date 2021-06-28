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
            <h4>Active farms</h4>
            <div class=" flex h-52">
                <div class=" bg-primary w-52 rounded-xl mr-3 text-center p-4">
                    <h4 class="text-white">New Farm</h4>
                    <p class=" text-white">Choose the option that best meets your investment needs.</p>
                    <button class=" dash-button mt-3">Purchase farm</button>
                </div><!-- 
                <ProductTile /> -->
            </div>
            
            <div class="grid grid-cols-2 gap-5 small-padding">
                <div class=" bg-white px-5 py-6 flex rounded-xl">
                    <div>
                        <b>Fertiliser Application</b>
                        <ul class=" mt-10">
                            <li>Phosphorus</li>
                            <li>Amide nitrogen</li>
                            <li>Nitrate nitrogen</li>
                        </ul>
                    </div>
                    <div class=" ">
                        <PieChart :chartdata="chartdata" :options="options" />
                    </div>
                </div>
                <div>

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
        PieChart : () => import('~/components/charts/PieChart.js')
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
</style>
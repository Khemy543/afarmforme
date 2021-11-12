<template>
    <div class=" w-full">
        <div class=" max-w-4xl mx-auto px-4 pt-48">
            <div class=" text-xl font-bold text-center">How It Works.</div>

            <div class=" mt-6 text-center text-xs tracking-normal">Farming made easy for you.</div>
            
            <div class=" mt-60 rounded-2xl bg-teal-900 w-full px-8 lg:px-32 py-10 text-white">
                <div class=" text-base font-bold text-center">Sign Up</div>

                <div class=" text-center text-xs tracking-normal mt-5">Get set up to sponsor a farm unit by providing us with required information. This will help us furnish you with your login details, which will grant you access to our platform.</div>
                <div class=" mt-7 flex justify-center w-full">
                    <button class=" app-button rounded-lg bg-primary hover:bg-opacity-70 text-white">Get Started Now</button>
                </div>

                <div class=" bg-gray-700 rounded-t-2xl h-52 w-full mt-14 -mb-10">

                </div>
            </div>
            
            <div class=" lg:flex lg:space-x-10 space-y-5 lg:space-y-0 items-center mt-32 w-full">
                <div class=" w-full lg:w-1/3">
                    <div class=" text-base font-bold">Crop Selection</div>
                    <p class=" mt-4 text-xs font-normal">After a successful signing up, select your preferred choice of crop subject to availability and number of units you wish to sponsor.</p>
                </div>
                <div class=" bg-gray-600 h-72 rounded-xl w-full lg:w-2/3 relative overflow-hidden">
                    <div class=" bg-gray-700 w-11/12 h-4/6 absolute bottom-0 right-0 rounded-tl-xl border-t-2 border-l-2 border-gray-400">

                    </div>
                </div>
            </div>

            <div class=" lg:flex lg:space-x-10 items-center mt-20 w-full space-y-5 lg:space-y-0">
                <div class=" bg-gray-600 h-72 rounded-xl w-full lg:w-2/3 flex items-center overflow-hidden">
                    <div class=" bg-gray-700 w-4/6 h-5/6 rounded-r-xl border-r-2 border-t-2 border-b-2 border-gray-400">

                    </div>
                </div>
                <div class="w-full lg:w-1/3">
                    <div class=" text-base font-bold">Payment</div>
                    <p class=" mt-4 text-xs font-normal">Use invoice details to make payment via bank deposits or by using your debit/credit cards directly on our platform and also through mobile money options, with your name and invoice number as reference.</p>
                </div>
            </div>

            <div class=" lg:flex lg:space-x-10 space-y-5 lg:space-y-0 items-center mt-20 w-full">
                <div class="w-full lg:w-1/3">
                    <div class=" text-base font-bold">Monitor</div>
                    <p class=" mt-4 text-xs font-normal">Once payment is confirmed, your dashboard becomes fully functional. You can monitor your farm regularly by way of video feeds, pictures, as well as email updates. You will also be updated on external factors having effect on the agricultural markets such as consumer demand, weather, trade policies.</p>
                </div>
                <div class=" bg-gray-600 h-72 rounded-xl w-full lg:w-2/3 relative overflow-hidden p-10">
                    <div class=" bg-gray-700 bottom-0 w-full h-full right-0 rounded-xl border-2 border-gray-400">

                    </div>
                </div>
            </div>

            <div class=" lg:flex lg:space-x-10 space-y-5 lg:space-y-0 items-center mt-20 w-full">
                <div class=" bg-gray-600 h-72 rounded-xl w-full lg:w-2/3 relative overflow-hidden p-10">
                    <div class=" bg-gray-700 bottom-0 w-full h-full right-0 rounded-xl border-2 border-gray-400">

                    </div>
                </div>
                <div class=" w-full lg:w-1/3">
                    <div class=" text-base font-bold">Receive Your Returns</div>
                    <p class=" mt-4 text-xs font-normal">When your farm asset reaches the end of their production cycle, they are transported and sold to our off-takers and proceeds (thus initial deposit and return on investment) are credited to your preferred account.</p>
                </div>
            </div>
        </div>

        <div class=" max-w-7xl mx-auto px-4 mt-16">
            <div class="bg-teal-500 py-10 px-5 lg:px-16 rounded-xl">
                <div class=" text-base font-bold text-white">Our special features</div>

                <div class=" mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
                    <div v-for="value in features" :key="value.id">
                       <!--  <img :src="value.icon" :alt="value.head"> -->
                        <div class=" text-sm font-bold text-white">{{value.head}}</div>
                        <p class=" text-xs font-normal text-white">{{value.text}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class=" max-w-3xl mx-auto px-4 my-40 lg:flex">
            <div class=" w-full lg:w-1/2">

            </div>
            <div class=" w-full lg:w-1/2">
                <div class=" text-base font-bold tracking-normal">
                    “To safeguard your investments, all of our farms have been insured against natural disasters such as flooding, pests, bush fire and other unforeseen setbacks.”
                </div>
                <div class=" text-xs tracking-normal mt-5">Frances Amoah • Institutional Investor</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components : {
        Label : () => import('~/components/Label.vue')
    },
    data(){
        return{
            features : [
                {
                    id:1,
                    icon:"",
                    head:"Farm Insurance",
                    text:"To safeguard your investments, all of our farms have been insured against natural disasters such as flooding, pests, bush fire and other unforeseen setbacks."
                },
                {
                    id:2,
                    icon:"",
                    head :"Excellent Farm Management Practices",
                    text:"Our farmers and field managers have over 20 years of experience in growing crops and rearing animals. They come from diverse backgrounds and use innovative means to bring out the best produce you can think of."
                },
                {
                    id:3,
                    icon:"",
                    head:"Ready Market",
                    text:"We have on standby ready off-takers who will purchase our farm produce once they are ready for cultivation. We serve as out growers for many producing and manufacturing companies."
                },
                {
                    id:4,
                    icon:"",
                    head:"Mechanised Farming",
                    text:"To increase production and increase efficiency, we employ the use of technology and farm machineries such as tractors, ploughing machines, harvesters etc. on all of our farms."
                },
                {
                    id:5,
                    icon:"/img/how-it-works/dashboard-graph-analytics-report-svgrepo-com.svg",
                    head:"Responsive Dashboard",
                    text:"Our dashboard gives you the opportunity to monitor your farm wherever you find yourself at any point in time. We update our clients weekly by way of drone feeds, text messages, videos, and pictures. Clients are also able to message their assigned customer care personnel’s through the dashboard."
                },
                {
                    id:6,
                    icon:"",
                    head:"IoT Smart Farming",
                    text:"We have installed Internet of things sensors on our farms, which makes it easy to monitor our farms. Thus remote crop and soil monitoring, stats on livestock feeding and produce, drone monitoring, climate monitoring and forecasting, predictive analytics for crops and livestock, smart pest management, smart logistics and warehousing."
                },
                {
                    id:7,
                    icon:"",
                    head:"Sustianable And Eco-Friendly Farming Practices",
                    text:"Because we care about the environments, in which we work in, we involve the use of alternative energy sources such as hydropower, solar panel or wind farms which are eco-friendly. Our farmers decrease the chance of plant and vegetable diseases through crop diversification on the surface of the lands and through crop rotation techniques se also practice agroforestry."
                }
            ]
        }
    }
}
</script>
<style scoped>
</style>
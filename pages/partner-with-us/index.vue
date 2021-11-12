<template>
   <div class=" w-full">
        <div class=" max-w-4xl mx-auto px-4 pt-48">
            <div class=" text-xl font-bold text-center">Partners.</div>

            <div class=" mt-6 text-center text-xs tracking-normal">We believe in global partnerships.</div>

            <div class="my-40 lg:flex">
                <div class=" w-full lg:w-1/2">

                </div>
                <div class=" w-full lg:w-1/2">
                    <div class=" text-base font-bold tracking-normal">
                        “To safeguard your investments, all of our farms have been insured against natural disasters such as flooding, pests, bush fire and other unforeseen setbacks.”
                    </div>
                    <div class=" text-xs tracking-normal mt-5">Frances Amoah • Institutional Investor</div>
                </div>
            </div>

            <div class=" text-xs max-w-xl mt- mx-auto">
                 <b>A Farm For Me</b> is the ideal partner to achieve social impact through agriculture. We therefore pool the strengths of different stakeholders thus Government organizations, private companies, social entrepreneurs, civil societies etc. through our innovative collaboration models.
                <br/> <br/>
                We believe in long-term relationships that bring value to both parties hence we create win-win partnerships that seek to respond effectively to challenges when it comes to the agriculture value chain.
                <br/> <br/>
                We rely on individuals, foundations, organizations and corporate contributions to develop our work in achieving our goals around the word and to further our vision of achieving the sustainable development goals.
                <br/> <br/>
                Here are a few ways you can partner us:
            </div>

            <div class=" lg:flex mt-28 lg:space-x-14 space-y-5 lg:space-y-0">
                <div class="w-full lg:w-5/12">
                    <div class=" text-base font-bold">Supplier</div>
                    <div class=" mt-4">
                        <b>A Farm For Me</b> is the ideal partner to achieve social impact through agriculture. We therefore pool the strengths of different stakeholders thus Government organizations, private companies, social entrepreneurs, civil societies etc. through our innovative collaboration models.
                    </div>
                    <div class=" mt-4">If you can supply us with:</div>
                    <div class=" space-y-2 mt-4"> 
                        <div v-for="n in supplier" :key="n.id">
                            <Checkbox :checked="true" :name="n.text" :id="n.id"/>
                        </div>
                    </div>
                    <button class=" app-button rounded-xl bg-primary hover:bg-opacity-70 text-white mt-4">
                        Join As A Supplier
                    </button>
                </div>
                <div class=" w-full lg:w-7/12 bg-gray-200 rounded-md" style="height:620px;">

                </div>
            </div>
            <div class=" lg:flex mt-28 lg:space-x-14 space-y-5 lg:space-y-0">
                <div class=" w-full lg:w-7/12 bg-gray-200 rounded-md" style="height:620px;">

                </div>
                <div class="w-full lg:w-5/12">
                    <div class=" text-base font-bold">Off-Taker</div>
                    <div class=" mt-4">
                        <b>A Farm For Me</b> is the ideal partner to achieve social impact through agriculture. We therefore pool the strengths of different stakeholders thus Government organizations, private companies, social entrepreneurs, civil societies etc. through our innovative collaboration models.
                    </div>
                    <div class=" mt-4">If you are a/an:</div>
                    <div class=" space-y-2 mt-4"> 
                        <div v-for="n in off_traker" :key="n.id">
                            <Checkbox :checked="true" :name="n.text" :id="n.id"/>
                        </div>
                    </div>
                    <button class=" app-button rounded-xl bg-primary hover:bg-opacity-70 text-white mt-4">
                        Join As An Off-Taker
                    </button>
                </div>
            </div>
            <div class=" lg:flex mt-28 lg:space-x-14 space-y-5 lg:space-y-0">
                <div class="w-full lg:w-5/12">
                    <div class=" text-base font-bold">Individual/Corporate Partner</div>
                    <div class=" mt-4">
                        <b>A Farm For Me</b> is the ideal partner to achieve social impact through agriculture. We therefore pool the strengths of different stakeholders thus Government organizations, private companies, social entrepreneurs, civil societies etc. through our innovative collaboration models.
                    </div>
                    <div class=" mt-4">If you can provide:</div>
                    <div class=" space-y-2 mt-4"> 
                        <div v-for="n in individual" :key="n.id">
                            <Checkbox :checked="true" :name="n.text" :id="n.id"/>
                        </div>
                    </div>
                    <div class=" flex space-x-5 mt-4">
                        <button class=" app-button rounded-xl bg-primary hover:bg-opacity-70 text-white">
                            Join Us
                        </button>
                        <nuxt-link to="/partner-with-us/learn-more" class="app-button bg-white text-black border border-gray-50 hover:border-black rounded-xl">
                            Learn more
                        </nuxt-link>
                    </div>
                </div>
                <div class="w-full lg:w-7/12 bg-gray-200 rounded-md" style="height:620px;">

                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    components:{
        Checkbox : () => import('~/components/Checkbox.vue')
    },
    data(){
        return{
            supplier : [
                {
                    id:1,
                    text:"Agro chemicals"
                },
                {
                    id:2,
                    text:"Seed and seedlings"
                },
                {
                    id:3,
                    text:"Sacks"
                },
                {
                    id:4,
                    text:"Packing boxes"
                }
            ],
            off_traker : [
                {
                    id:1,
                    text:"Hotel"
                },
                {
                    id:2,
                    text:"Restaurant"
                },
                {
                    id:3,
                    text:"Supermarket"
                },
                {
                    id:4,
                    text:"Food processing company"
                },
                {
                    id:5,
                    text:"Schools"
                }
            ],
            individual:[
                {
                    id:1,
                    text:"Farm machinery services"
                },
                {
                    id:2,
                    text:"Transport services"
                },
                {
                    id:3,
                    text:"Agriculture and consultancy training services"
                },
                {
                    id:4,
                    text:"Import / Export services"
                }
            ]
        }
    }
}
</script>

<style>

</style>
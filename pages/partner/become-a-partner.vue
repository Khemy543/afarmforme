<template>
   <div class=" w-full">
        <div class=" max-w-4xl mx-auto px-4 pt-48">
            <div class=" text-lg lg:text-xl font-bold text-center">Partners.</div>

            <div class=" mt-6 text-center text-xs tracking-normal">We believe in global partnerships.</div>

            <div class="my-40 lg:flex items-center">
                <div class=" w-full lg:w-1/2">
                    <img src="~/static/img/partners/hero-logo.png" alt="hero">
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
                        <div class=" flex space-x-3 items-center" v-for="n in supplier" :key="n.id">
                            <!-- <Checkbox :checked="true" :name="n.text" :id="n.id"/> -->
                            <svg xmlns="http://www.w3.org/2000/svg" class=" flex-grow-0 flex-shrink-0" width="20" height="20" viewBox="0 0 20 20">
                                <g id="bullet-icon" transform="translate(-957 -2161)">
                                <rect id="Rectangle_11" data-name="Rectangle 11" width="20" height="20" rx="10" transform="translate(957 2161)" fill="#e8e9fb"/>
                                <path id="Path_1" data-name="Path 1" d="M2052.855,1088.814l2.927,2.5,4.336-5.6" transform="translate(-1090.026 1082.523)" fill="none" stroke="#656ce0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                </g>
                            </svg>
                            <span>{{ n.text }}</span>
                        </div>
                    </div>
                    <button class=" app-button rounded-xl bg-primary hover:bg-opacity-70 text-white mt-4">
                        Join As A Supplier
                    </button>
                </div>
                <img src="~/static/img/partners/supplier.png" alt="partner" class=" w-full lg:w-7/12 rounded-md object-cover object-center" style="height:620px;" >
            </div>
            <div class="flex flex-col-reverse lg:flex-row mt-28 lg:space-x-14 lg:space-y-0">
                <img src="~/static/img/partners/off-taker.png" alt="off-taker" class=" w-full lg:w-7/12 object-center object-cover mt-5 lg:mt-0 rounded-md" style="height:620px;">

                <div class="w-full lg:w-5/12">
                    <div class=" text-base font-bold">Off-Taker</div>
                    <div class=" mt-4">
                        <b>A Farm For Me</b> is the ideal partner to achieve social impact through agriculture. We therefore pool the strengths of different stakeholders thus Government organizations, private companies, social entrepreneurs, civil societies etc. through our innovative collaboration models.
                    </div>
                    <div class=" mt-4">If you are a/an:</div>
                    <div class=" space-y-2 mt-4"> 
                        <div class=" flex space-x-3 items-center" v-for="n in off_traker" :key="n.id">
                            <!-- <Checkbox :checked="true" :name="n.text" :id="n.id"/> -->
                            <svg xmlns="http://www.w3.org/2000/svg" class=" flex-grow-0 flex-shrink-0" width="20" height="20" viewBox="0 0 20 20">
                                <g id="bullet-icon" transform="translate(-957 -2161)">
                                <rect id="Rectangle_11" data-name="Rectangle 11" width="20" height="20" rx="10" transform="translate(957 2161)" fill="#e8e9fb"/>
                                <path id="Path_1" data-name="Path 1" d="M2052.855,1088.814l2.927,2.5,4.336-5.6" transform="translate(-1090.026 1082.523)" fill="none" stroke="#656ce0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                </g>
                            </svg>
                            <span>{{n.text}}</span>
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
                        <div class=" flex items-center space-x-3" v-for="n in individual" :key="n.id">
                            <!-- <Checkbox :checked="true" :name="n.text" :id="n.id"/> -->
                            <svg xmlns="http://www.w3.org/2000/svg" class=" flex-grow-0 flex-shrink-0" width="20" height="20" viewBox="0 0 20 20">
                                <g id="bullet-icon" transform="translate(-957 -2161)">
                                <rect id="Rectangle_11" data-name="Rectangle 11" width="20" height="20" rx="10" transform="translate(957 2161)" fill="#e8e9fb"/>
                                <path id="Path_1" data-name="Path 1" d="M2052.855,1088.814l2.927,2.5,4.336-5.6" transform="translate(-1090.026 1082.523)" fill="none" stroke="#656ce0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                </g>
                            </svg>
                            <span>{{ n.text }}</span>
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
                <img src="~/static/img/partners/individual.png" alt="individual" class="w-full lg:w-7/12 object-cover object-center rounded-md" style="height:620px;">
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
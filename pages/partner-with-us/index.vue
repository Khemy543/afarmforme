<template>
   <div class=" w-full">
        <div class=" max-w-3xl mx-auto px-4 pt-48">
            <div class=" text-xl font-bold text-center">Partners.</div>

            <div class=" mt-6 text-center text-xs tracking-normal">We believe in global partnerships.</div>

            <div class="my-40 flex">
                <div class=" w-1/2">

                </div>
                <div class=" w-1/2">
                    <div class=" text-base font-bold tracking-normal">
                        “To safeguard your investments, all of our farms have been insured against natural disasters such as flooding, pests, bush fire and other unforeseen setbacks.”
                    </div>
                    <div class=" text-xs tracking-normal mt-5">Frances Amoah • Institutional Investor</div>
                </div>
            </div>

            <div class=" text-xs max-w-xl mx-auto">
                 <b>A Farm For Me</b> is the ideal partner to achieve social impact through agriculture. We therefore pool the strengths of different stakeholders thus Government organizations, private companies, social entrepreneurs, civil societies etc. through our innovative collaboration models.
                <br/> <br/>
                We believe in long-term relationships that bring value to both parties hence we create win-win partnerships that seek to respond effectively to challenges when it comes to the agriculture value chain.
                <br/> <br/>
                We rely on individuals, foundations, organizations and corporate contributions to develop our work in achieving our goals around the word and to further our vision of achieving the sustainable development goals.
                <br/> <br/>
                Here are a few ways you can partner us:
            </div>

            <div class=" flex mt-28 space-x-10">
                <div class=" w-5/12">
                    <div class=" text-base font-bold">Supplier</div>
                    <div class=" mt-4">
                        <b>A Farm For Me</b> is the ideal partner to achieve social impact through agriculture. We therefore pool the strengths of different stakeholders thus Government organizations, private companies, social entrepreneurs, civil societies etc. through our innovative collaboration models.
                    </div>
                    <div class=" mt-4">If you can supply us with:</div>
                    <div class=" space-y-2 mt-4"> 
                        <div v-for="n in supplier" :key="n.id">
                            <label :for="n.id">
                                <input type="checkbox" checked :name="n.id" :id="n.id"/>
                                {{ n.text }}
                            </label>
                        </div>
                    </div>
                    <button class=" app-button rounded-xl bg-primary text-white mt-4">
                        Join As A Supplier
                    </button>
                </div>
                <div class=" w-7/12 bg-gray-200 rounded-md h-96">

                </div>
            </div>
            <div class=" flex mt-28 space-x-10">
                <div class=" w-7/12 bg-gray-200 rounded-md h-96">

                </div>
                <div class=" w-5/12">
                    <div class=" text-base font-bold">Off-Taker</div>
                    <div class=" mt-4">
                        <b>A Farm For Me</b> is the ideal partner to achieve social impact through agriculture. We therefore pool the strengths of different stakeholders thus Government organizations, private companies, social entrepreneurs, civil societies etc. through our innovative collaboration models.
                    </div>
                    <div class=" mt-4">If you are a/an:</div>
                    <div class=" space-y-2 mt-4"> 
                        <div v-for="n in off_traker" :key="n.id">
                            <label :for="n.id">
                                <input type="checkbox" checked :name="n.id" :id="n.id"/>
                                {{ n.text }}
                            </label>
                        </div>
                    </div>
                    <button class=" app-button rounded-xl bg-primary text-white mt-4">
                        Join As An Off-Taker
                    </button>
                </div>
            </div>
            <div class=" flex mt-28 space-x-10">
                <div class=" w-5/12">
                    <div class=" text-base font-bold">Individual/Corporate Partner</div>
                    <div class=" mt-4">
                        <b>A Farm For Me</b> is the ideal partner to achieve social impact through agriculture. We therefore pool the strengths of different stakeholders thus Government organizations, private companies, social entrepreneurs, civil societies etc. through our innovative collaboration models.
                    </div>
                    <div class=" mt-4">If you can provide:</div>
                    <div class=" space-y-2 mt-4"> 
                        <div v-for="n in individual" :key="n.id">
                            <label :for="n.id">
                                <input type="checkbox" checked :name="n.id" :id="n.id"/>
                                {{ n.text }}
                            </label>
                        </div>
                    </div>
                    <div class=" flex space-x-5 mt-4">
                        <button class=" app-button rounded-xl bg-primary text-white">
                            Join Us
                        </button>
                        <nuxt-link to="/partner-with-us/learn-more" class="app-button bg-white text-black border border-gray-400 rounded-xl">
                            Learn more
                        </nuxt-link>
                    </div>
                </div>
                <div class=" w-7/12 bg-gray-200 rounded-md h-96">

                </div>
            </div>
        </div>
        <div class=" max-w-6xl mx-auto px-4 mb-40">
            <div class=" my-16 py-11 px-16 flex space-x-0 bg-blue-200 rounded-lg items-center ">
                <div class=" w-1/2 pr-10">
                    <div class="text-lg font-bold text-white">
                    Begin your journey of becoming a Agripreneur.
                    </div>
                </div>
                <div class=" flex space-x-4 w-1/2">
                    <div class="w-1/2">
                    <div class=" text-sm font-bold text-white">Simple Pricing</div>
                    <div class=" mt-4 text-xs font-normal text-white">
                    We know that every cent counts and budgets need to be clear. We will always be upfront with you about what our services will cost.
                    </div>
                    
                    <button class=" app-button bg-white border border-gray-200 rounded-xl mt-6">Start Farming</button>
                </div>

                <div class=" w-1/2">
                    <div class=" text-sm font-bold text-white">Simple Pricing</div>
                    <div class=" mt-4 text-xs font-normal text-white">
                    We know that every cent counts and budgets need to be clear. We will always be upfront with you about what our services will cost.
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
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
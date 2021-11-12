<template>
  <div>
    <div class=" max-w-6xl mx-auto px-4 flex min-h-screen items-center">
        <div class=" w-full flex lg:space-x-32 pt-24">
        <div class=" w-full lg:w-7/12">
            <div class=" text-lg lg:text-xl font-bold">Start Your Own Company By Selling Our Commodities.</div>
            <div class=" text-xs mt-5">
                Have you always wanted to be your own boss, but do not know which venture to go in? Our distributor partnership allows you to sell our high quality agricultural commodities to retailers and make up to 35% profit margins.
                <br/> <br/>
                We are always looking for new partners / distributors who have the ambition to grow and scale their business selling our top quality commodities. Once you join our network of distributors even as a starter, we can transform your company from a small company agency into a grand player.
            </div>
            <div class="flex mt-6 space-x-5 items-center">
                <button class=" app-button rounded-xl bg-primary hover:bg-opacity-70 text-white">
                    Get Started Now
                </button>
                <button
                    class="app-button bg-white text-black border border-gray-50 hover:border-black rounded-xl"
                >
                    Read more
                </button>
            </div>
        </div>
        <div class=" hidden lg:block w-5/12">
            <img src="~/static/img/Home/become-a-partner.png" alt="become a partner" class=" -mb-20 pt-10">
        </div>  
        </div>
    </div>

    <div class=" max-w-3xl mx-auto px-4 mt-60">
        <div class=" text-base font-bold">Why Partner With Us</div>
        <div class="mt-5 text-xs">
            By choosing to collaborate with A FARM FOR ME, you can be reassured that your customers will receive the highest quality goods on time. We guarantee express delivery times for ordered commodities. We offer help at every stage. In addition, you will receive from us tools to support sales and promotion.
            <br/><br/>
            Each cooperation package includes a set of appropriate tools to support sales and promotion. This means that as part of the cooperation, we will help you find clients. All you have to do is to distribute theproducts you have purchased from us.
            <br/><br/>
            Becoming a Distributor for <b>A Farm for Me</b> means you will enjoy the business opportunities that our comprehensive range of products and recognised brand delivers. By joining the A Farm For Me network of distributors, you can benefit from the loyalty of the global strength of our brand name. Also, you gain access to:
        </div>
        <div class="space-y-2 mt-4">
            <div v-for="n in partners" :key="n.id">
                <Checkbox :checked="true" :id="n.id" :name="n.text"/>
            </div>
        </div>

        <div class=" mt-40">
            <div class=" text-base text-center font-bold">Our Commodities You Can Distribute</div>
            <div class=" grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                <div class=" rounded-lg p-5 bg-gray-200 h-44 relative" v-for="n in 8" :key="n">
                    <div class=" absolute bottom-0 text-xs inset-x-0 w-full p-5">White maize</div>
                </div>
            </div>
        </div>

        <div class=" mt-40 max-w-xl mx-auto">
            <div class=" flex space-x-5">
                <button class=" bg-red-500 rounded-2xl px-4 text-white font-bold text-xs">New</button>
                <div class=" text-base text-center font-bold">Our Capital Requirement Calculator</div>
            </div>
            <div class=" text-xs text-center mt-5">
                Take the hassle out of pricing your commodities with our free commodity-pricing calculator. Our trusted pricing formula will help you find a fair price for your commodities and also help you decide which how much you need to start your distribution business.
            </div>

            <div class=" space-y-8 w-full py-10 px-5 lg:px-20 border border-gray-50 rounded-lg mt-5">
                <div class=" w-full">
                    <label class=" text-xs font-normal mb-2" for="package">Package</label>
                    <div>
                        <select name="package" id="package" class=" select-input">
                            <option value="">Select a package</option>
                        </select>
                    </div>
                </div>
                <div class=" w-full">
                    <label class=" text-xs font-normal mb-2" for="comodity">Commodity</label>
                    <div>
                        <select name="comodity" id="comodity" class=" select-input">
                            <option value="">Select a commodity</option>
                        </select>
                    </div>
                </div>
                <div class=" w-full">
                    <label class=" text-xs font-normal mb-2" for="quantity">Quantity(sacks)</label>
                    <div>
                        <select name="quantity" id="quantity" class=" select-input">
                            <option value="">Select a package</option>
                        </select>
                    </div>
                </div>

                <div class=" flex justify-between">
                    <div class=" text-xs font-normal">Price per sack (in GHC)</div>
                    <div class=" text-xs font-bold">32</div>
                </div>
                
                <div class=" flex justify-between">
                    <div class=" text-xs font-normal">Total Price (in GHC)</div>
                    <div class=" text-xs font-bold">4325</div>
                </div>
            </div>
        </div>
    </div>

    <div class=" max-w-7xl mx-auto px-4 mt-32">
        <div class=" text-base text-center font-bold max-w-xl mx-auto">Get Started Now. Select A Package, And We Will Supply!</div>
        <div class=" lg:flex lg:space-x-4 w-full space-y-5 lg:space-y-0 mt-10">
        <div class=" px-5 py-10 w-full lg:w-1/4 rounded-2xl" :class="pack.id % 2 === 0 ? 'bg-white shadow-lg border border-gray-100' : 'bg-gray-100'" v-for="pack in packages" :key="pack.id">
            <div class=" font-bold text-sm">{{pack.title}}</div>

            <div class=" mt-6">
                <ul class=" space-y-2">
                    <li class=" flex space-x-4 items-center" v-for="opt in pack.options" :key="opt.id">
                        <Checkbox :name="opt.name" :id="opt.id" :checked="true" />
                    </li>
                </ul>
            </div>

            <div class=" mt-8 text-xsm font-semibold flex">
                Select package 
                <span class=" flex items-center pl-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="5.6" height="9.699" viewBox="0 0 5.6 9.699">
                    <path id="chevron-right" d="M9,13.578l3.789-3.789L9,6" transform="translate(-7.939 -4.939)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                  </svg>
                </span>
            </div>
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
            partners : [
                {
                    id:1,
                    text:"Innovative and comprehensive product ranges and services, brand recognition and support."
                },
                {
                    id:2,
                    text:"Specific offers that provide value to you and your customers."
                },
                {
                    id:3,
                    text:"A team that is ready and willing to help you with any question and support you might need."
                },
                {
                    id:4,
                    text:"Start-up support and Tools (marketing and sales tools) to develop your capabilities improve your market knowledge and help you accelerate growth."
                },
                {
                    id:5,
                    text:"Start-up support and Tools (marketing and sales tools) to develop your capabilities improve your market knowledge and help you accelerate growth."
                },
                {
                    id:6,
                    text:"High quality produce."
                },
                {
                    id:7,
                    text:"Top quality service."
                }
            ],
            packages : [
                {
                    id:1,
                    title:"Basic",
                    options : [
                        {
                            id:1,
                            name:"100-200 bags of commodity"
                        },
                        {
                            id:2,
                            name:'<b>A Farm For Me</b> branding pack'
                        },
                        {
                            id:3,
                            name:'Dedicated business support manager'
                        },
                        {
                            id:4,
                            name:'Startup support tools'
                        },
                        {
                            id:5,
                            name:"Commodity trading training"
                        },
                        {
                            id:6,
                            name:"20% off transportation charges"
                        }
                    ]
                },
                {
                    id:2,
                    title:"Standard",
                    options : [
                        {
                            id:1,
                            name:"250-350 bags of commodity"
                        },
                        {
                            id:2,
                            name:'<b>A Farm For Me</b> branding pack'
                        },
                        {
                            id:3,
                            name:'Dedicated business support manager'
                        },
                        {
                            id:4,
                            name:'Startup support tools'
                        },
                        {
                            id:5,
                            name:"Commodity trading training"
                        },
                        {
                            id:6,
                            name:"30% off transportation charges"
                        }
                    ]
                },
                {
                    id:3,
                    title:"Super",
                    options:[
                        {
                            id:1,
                            name:"400-500 bags of commodity"
                        },
                        {
                            id:2,
                            name:'<b>A Farm For Me</b> branding pack'
                        },
                        {
                            id:3,
                            name:'Dedicated business support manager'
                        },
                        {
                            id:4,
                            name:'Startup support tools'
                        },
                        {
                            id:5,
                            name:"Commodity trading training"
                        },
                        {
                            id:6,
                            name:"40% off transportation charges"
                        }
                    ]
                },
                {
                    id:4,
                    title:"Ultra",
                    options:[
                        {
                            id:1,
                            name:"250-350 bags of commodity"
                        },
                        {
                            id:2,
                            name:'<b>A Farm For Me</b> branding pack'
                        },
                        {
                            id:3,
                            name:'Dedicated business support manager'
                        },
                        {
                            id:4,
                            name:'Startup support tools'
                        },
                        {
                            id:5,
                            name:"Commodity trading training"
                        },
                        {
                            id:6,
                            name:"50% off transportation charges"
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style>

</style>
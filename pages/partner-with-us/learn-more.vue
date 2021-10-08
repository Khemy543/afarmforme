<template>
  <div>
    <div class=" max-w-6xl mx-auto px-4 flex ">
        <div class=" w-1/2">
            <div class=" text-xl font-bold">Start Your Own Company By Selling Our Commodities.</div>
            <div class=" text-xs mt-5">
                Have you always wanted to be your own boss, but do not know which venture to go in? Our distributor partnership allows you to sell our high quality agricultural commodities to retailers and make up to 35% profit margins.
                <br/> <br/>
                We are always looking for new partners / distributors who have the ambition to grow and scale their business selling our top quality commodities. Once you join our network of distributors even as a starter, we can transform your company from a small company agency into a grand player.
            </div>
            <div class="lg:flex mt-6 space-x-5 items-center">
                <button class=" app-button rounded-xl bg-primary text-white">
                    Get Started Now
                </button>
                <button
                    class="app-button bg-white text-black border border-gray-400 rounded-xl"
                >
                    Read more
                </button>
            </div>
        </div>
        <div class=" w-1/2">

        </div>
    </div>

    <div class=" max-w-3xl mx-auto px-4 mt-40">
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
                <label :for="n.id" class=" font-normal text-xs"> 
                    <input type="checkbox" checked :id="n.id" :name="n.id" class=" mr-2"/>
                        {{ n.text }}
                </label>
            </div>
        </div>

        <div class=" mt-40">
            <div class=" text-base text-center font-bold">Our Commodities You Can Distribute</div>
            <div class=" grid grid-cols-4 gap-5 mt-5">
                <div class=" rounded-lg p-5 bg-gray-200 h-44 relative" v-for="n in 8" :key="n">
                    <div class=" absolute bottom-0 text-xs inset-x-0 w-full p-5">White maize</div>
                </div>
            </div>
        </div>

        <div class=" mt-40 max-w-xl mx-auto">
            <div class=" text-base text-center font-bold">Our Capital Requirement Calculator</div>
            <div class=" text-xs text-center">
                Take the hassle out of pricing your commodities with our free commodity-pricing calculator. Our trusted pricing formula will help you find a fair price for your commodities and also help you decide which how much you need to start your distribution business.
            </div>
        </div>
    </div>

    <div class=" max-w-7xl mx-auto px-4">
        <div class=" text-base text-center font-bold max-w-xl mx-auto">Get Started Now. Select A Package, And We Will Supply!</div>
        <div class=" flex space-x-5 w-full">
        <div class=" px-5 py-10 bg-gray-100 w-1/4 rounded-xl">
            <div class=" font-bold text-sm">Individual Investor</div>

            <div class=" mt-6">
                <ul class=" space-y-1">
                <li class=" flex space-x-4 items-center">
                    <input type="checkbox" name="" id="" checked> <label for="" class="text-xs font-normal"> Purchase of crop/animal farm.</label>
                </li>
                <li class=" flex space-x-4 items-center">
                    <input type="checkbox" name="" id="" checked> <label for="" class="text-xs font-normal"> Minimum of 1 unit.</label>
                </li>
                <li class=" flex space-x-4 items-center">
                    <input type="checkbox" name="" id="" checked> <label for="" class="text-xs font-normal"> Purchase of crop/animal farm.</label>
                </li>
                <li class=" flex space-x-4 items-center">
                    <input type="checkbox" name="" id="" checked> <label for="" class="text-xs font-normal">Minimum of 1 unit</label>
                </li>
                </ul>
            </div>

            <div class=" mt-8 text-sm font-bold">
                Get Started 
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
            ]
        }
    }
}
</script>

<style>

</style>
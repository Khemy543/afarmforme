<template>
    <div class=" w-full max-w-6xl mx-auto px-4 border-t border-gray-300 py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
                <h4 class=" text-xs font-bold">Discover</h4>

                <ul class=" text-gray-400">
                    <li class=" text-xs font-normal py-2">
                        <nuxt-link to="/our-fees">Our fees</nuxt-link>
                    </li>
                    <li class=" text-xs font-normal py-2">
                        Download the app
                    </li>
                    <li class=" text-xs font-normal py-2">
                        Careers
                    </li>
                    <li class=" text-xs font-normal py-2">
                        How it works
                    </li>
                    <li class=" text-xs font-normal py-2">
                        <nuxt-link to='/csr'>Corporate Social Responsibility</nuxt-link>
                    </li>
                </ul>
            </div>
            <div>
                <h4 class=" text-xs font-bold">Learn more</h4>

                <ul class=" text-gray-400">
                    <li class=" text-xs font-normal py-2">
                        Blog
                    </li>
                    <li class=" text-xs font-normal py-2">
                        Our farms
                    </li>
                    <li class=" text-xs font-normal py-2">
                        <nuxt-link to='/faqs'>Frequently Asked Questions</nuxt-link>
                    </li>
                </ul>
            </div>
            <div>
                <h4 class=" text-xs font-bold">Customer helplines</h4>

                <ul class=" text-gray-400">
                    <li class=" text-xs font-normal py-2">
                        +233 0000000
                    </li>
                    <li class=" text-xs font-normal py-2">
                        +233 0000000
                    </li>
                    <li class=" text-xs font-normal py-2">
                        +233 0000000
                    </li>
                </ul>
            </div>
            <div>
                <h4 class=" text-xs font-bold">Get connected</h4>

                <ul class=" text-gray-400">
                    <li class=" text-xs font-normal py-2">
                        Facebook
                    </li>
                    <li class=" text-xs font-normal py-2">
                        Twitter
                    </li>
                    <li class=" text-xs font-normal py-2">
                        Email
                    </li>
                </ul>
            </div>

        </div>
        <div class=" w-full flex justify-center">   
            <div class=" mt-8 py-2 w-full lg:w-1/2 text-center">
                <div class="text-xs font-normal text-gray-300">
                    Past performance is no guarantee of future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance.
                </div> 
            
                <div class=" text-xs font-normal mt-4">© 2020 A farm for me. All rights reserved. If you ate today thank a farmer.</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
</style>
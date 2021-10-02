<template>
    <div>
        <div class=" max-w-6xl mx-auto px-4 pt-48 ">
            <div class=" text-xl font-bold text-center">Our Packages.</div>

            <div class=" w-full flex justify-center">
                
            <div class=" my-10 border rounded-2xl shadow-lg">
                <ul class="list-reset flex p-1">
                    <li class="p-0 mb-0">
                        <div 
                        class="rounded-xl text-sm inline-block px-14 cursor-pointer font-bold" 
                        :class="activeTab == 1 ? 'bg-blue-200 text-white':'bg-white text-black'"
                        id="1"
                        @click="changeTab(1)"
                        >
                            Individual
                        </div>
                    </li>
                    <li class="p-0 mb-0">
                        <div
                            class="text-sm inline-block px-14 rounded-xl cursor-pointer font-bold" 
                            :class="activeTab == 2 ? 'bg-blue-200 text-white':'bg-white text-black'"
                            id="2"
                            @click="changeTab(2)"
                            >Group
                        </div>
                    </li>
                    <li class="p-0 mb-0">
                        <div
                            class="text-sm inline-block px-14 rounded-xl cursor-pointer font-bold" 
                            :class="activeTab == 3 ? 'bg-blue-200 text-white':'bg-white text-black'"
                            id="3"
                            @click="changeTab(3)">
                            Organizations
                        </div>
                    </li>
                </ul>
            </div>


            </div>

            <div class=" w-full">
                <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="shadow overflow-hidden border border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200 table-fixed">
                                    <thead>
                                        <tr class=" divide-x divide-gray-200">
                                            <th scope="col" class="px-6 py-3 w-1/5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            
                                            </th>
                                            <th scope="col" class="px-6 py-3 w-1/5 text-center">
                                                <div class=" text-sm font-bold">Asetena Pa</div>
                                                <p class="text-xxs font-normal tracking-normal text-gray-600">Designed for persons with short-term investment needs.</p>
                                            </th>
                                            <th scope="col" class="px-6 py-3 w-1/5 text-center tracking-wider">
                                             <div class=" text-sm font-bold">Akwantuo</div>
                                                <p class="text-xxs font-normal tracking-normal text-gray-600">For persons living abroad with specific investment needs. We understand the needs to save home for such persons.</p>
                                            </th>
                                            <th scope="col" class="px-6 py-3 w-1/5 text-center tracking-wider">
                                             <div class=" text-sm font-bold">Daakye Asem</div>
                                                <p class="text-xxs font-normal tracking-normal text-gray-600">For children under the age of 18 years. This package gives hope to children and prepare them towards a brighter future.</p>
                                            </th>
                                            <th scope="col" class="px-6 py-3 w-1/5 text-center tracking-wider">
                                             <div class=" text-sm font-bold">Aban Adwumafuo</div>
                                                <p class="text-xxs font-normal tracking-normal text-gray-600">For public and civil servants. This package helps this group of persons build up funds for future needs.</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class=" divide-y divide-gray-200">
                                        <tr class=" divide-x divide-gray-200">
                                            <td class="px-6 py-4 text-left text-xsm  relative">
                                                Minimum Investment
                                            </td>
                                            <td class="px-6 text-xsm text-center py-4 ">
                                                GHS 6,000
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                GHS 10,000
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                GHS 6,000
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                GHS 2,000
                                            </td>
                                        </tr>
                                        <tr class=" divide-x divide-gray-200">
                                            <td class="px-6 py-4 text-left text-xsm  relative">
                                                Units
                                            </td>
                                            <td class="px-6 text-xsm text-center tracking-normal py-4 ">
                                                2 unit of maize <br>farm 2 units of ginger farm <br/>1 unit of piggery
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center tracking-normal ">
                                                4 units of chilli <br/>4 units of maize 3 <br/>units of pineapple <br/>2 units of piggery
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center tracking-normal ">
                                                3 units of chilli <br/>2 units of maize <br/>2 units of piggery
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center tracking-normal ">
                                                2 units of maize <br/>2 units of chilli
                                            </td>
                                        </tr>
                                        <tr class=" divide-x divide-gray-200">
                                            <td class="px-6 py-4 text-left  relative">
                                                Duration Of Cycle
                                            </td>
                                            <td class="px-6 text-xsm text-center py-4 ">
                                                1
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                3
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                1 (Subject to rollover)
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                1
                                            </td>
                                        </tr>
                                        <tr class=" divide-x divide-gray-200">
                                            <td class="px-6 py-4 text-left  relative">
                                               Insurance
                                            </td>
                                            <td class="px-6 text-xsm text-center py-4 ">
                                                Yes
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                Yes
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                Yes
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                Yes
                                            </td>
                                        </tr>
                                        <tr class=" divide-x divide-gray-200">
                                            <td class="px-6 py-4 text-left  relative">
                                                Certificate Of Investment
                                            </td>
                                            <td class="px-6 text-xsm text-center py-4 ">
                                                Yes
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                Yes
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                Yes
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                Yes
                                            </td>
                                        </tr>
                                        <tr class=" divide-x divide-gray-200">
                                            <td class="px-6 py-4 text-left  relative">
                                                Return On Investment
                                            </td>
                                            <td class="px-6 text-xsm text-center py-4 ">
                                                20%
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                25%
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                10%
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                20%
                                            </td>
                                        </tr>
                                        <tr class=" divide-x divide-gray-200">
                                            <td class="px-6 py-4 text-left  relative">
                                                Track Farm Progress Via Web And Mobile App
                                            </td>
                                            <td class="px-6 text-xsm text-center py-4 ">
                                               Yes
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                               Yes
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                Yes
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                Yes
                                            </td>
                                        </tr>
                                        <tr class=" divide-x divide-gray-200">
                                            <td class="px-6 py-4 text-left text-xsm  relative">
                                                Dedicated Relationship Manager
                                            </td>
                                            <td class="px-6 text-xsm text-center py-4 ">
                                                No
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                Yes
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                No
                                            </td>
                                            <td class="px-6 py-4 text-xsm text-center ">
                                                No
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class=" mt-16 rounded-xl flex justify-between px-9 py-11 bg-indigo-500">
                <div class=" text-base font-bold text-white">
                    Ready to get started?
                </div>
                <button class=" app-button rounded-xl text-black bg-white border border-gray-300">
                    Get Started
                </button>
            </div>

            <div class=" mt-52">
                <div class=" text-xl font-bold text-center">Packages FAQs.</div>
            </div>

            <div class=" mt-24 mb-44">
                <div class=" text-base font-bold text-center">Still got more questions?</div>

                <div class=" w-full flex justify-center mt-7">
                    <div class=" flex space-x-8">
                        <button class=" app-button rounded-xl bg-primary text-white">View all FAQs</button>
                        <button class=" app-button rounded-xl bg-gray-200 text-black">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {
        Label : () => import('~/components/Label.vue'),
        ProductCard : () => import('~/components/ProductCard.vue')
    },
    data(){
        return {
            activeTab : 1,
            products : [
                {
                    id:1,
                    name : "Pepper farm",
                    img : '/img/farm/pepper-farm.png'
                },
                {
                    id:2,
                    name : 'Cassava farm',
                    img : '/img/farm/cassava-farm.jpg'
                },
                {
                    id:3,
                    name : 'Chilli farm',
                    img : '/img/farm/chilli-farm.jpg'
                }
            ]
        }
    },

    methods:{
        changeTab(id){
            this.activeTab = id
        }
    }
}
</script>
<style scoped>
.selected{
    @apply text-primary border-b-2 border-primary;
}
</style>
<template>
    <div>
        <div class=" max-w-6xl mx-auto px-4 pt-48 ">
            <div class=" text-lg lg:text-xl font-bold text-center">Our Packages.</div>

            <div class=" w-full flex justify-center">
                
            <div class=" my-10 border rounded-2xl shadow-lg">
                <ul class="list-reset flex p-1">
                    <li class="p-0 mb-0">
                        <div 
                        class="rounded-xl text-sm inline-block px-5 lg:px-14 cursor-pointer font-bold" 
                        :class="activeTab == 1 ? 'bg-blue-200 text-white':'bg-white text-black'"
                        id="1"
                        @click="changeTab(1)"
                        >
                            Individual
                        </div>
                    </li>
                    <li class="p-0 mb-0">
                        <div
                            class="text-sm inline-block px-5 lg:px-14 rounded-xl cursor-pointer font-bold" 
                            :class="activeTab == 2 ? 'bg-blue-200 text-white':'bg-white text-black'"
                            id="2"
                            @click="changeTab(2)"
                            >Group
                        </div>
                    </li>
                    <li class="p-0 mb-0">
                        <div
                            class="text-sm inline-block px-5 lg:px-14 rounded-xl cursor-pointer font-bold" 
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
                                            <th v-for="item in selectedPackage" :key="item.id" scope="col" class="px-6 py-3 w-1/5 text-center">
                                                <div class=" text-sm font-bold">{{ item.name }}</div>
                                                <p class="text-xxs font-normal tracking-normal text-gray-300">{{ item.description }}</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class=" divide-y divide-gray-200">
                                        
                                        <tr class=" divide-x divide-gray-200">
                                            <td class="px-6 py-4 text-left text-xsm  relative">
                                                Minimum Investment
                                            </td>
                                            <td v-for="item in selectedPackage" :key="item.id" class="px-6 text-xsm text-center py-4 ">
                                                GHS {{ item.minInvestment }}
                                            </td>
                                        </tr>
                                        <tr class=" divide-x divide-gray-200">
                                            <td class="px-6 py-4 text-left text-xsm  relative">
                                                Units
                                            </td>
                                            <td v-for="item in selectedPackage" :key="item.id" v-html="item.units" class="px-6 text-xsm text-center tracking-normal py-4 ">
                                                
                                            </td>
                                        </tr>
                                        <tr class=" divide-x divide-gray-200">
                                            <td class="px-6 py-4 text-left  relative">
                                                Duration Of Cycle
                                            </td>
                                            <td v-for="item in selectedPackage" :key="item.id" class="px-6 text-xsm text-center py-4 ">
                                                {{ item.durationOfCycle }}
                                            </td>
                                        </tr>
                                        <tr class=" divide-x divide-gray-200">
                                            <td class="px-6 py-4 text-left  relative">
                                               Insurance
                                            </td>
                                            <td v-for="item in selectedPackage" :key="item.id" class="px-6 text-xsm text-center py-4 ">
                                                {{ item.insurance }}
                                            </td>
                                        </tr>
                                        <tr class=" divide-x divide-gray-200">
                                            <td class="px-6 py-4 text-left  relative">
                                                Certificate Of Investment
                                            </td>
                                            <td v-for="item in selectedPackage" :key="item.id" class="px-6 text-xsm text-center py-4 ">
                                                {{ item.certificateOfInvestment }}
                                            </td>
                                        </tr>
                                        <tr class=" divide-x divide-gray-200">
                                            <td class="px-6 py-4 text-left  relative">
                                                Return On Investment
                                            </td>
                                            <td v-for="item in selectedPackage" :key="item.id" class="px-6 text-xsm text-center py-4 ">
                                                {{ item.returnOnInvestment }}
                                            </td>
                                        </tr>
                                        <tr class=" divide-x divide-gray-200">
                                            <td class="px-6 py-4 text-left  relative">
                                                Track Farm Progress Via Web And Mobile App
                                            </td>
                                            <td v-for="item in selectedPackage" :key="item.id" class="px-6 text-xsm text-center py-4 ">
                                               {{ item.trackProgress }}
                                            </td>
                                        </tr>
                                        <tr class=" divide-x divide-gray-200">
                                            <td class="px-6 py-4 text-left text-xsm  relative">
                                                Dedicated Relationship Manager
                                            </td>
                                            <td v-for="item in selectedPackage" :key="item.id" class="px-6 text-xsm text-center py-4 ">
                                                {{ item.dedicatedRelationshipManager }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class=" mt-16 rounded-xl lg:flex lg:justify-between space-y-5 lg:space-y-0 px-5 lg:px-9 py-11 bg-get-started bg-blue-200">
                <div class=" text-base font-bold text-white">
                    Ready to get started?
                </div>
                <button class=" app-button rounded-xl text-black bg-white border border-gray-50 hover:border-black">
                    Get Started
                </button>
            </div>
        </div>

        <div class=" max-w-2xl mx-auto px-4">

            <div class=" mt-52">
                <div class=" text-lg font-bold text-center">Packages FAQs.</div>

                <div class=" w-full mt-10">
                    <Accordion v-for="faq in faqs" :faq="faq" :key="faq.id" />
                </div>
            </div>

            <div class=" mt-24 mb-44">
                <div class=" font-bold text-base text-center">Still got more questions?</div>
                <div class=" w-full flex justify-center mt-7">
                    <div class=" flex space-x-8">
                        <nuxt-link to="/faqs" class=" app-button rounded-xl bg-primary hover:bg-opacity-70 text-white">View all FAQs</nuxt-link>
                        <button class=" app-button rounded-xl bg-gray-200 hover:bg-white border border-gray-200 hover:border-black text-black">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {
        Accordion : () => import('~/components/Accordion.vue')
    },
    computed:{
        selectedPackage(){
            const selectedPackage = this.ourPackages.find(item => item.id === this.activeTab);
            return selectedPackage.packages
        }
    },
    data(){
        return {
            activeTab : 1,
            ourPackages : [
                {
                    id:1,
                    type:"individual",
                    packages : [
                        {
                            id:1,
                            name:"Asetena Pa",
                            description:"Designed for persons with short-term investment needs.",
                            minInvestment : "6,000",
                            units:"2 unit of maize <br/> farm 2 units of ginger farm <br/> 1 unit of piggery",
                            durationOfCycle:"1",
                            insurance:"Yes",
                            certificateOfInvestment:"Yes",
                            returnOnInvestment :"20%",
                            trackProgress :"Yes",
                            dedicatedRelationshipManager :"No"
                        },
                        {
                            id:2,
                            name:"Akwantuo",
                            description:"For persons living abroad with specific investment needs. We understand the needs to save home for such persons.",
                            minInvestment : "10,000",
                            units:"4 units of chilli <br/> 4 units of maize 3 <br/> units of pineapple <br/> 2 units of piggery",
                            durationOfCycle:"3",
                            insurance:"Yes",
                            certificateOfInvestment:"Yes",
                            returnOnInvestment :"25%",
                            trackProgress :"Yes",
                            dedicatedRelationshipManager :"Yes"
                        },
                        {
                            id:3,
                            name:"Daakye Asem",
                            description:"For children under the age of 18 years. This package gives hope to children and prepare them towards a brighter future.",
                            minInvestment : "6,000",
                            units:"3 units of chilli <br/> 2 units of maize <br/> 2 units of piggery",
                            durationOfCycle:"1 (Subject to rollover)",
                            insurance:"Yes",
                            certificateOfInvestment:"Yes",
                            returnOnInvestment :"10%",
                            trackProgress :"Yes",
                            dedicatedRelationshipManager :"No"
                        },
                        {
                            id:4,
                            name:"Aban Adwumafuo",
                            description:"For public and civil servants. This package helps this group of persons build up funds for future needs.",
                            minInvestment : "2,000",
                            units:"2 units of maize <br/> 2 units of chilli",
                            durationOfCycle:"1",
                            insurance:"Yes",
                            certificateOfInvestment:"Yes",
                            returnOnInvestment :"20%",
                            trackProgress :"Yes",
                            dedicatedRelationshipManager :"No"
                        }
                    ]
                },
                {
                    id:2,
                    type:"Group",
                    packages : [
                        {
                            id:1,
                            name:"Family Package",
                            description:"Designed for families. We consider the need of families investing to prepare towards future occurrences.",
                            minInvestment : "10,000",
                            units:"5 units of maize <br/> 3 units of chilli <br/> 2 units of pineapple",
                            durationOfCycle:"1",
                            insurance:"Yes",
                            certificateOfInvestment:"Yes",
                            returnOnInvestment :"25%",
                            trackProgress :"Yes",
                            dedicatedRelationshipManager :"Yes"
                        },
                        {
                            id:2,
                            name:"Smart Friends Package",
                            description:"Smart friend’s package is specially designed for little groups of friends in the university.",
                            minInvestment : "2,000",
                            units:"2 units of maize <br/> 2 units of chilli <br/> 1 unit of piggery",
                            durationOfCycle:"2 (Subjected to rollover)",
                            insurance:"Yes",
                            certificateOfInvestment:"Yes",
                            returnOnInvestment :"10%",
                            trackProgress :"Yes",
                            dedicatedRelationshipManager :"Yes"
                        },
                        {
                            id:3,
                            name:"Workers Union Package",
                            description:"Designed for workers union such as senior stuff and junior stuff workers within organizations.",
                            minInvestment : "20,000",
                            units:"units of ginger <br/> 7 units of chilli <br/> 10 units of piggery",
                            durationOfCycle:"1",
                            insurance:"Yes",
                            certificateOfInvestment:"Yes",
                            returnOnInvestment :"30%",
                            trackProgress :"Yes",
                            dedicatedRelationshipManager :"No"
                        },
                    ]
                },
                {
                    id:3,
                    type:"Organizations",
                    packages : [
                        {
                            id:1,
                            name:"Church Package",
                            description:"Designed for churches who are looking for other source of income to finance church projects.",
                            minInvestment : "30,000",
                            units:"15 units of maize <br/> 10 units of piggery",
                            durationOfCycle:"1",
                            insurance:"Yes",
                            certificateOfInvestment:"Yes",
                            returnOnInvestment :"30%",
                            trackProgress :"Yes",
                            dedicatedRelationshipManager :"Yes"
                        },
                        {
                            id:2,
                            name:"Institutional Package",
                            description:"Designed for companies and other institutions looking for a safe haven to make some extra source of income to finance projects, or future purchases.",
                            minInvestment : "50,000",
                            units:"10 units of maize <br/> 10 units of pineapple <br/> 7 units of piggery <br/> 5 units of chilli",
                            durationOfCycle:"1",
                            insurance:"Yes",
                            certificateOfInvestment:"Yes",
                            returnOnInvestment :"30%",
                            trackProgress :"Yes",
                            dedicatedRelationshipManager :"Yes"
                        }
                    ]
                }
            ],
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
            ],
            faqs : [
                {
                    id:1,
                    head:"Is there a limited number of units I can sponsor?",
                    text:"No, you can sponsor as many farm units as you want. We will only advise you diversify your investments."
                },
                {
                    id:2,
                    head:"How do I know the progress of my farm?",
                    text:"Our online platforms provide you with a dashboard that gets you to monitor the progress of your farms by means of drone video feeds, pictures, analytics, text messages etc. Your farm manager will also be calling you regularly to give you updates on your farms."
                },
                {
                    id:3,
                    head:"Is there any form of protection for the farms?",
                    text:"Yes there is. All of our farms have been insured against natural disasters such as drought, bush fire, earthquake etc. there is an insurance package for your crop during your account setup."
                },
                {
                    id:4,
                    head:"What does my insurance cover?",
                    text:"We provided insurance cover for all existing farm units, so that in the event of natural disasters, the sponsor’s capital can be refunded. The insurance covers only the initial sponsorship capital; it does not cover the return after harvest."
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
.getStarted{
    background: linear-gradient(#e66465, #9198e5);
}
</style>
<template>
    <div class=" max-w-3xl mx-auto px-4">
        <div class=" text-lg lg:text-xl font-bold text-center pt-48">Frequently Asked Questions.</div>
        <div class=" sticky top-4 bg-white z-10">
            <input type="search" class=" search-input mt-16 mb-4" v-model="searchText" placeholder="Search..."/>


            <div class=" flex space-x-16 border-b border-gray-50 my-10">
                <nuxt-link to="#general" class=" text-xs">General</nuxt-link>
                <nuxt-link to="#packages" class=" text-xs">Packages</nuxt-link>
                <nuxt-link to="#pricing" class=" text-xs">Pricing</nuxt-link>  
            </div>
        </div>

        <div id="general">
            <div class=" text-base font-bold mb-7" >General</div>
            <Accordion v-for="faq in filteredGeneral" :faq="faq" :key="faq.id" />
        </div>

        <div class=" mt-24" id="packages">
            <div class=" text-base font-bold mb-7">Packages</div>
            <Accordion v-for="faq in filteredPackages" :faq="faq" :key="faq.id" />
        </div>

        <div class=" mt-24" id="pricing">
            <div class=" text-base font-bold mb-7">Pricing</div>
            <Accordion v-for="faq in filteredPrices" :faq="faq" :key="faq.id" />
        </div>

        <div class=" mt-24 mb-44">
            <div class=" font-bold text-base text-center">Still got more questions?</div>
            <div class=" w-full flex justify-center mt-7">
                <div>
                    <nuxt-link to="/contact-us" class=" app-button rounded-xl bg-gray-200 text-black">Contact Us</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components : {
        Accordion : () => import('~/components/Accordion.vue')
    },
    computed:{
        filteredGeneral(){
            let tempFaqs = this.general;

            if (this.searchText !== '' && this.searchText) {
                tempFaqs = tempFaqs.filter(
                (item) =>
                    item.head.toLowerCase().includes(this.searchText.toLowerCase()) ||
                    item.text.toLowerCase().includes(this.searchText.toLowerCase())
                );
            }

            return tempFaqs;
        },
        filteredPackages(){
            let tempFaqs = this.packages;

            if (this.searchText !== '' && this.searchText) {
                tempFaqs = tempFaqs.filter(
                (item) =>
                    item.head.toLowerCase().includes(this.searchText.toLowerCase()) ||
                    item.text.toLowerCase().includes(this.searchText.toLowerCase())
                );
            }

            return tempFaqs;
        },
        filteredPrices(){
            let tempFaqs = this.prices;

            if (this.searchText !== '' && this.searchText) {
                tempFaqs = tempFaqs.filter(
                (item) =>
                    item.head.toLowerCase().includes(this.searchText.toLowerCase()) ||
                    item.text.toLowerCase().includes(this.searchText.toLowerCase())
                );
            }

            return tempFaqs;
        }
    },
    data(){
        return{
            searchText:"",
            general : [
                {
                    id:1,
                    head:"What is A FARM FOR ME about?",
                    text:"A FARM FOR ME is an agriculture investment platform that allow people interested in farms but do not have the time, skills, resources etc. sponsor in farm units and earn return on in investment after a compete farming cycle."
                },
                {
                    id:2,
                    head:"Can anyone at all open an account with you?",
                    text:"No, you must be of sound mind, 18 years and above. People below 18 must do so with the consents of their parents. We have special packages for children under 18 years."
                },
                {
                    id:3,
                    head:"When does the farms cycle start counting?",
                    text:"There are scheduled dates for starting our farms as we engage in land preparations. Dates are mostly communicated to you, or posted on our websites and social media pages. You will receive notifications once the farm starts."
                },
                {
                    id:4,
                    head:"What long is a typical farm cycle?",
                    text:"A farm cycle is between 6months and 24 months depending on crop you sponsored."
                },
                {
                    id:5,
                    head:"How do you sell your crops?",
                    text:"We have collaborated with off-takers both in the country and outside the country who buy our farm produce."
                },
                {
                    id:6,
                    head:"How do I receive my proceeds after a farming cycle?",
                    text:"Your funds will be transferred to you through any means you instruct us to, provided it is an acceptable means of payment."
                },
                {
                    id:7,
                    head:"Can I pull out money that has already been invested?",
                    text:"Once your money has been invested in a farm unit, that money is tied up for the duration of the production cycle. After your produce is sent to the market, the proceeds are sent back to your account where you can withdraw them, hold them or re-invest them in a new farm."
                },
                {
                    id:8,
                    head:"Do I have to pay taxes?",
                    text:"All taxes have been included in your production costs."
                },
                {
                    id:9,
                    head:"How does your company make money?",
                    text:"We receive two tenth of your net proceeds when your farm produce goes to market. If you make GHC 100 on your initial investment, we get GHC 20. If you lose money on your investment, we take home nothing. We have set it up this way so that we succeed when you succeed."
                },
                {
                    id:10,
                    head:"What does my insurance cover?",
                    text:"We provided insurance cover for all existing farm units, so that in the event of natural disasters, the sponsor’s capital can be refunded. The insurance covers only the initial sponsorship capital; it does not cover the return after harvest."
                },
            ],
            packages: [
                {
                    id:11,
                    head:"How do I know the progress of my farm?",
                    text:"Our online platforms provide you with a dashboard that gets you to monitor the progress of your farms by means of drone video feeds, pictures, analytics, text messages etc. Your farm manager will also be calling you regularly to give you updates on your farms."
                },
                {
                    id:12,
                    head:"Can I visit the farm?",
                    text:"Yes, you can. We organise monthly farm visits to our farms. However, note that we charge a fee, which caters for transportation, food, water, and safety wears. Once you decide to visit the farm, kindly inform us 14 days ahead, so we can make necessary arrangements."
                },
                {
                    id:13,
                    head:"Is there any form of protection for the farms?",
                    text:"Yes there is. All of our farms have been insured against natural disasters such as drought, bush fire, earthquake etc. there is an insurance package for your crop during your account setup."
                }
            ],
            prices : [
                {
                    id:14,
                    head:"How much is needed to sponsor a farm?",
                    text:"Our farm units comes in different crops and animals. The cost of sponsoring a farm depends on which crop you want to sponsor. It ranges between 1500.00 cedis to 50,000"
                },
                {
                    id:15,
                    head :"Is there a limited number of units I can sponsor?",
                    text:"No, you can sponsor as many farm units as you want. We will only advise you diversify your investments. "
                },
                {
                    id:16,
                    head:"What payment method is accepted? ",
                    text:"You can make payments by means of direct bank deposits, bank transfers, mobile money, money transfer and through third party applications."
                }
            ]
        }
    }
}
</script>
<style scoped>
.nuxt-link-active{
  @apply font-bold border-b-2 border-black;
}
</style>
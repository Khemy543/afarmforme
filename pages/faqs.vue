<template>
    <div class=" max-w-3xl mx-auto px-4">
        <div class=" text-xl font-bold text-center pt-48">Frequently Asked Questions.</div>

        <input type="search" class=" search-input mt-16 mb-4" placeholder="Search..."/>


        <div class=" flex space-x-16 border-b border-gray-50 my-10">
            <div class=" text-xs font-bold border-b-2 border-black">General</div>
            <div class=" text-xs">Packages</div>
            <div class=" text-xs">Pricing</div>  
        </div>

        <div>
            <div class=" text-base font-bold mb-7">General</div>
            <Accordion v-for="faq in general" :faq="faq" :key="faq.id" />
        </div>

        <div class=" mt-24">
            <div class=" text-base font-bold mb-7">Packages</div>
            <Accordion v-for="faq in general" :faq="faq" :key="faq.id" />
        </div>

        <div class=" mt-24">
            <div class=" text-base font-bold mb-7">Pricing</div>
            <Accordion v-for="faq in general" :faq="faq" :key="faq.id" />
        </div>

        <div class=" mt-24 mb-44">
            <div class=" font-bold text-base text-center">Still got more questions?</div>
            <div class=" w-full flex justify-center mt-7">
                <div class=" flex space-x-8">
                    <button class=" app-button rounded-xl bg-primary text-white">View all FAQs</button>
                    <button class=" app-button rounded-xl bg-gray-200 text-black">Contact Us</button>
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
    data(){
        return{
            general : [
                {
                    id:1,
                    head:"Is there a limited number of units I can sponsor?",
                    text:"Our online platforms provide you with a dashboard that gets you to monitor the progress of your farms by means of drone video feeds, pictures, analytics, text messages etc. Your farm manager will also be calling you regularly to give you updates on your farms."
                },
                {
                    id:2,
                    head:"Is there a limited number of units I can sponsor?",
                    text:"Our online platforms provide you with a dashboard that gets you to monitor the progress of your farms by means of drone video feeds, pictures, analytics, text messages etc. Your farm manager will also be calling you regularly to give you updates on your farms."
                },
                {
                    id:3,
                    head:"Is there a limited number of units I can sponsor?",
                    text:"Our online platforms provide you with a dashboard that gets you to monitor the progress of your farms by means of drone video feeds, pictures, analytics, text messages etc. Your farm manager will also be calling you regularly to give you updates on your farms."
                },
                {
                    id:4,
                    head:"Is there a limited number of units I can sponsor?",
                    text:"Our online platforms provide you with a dashboard that gets you to monitor the progress of your farms by means of drone video feeds, pictures, analytics, text messages etc. Your farm manager will also be calling you regularly to give you updates on your farms."
                }
            ],
            packages: [
                {

                }
            ],
            prices : [
                {

                }
            ]
        }
    }
}
</script>
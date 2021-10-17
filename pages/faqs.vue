<template>
    <div class=" max-w-3xl mx-auto px-4">
        <div class=" text-xl font-bold text-center pt-48">Frequently Asked Questions.</div>

        <input type="search" class=" search-input mt-16 mb-4" placeholder="Search..."/>

        <div>
            <Accordion v-for="faq in general" :faq="faq" :key="faq.id" />
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
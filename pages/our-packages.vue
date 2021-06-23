<template>
    <div class=" pt-10">
        <Label 
            page='Our Farms.'
            text='Well-tailored packages to meet your investment needs.'
        />
        <div class="px-72">
            <div class="inset-x-0  px-2 pt-3 mb-3 z-10 bg-white mt-8">
                <div class="container mx-auto flex flex-wrap items-center justify-between">
                    <div class=" border-b-2 border-gray-200 w-full">
                        <ul class="list-reset flex">
                            <li class="p-0 mb-0">
                                <div 
                                class="bg-white text-sm inline-block py-2 cursor-pointer" 
                                :class="activeTab == 1?'selected':'inactive'" id="1"
                                @click="changeTab(1)"
                                >
                                All farms
                                </div>
                            </li>
                            <li class="p-0 mb-0">
                                <div
                                    class="bg-white text-sm inline-block py-2 ml-10 cursor-pointer" 
                                    :class="activeTab == 2?'selected':'inactive'" 
                                    id="2"
                                    @click="changeTab(2)"
                                    >Crop farms
                                </div>
                            </li>
                            <li class="p-0 mb-0">
                                <div
                                    class="bg-white text-sm inline-block py-2 ml-10 cursor-pointer" 
                                    :class="activeTab == 3?'selected':'inactive'" 
                                    id="2"
                                    @click="changeTab(3)"
                                    >Livestock farms
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- content here -->
            <div class="grid grid-cols-3 gap-8 py-28">
                <ProductCard 
                    v-for="n in 6" :key="n"
                />
            </div>
        </div>
        <div>

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
            activeTab : 1
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
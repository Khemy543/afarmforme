<template>
    <main>
        <!-- no active farm  -->
        <div class=" w-full mt-48 flex justify-center items-center text-center" v-if="false">
            <div>
                <p>You don’t have any active farms.</p>
                <nuxt-link class=" text-primary" to="/">Purchase a farm</nuxt-link>
            </div>
        </div>
        <!-- end no active farms -->

        <!-- main content -->

        <div>
            <div class=" flex h-52">
                <div class=" bg-primary w-52 rounded-xl mr-3">

                </div>
                <ProductTile />
            </div>
        </div>
    </main>
</template>
<script>
export default {
    layout : 'dashboard',
    components : {
        ProductTile : () => import('~/components/dashboard/ProductTile.vue')
    }
}
</script>
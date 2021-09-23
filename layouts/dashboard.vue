<template>
    <div class="gray-card flex">
        <Sidebar />
        <PhoneMenu />
        
        <div class=" w-full flex flex-col h-screen overflow-x-hidden">

            <Topbar />
            <div class=" w-full overflow-x-hidden flex flex-col px-4 max-w-6xl mx-auto">
                <Nuxt />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components : {
        Sidebar : () => import('~/components/dashboard/sidebar.vue'),
        Topbar : () => import('~/components/dashboard/topbar.vue'),
        PhoneMenu : () => import('~/components/dashboard/phonemenu.vue')
    }

}
</script>
<style scoped>
</style>
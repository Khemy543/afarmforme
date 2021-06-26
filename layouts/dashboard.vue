<template>
    <div class="gray-card flex">
        <Sidebar />
        
        <div class=" w-full flex flex-col h-screen overflow-x-hidden">

            <Topbar />
            <div class=" w-full overflow-x-hidden flex flex-col px-32 py-10">
                <Nuxt />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components : {
        Sidebar : () => import('~/components/dashboard/sidebar.vue'),
        Topbar : () => import('~/components/dashboard/topbar.vue')
    }

}
</script>
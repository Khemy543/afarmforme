<template>
    <div >
        <div class=" w-full cover flex justify-center items-center text-center">
            <div class="w-11/12 lg:w-4/6">
                <h1 class="mb-6">{{page}}</h1>
                <p class="text-white mb-12">{{text}}</p>
                <BreadCrumbs />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['page', 'text'],
    components : {
        BreadCrumbs : () => import('~/components/BreadCrumbs.vue')
    }
    
}
</script>
<style scoped>
.cover {
    height: 70vh;
    background-image: url("~/static/img/page-title-bg.png");
    background-color: #206E00;
}

p{
    font-size: 25px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}
</style>
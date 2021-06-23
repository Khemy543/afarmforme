<template>
    <div class=" pt-10">
        <div class="w-full cover flex justify-center items-center text-center">
            <div class=" w-4/6">
                <h1 class=" mb-11">{{page}}</h1>
                <p class="text-white mb-24">{{text}}</p>
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

h1{
    text-align: center;
    font-size: 109px !important;
    font-weight: 900;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-transform: capitalize;
}
p{
    font-size: 25px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}
</style>
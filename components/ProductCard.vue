<template>
    <div class=" rounded-xl overflow-hidden border border-gray-300">
        <img :src="product.img" class=" h-48 w-full object-cover"/>
        <div class="content p-6">
            <h4 class=" text-sm font-bold">{{product.name}}</h4>
            <p class=" my-3 text-sm font-normal">Price not yet determined</p>
            <p class=" text-sm font-normal">Price not yet determined . 3 months</p>
        </div>
    </div>
</template>
<script>
export default {
    props : ['product']
}
</script>
<style scoped>
</style>
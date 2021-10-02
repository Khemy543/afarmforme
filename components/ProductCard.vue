<template>
    <div class=" rounded-lg overflow-hidden border border-gray-200">
        <img :src="product.img" class=" h-48 w-full object-cover"/>
        <div class="content p-6">
            <h4 class=" text-sm font-bold">{{product.name}}</h4>
            <p class="  text-xs font-normal text-gray-800">{{product.price}}</p>
            <p class=" text-xs font-normal mt-1 text-gray-800">{{product.returns}} . {{product.months}}</p>
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
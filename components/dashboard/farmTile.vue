<template>
    <div class="flex rounded-xl product-tile flex-shrink-0">
        <img src="~/static/img/farm/pepper-farm.png" class=" w-7/12 product-image object-cover" />
        <div class=" gray-background p-6">
            <h4>Pepper farm</h4>
            <p>13 plots</p>
            <small>54 days old</small>
            <small>Kpetoe, V/R</small><br/>
            <button class="light-green-button px-6 py-5 lg:py-4">Details</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.product-tile {
    border: 1px solid #707070;
    max-width: 430px;
}

.product-image {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
}
</style>
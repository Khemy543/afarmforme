<template>
    <div class=" pt-10">
        <Label 
            page='How it works.'
            text='Farming made easy for you.'
        />
        <div class=" py-32 px-72 text-center">
            <div>
                <div>
                <h3>Our model</h3>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components : {
        Label : () => import('~/components/Label.vue')
    }
}
</script>
<style scoped>
h3{
    font: normal normal bold 30px/55px Poppins;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
</style>
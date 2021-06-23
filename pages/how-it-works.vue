<template>
    <div class=" pt-10">
        <Label 
            page='How it works.'
            text='Farming made easy for you.'
        />
        <div class=" py-32 px-72">
            <h3 class=" mb-28">Our model</h3>
            <div class=" flex justify-center">
                <img src="~/static/img/summary/how-it-works.png" />
            </div>

            <div>
                <h3 class=" mt-28 mb-10">How to sponsor <span class=" text-primary">a farm unit.</span></h3>

                <div class="gray-card grid grid-cols-3 px-40 py-20 tile mb-5">
                    <div class=" col-span-2">
                        <p>
                            Get set up to sponsor a farm unit by providing us with required information. This will help us furnish you with your login details, which will grant you access to our platform.
                        </p>
                        <h5>Get started now</h5>
                    </div>
                </div>

                <div class="gray-card grid grid-cols-3 px-40 py-20 tile mb-5">
                    <div></div>
                    <div class=" col-span-2">
                        <p>
                            After a successful signing up, select your preferred choice of crop subject to availability and number of units you wish to sponsor.
                        </p>
                        <h5>Get started now</h5>
                    </div>
                </div>

                <div class="gray-card grid grid-cols-3 px-40 py-20 tile mb-5">
                    <div></div>
                    <div class=" col-span-2">
                        <p>
                            Use invoice details to make payment via bank deposits or by using your debit/credit cards directly on our platform and also through mobile money options, with your name and invoice number as reference.
                        </p>
                        <h5>Get started now</h5>
                    </div>
                </div>

                <div class="gray-card grid grid-cols-3 px-40 py-20 tile mb-5">
                    <div></div>
                    <div class=" col-span-2">
                        <p>
                            Once payment is confirmed, your dashboard becomes fully functional. You can monitor your farm regularly by way of video feeds, pictures, as well as email updates. You will also be updated on external factors having effect on the agricultural markets such as consumer demand, weather, trade policies.
                        </p>
                        <h5>Get started now</h5>
                    </div>
                </div>

                <div class="gray-card grid grid-cols-3 px-40 py-20 tile mb-5">
                    <div></div>
                    <div class=" col-span-2">
                        <p>
                            When your farm asset reaches the end of their production cycle, they are transported and sold to our off-takers and proceeds (thus initial deposit and return on investment) are credited to your preferred account.
                        </p>
                        <h5>Get started now</h5>
                    </div>
                </div>
            </div>
            <div class=" w-full flex justify-center py-20">
                <button class="app-button">Get started now</button>
            </div>

            <div>
                <h3>Our special <span class=" text-primary">features.</span></h3>
                <div class=" grid grid-cols-3 mt-16 gap-4">
                    <div v-for="n in 7" :key="n">
                        <h4>Farm insurance</h4>
                        <p>
                            To safeguard your investments, all of our farms have been insured against natural disasters such as flooding, pests, bush fire and other unforeseen setbacks.
                        </p>
                    </div>
                </div>
            </div>

            
            <div class=" w-full flex justify-center pt-20">
                <button class="app-button">Get started now</button>
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
    text-align: center;
}

p{
    font: normal normal normal 20px/32px Poppins;
    letter-spacing: 0px;
    color: #2C2C2C;
    opacity: 1;
}

.tile{
    border-radius: 21px;
}
h4{
    font: normal normal bold 20px/35px Poppins;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
</style>
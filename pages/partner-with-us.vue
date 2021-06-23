<template>
    <div class=" pt-10">
        <Label 
             page='Partner with us.'
            text='We believe in global partnerships.'
        />
        <div class=" py-32 px-72">
            <p>
                A farm for me is the ideal partner to achieve social impact through agriculture. We therefore pool the strengths of different stakeholder’s thus Government organizations, private companies, social entrepreneurs, civil societies etc. through our innovative collaboration models.
                <br/> <br/>
                We believe in long term relationships that bring value to both parties hence we create win-win partnerships that respond effectively to challenges when it comes to the agriculture value chain.
                <br/> <br/>
                We rely on individuals, foundations, organizations and corporate contributions to develop our work in achieving our goals around the word and to further our vision of achieving the sustainable development goals.
            </p>

            <div class=" grid grid-cols-3 gap-5 mt-24">
                <div class=" p-5 outlin-card">
                    <h3>BE OUR SUPPLIER. IF YOU CAN SUPPLY US WITH:</h3>

                    <ul class=" mt-9">
                        <li>
                            <p>Agro Chemicals</p>
                        </li>
                        <li>
                            <p>
                                Seeds & Seedings
                            </p>
                        </li>
                        <li>
                            <p>
                                Sacks
                            </p>
                        </li>
                        <li>
                            <p>
                                Packaging boxes
                            </p>
                        </li>
                        <li>
                            <p>
                                ETC
                            </p>
                        </li>
                    </ul>
                </div>

                <div class=" p-5 outlin-card">
                    <h3>BE AN OFF TAKER IF YOU ARE A/AN:</h3>

                    <ul class=" mt-9">
                        <li>
                            <p>Hotel</p>
                        </li>
                        <li>
                            <p>Restaurant</p>
                        </li>
                        <li>
                            <p>Supermarket</p>
                        </li>
                        <li>
                            <p>Food processing company</p>
                        </li>
                        <li>
                            <p>Individual</p>
                        </li>
                        <li>
                            <p>School</p>
                        </li>
                        <li>
                            <p>ETC</p>
                        </li>
                    </ul>
                </div>

                <div class=" p-5 outlin-card">
                    <h3>BE AN INDIVIDUAL / CORPORATE PARTNER IF YOU CAN PROVIDE:</h3>

                    <ul class=" mt-9">
                        <li>
                            <p>Farm machinery service</p>
                        </li>
                        <li>
                            <p>Transport services</p>
                        </li>
                        <li>
                            <p>Agriculture</p>
                        </li>
                        <li>
                            <p>Consultancy and training services</p>
                        </li>
                        <li>
                            <p>import / import services</p>
                        </li>
                        <li>
                            <p>ETC</p>
                        </li>
                    </ul>
                </div>
                
            </div>

            <form class="text-center mt-32 w-4/6 mx-auto">
                <h4>Get in touch.</h4>
                <div class=" grid grid-cols-2 gap-5 mt-16">
                    <input class="app-input" placeholder="Name of company" />
                    <input class="app-input" placeholder="Name of contact person" />
                </div>
                <div class=" grid grid-cols-2 mt-14 gap-5">
                    <input class="app-input" placeholder="Name of company" />
                    <input class="app-input" placeholder="Phone number of contact person" />
                </div>
                <textarea class=" app-input h-64 w-full mt-14" placeholder="Details of what you want to supply, provide or off take"></textarea>

                <div class=" w-full flex justify-center pt-20">
                    <button class="app-button" disabled>Send message</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    components: {
        Label : () => import('~/components/Label.vue')
    }
}
</script>
<style scoped>
p{
    font: normal normal normal 18px/30px Poppins;
    letter-spacing: 0px;
    color: #2C2C2C;
    opacity: 1;
}

.outlin-card{
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #D1D1D1;
    border-radius: 13px;
    opacity: 1;
}
h3{
    font: normal normal bold 20px/35px Poppins;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
h4{
    font: normal normal bold 30px/55px Poppins;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
</style>
<template>
    <div >
        <Label 
             page='Partner with us.'
            text='We believe in global partnerships.'
        />
        <div class=" py-32 side-padding">
            <p>
                A farm for me is the ideal partner to achieve social impact through agriculture. We therefore pool the strengths of different stakeholder’s thus Government organizations, private companies, social entrepreneurs, civil societies etc. through our innovative collaboration models.
                <br/> <br/>
                We believe in long term relationships that bring value to both parties hence we create win-win partnerships that respond effectively to challenges when it comes to the agriculture value chain.
                <br/> <br/>
                We rely on individuals, foundations, organizations and corporate contributions to develop our work in achieving our goals around the word and to further our vision of achieving the sustainable development goals.
            </p>

            <div class=" grid grid-cols-1 lg:grid-cols-3 gap-5 mt-24">
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

            <form class="text-center mt-32 w-full lg:w-4/6 mx-auto" @submit.prevent="SendPartnerUs">
                <h4>Get in touch.</h4>
                <div class=" grid grid-cols-2 gap-5 small-padding">
                    <input class="app-input" v-model="company" placeholder="Name of company"/>
                    <input class="app-input" v-model="name" placeholder="Name of contact person" required/>
                </div>
                <div class=" grid grid-cols-2 small-padding gap-5">
                    <select class="app-input" v-model="partner_type">
                        <option value="" disabled>Partnering as:</option>
                        <option>Partner 1</option>
                        <option>Partner 2</option>
                        <option>Partner 3</option>
                    </select>
                    
                    <input class="app-input" type="tel" v-model="phone_number" placeholder="Phone number of contact person" required/>
                </div>
                <div class="small-padding">
                    <textarea class=" app-input h-64 w-full" v-model="message" placeholder="Details of what you want to supply, provide or off take" required></textarea>
                </div>
                <div class=" w-full flex justify-center lg:justify-end small-padding">
                    <button type="submit" class="app-button">Send request</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    components: {
        Label : () => import('~/components/Label.vue')
    },
    data(){
        return {
            company: '',
            name : '',
            partner_type : '',
            phone_number : '',
            message : ''
        }
    },

    methods : {
        SendPartnerUs(){
            alert('received !')
        }
    }
}
</script>
<style scoped>
p{
    font: normal normal normal 18px/30px Proxima Nova;
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
    font: normal normal bold 20px/35px Proxima Nova;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
h4{
    font: normal normal bold 30px/55px Proxima Nova;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
</style>
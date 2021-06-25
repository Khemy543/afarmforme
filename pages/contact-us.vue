<template>
    <div >
        <Label 
             page='Contact Us.'
            text='The future of investment.'
        />
        <div class=" py-32 side-padding">
            <div class=" grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <h3>Contact us.</h3>
                    <p>Head office location: <br/>
                    F-393/4 Otswe Street, Osu Ako-Adjei<br/> Accra - Ghana 00233</p>
                    <br/>
                    <h5>Contact numbers:</h5>
                    <p>Ghana:<br/> +233 202-822-169<br/> +233 302-906-492<br/><br/> United Kingdom:<br/> +447393535139 <br/><br/> E-mail: inquiries@afarmforme.com<br/><br/> Office hours: <br/>Monday to Friday: 8am - 5pm<br/> Last Saturday of every month is for farm visits.</p>
                    
                    <div class=" mt-12 flex justify-between w-7/12">
                        <div class="icon-button">
                            <img src="~/static/img/icons/instagram-brands.svg" />
                        </div>
                        <div class="icon-button">
                            <img src="~/static/img/icons/facebook-square-brands.svg" />
                        </div>
                        <div class="icon-button">
                            <img src="~/static/img/icons/twitter-brands.svg" />
                        </div>
                        <div class="icon-button">
                            <img src="~/static/img/icons/linkedin-brands.svg" />
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>

            <form class="text-center mt-32 w-full lg:w-4/6 mx-auto" @submit.prevent="ContactUs">
                <h4>Send us a message.</h4>
                <div class=" grid grid-cols-2 gap-5 small-padding">
                    <input class="app-input" v-model="name" placeholder="Your name" required/>
                    <input class="app-input" v-model="email" placeholder="Enter your e-mail address" required/>
                </div>
                <div class="small-padding">
                    <input class="app-input w-full" v-model="subject" placeholder="Subject" required/>
                </div>
                <div class=" small-padding">
                    <textarea class=" app-input h-64 w-full small-padding" v-model="message" placeholder="Type your message here" required></textarea>
                </div>
                <div class=" w-full flex justify-center lg:justify-end small-padding">
                    <button type="submit" class="app-button">Send message</button>
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
        return{
            name : '',
            email : '',
            subject : '',
            message : ''
        }
    },
    methods : {
        ContactUs(){
            alert('submitted !')
        }
    }
}
</script>
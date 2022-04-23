<template>
  <div>
      <div class=" max-w-7xl mx-auto px-4 pt-48">
            <div class=" text-lg lg:text-xl font-bold text-center">Contact Us.</div>

            <div class=" mt-10 lg:flex lg:space-x-5 space-y-5 lg:space-y-0 border-t-2 border-gray-200 pt-10">
                <div class=" w-full lg:w-2/5">
                    <div class=" font-bold text-sm">Head Office Location</div>
                    <div class=" text-xs font-normal">F-393/4 Otswe Street, Osu Ako-Adjei<br/>Accra - Ghana<br/>00233</div>

                    <div class=" font-bold text-sm">Contact Numbers</div>
                    <div class=" text-xs font-normal">
                        Ghana:<br/><a href="tel:+233559186521">+233 559 1865 21</a><br/><a href="tel:+233302906492">+233 302-906-492</a>
                    </div>

                    <div class=" font-bold text-sm">Email Address</div>
                    <div class=" text-xs font-normal"><a href="mailto:inquiries@afarmforme.com">inquiries@afarmforme.com</a></div>

                    <div class=" font-bold text-sm">Office Hours</div>
                    <div  class=" text-xs font-normal">Monday to Friday: 8am - 5pm Last Saturday of every month is for farm visits.</div>

                    <div class=" w-full flex space-x-10 mt-8">
                        <a target="_blank" :href="social.link" class=" h-11 w-11 rounded-full cursor-pointer flex justify-center items-center bg-gray-200" v-for="social in socialLinks" :key="social.id">
                            <img :src="social.icon" :alt="social.name">
                        </a>
                    </div>

                    <div class=" mt-28 w-full">
                        <div class=" text-sm font-bold">Send Us A Message</div>

                        <form @submit.prevent="handleContactUs" class=" space-y-4 w-full">
                            <input type="text" placeholder="Full name" class=" gray-input" v-model="form.name"/>

                            <input type="email" placeholder="Email address" class=" gray-input" v-model="form.email"/>

                            <input type="text" placeholder="Message title" class=" gray-input" v-model="form.title"/>

                            <textarea name="" id="" class=" gray-input h-40" placeholder="Type your message..." v-model="form.message" ></textarea>

                            <button class=" app-button rounded-xl bg-primary text-white w-full">Send Message</button>
                        </form>
                    </div>
                </div>
                <div class=" w-full lg:w-3/5">
                    <div class=" overflow-hidden rounded-lg h-96 w-fll lg:w-2/3 mx-auto">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.060714017286!2d-0.17440188566039141!3d5.558019595970224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf91769b502d11%3A0x92f8346706904be!2sKRAADO!5e0!3m2!1sen!2sgh!4v1640669113213!5m2!1sen!2sgh" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            socialLinks : [
                {
                    id:1,
                    name:"instagram",
                    icon:"/img/contact/instagram.svg",
                    link:"https://instagram.com/afarmforme?utm_medium=copy_link"
                },
                {
                    id:2,
                    name:"facebook",
                    icon:"/img/contact/facebook.svg",
                    link:"https://www.facebook.com/afarmforme/"
                },
                {
                    id:3,
                    name:"twitter",
                    icon:"/img/contact/twitter.svg",
                    link:"https://twitter.com/afarmforme?t=IEy8O0mCfT7_ZlY9e33bNQ&s=09"
                },
                {
                    id:4,
                    name:"linkedin",
                    icon:"/img/contact/linkedin.svg",
                    link:"https://www.linkedin.com/company/afarmforme"
                }
            ],
            form : {
                name:"",
                email:"",
                title:"",
                message:""
            }
        }
    },
    methods:{
        async handleContactUs(){

        }
    }
}
</script>

<style>

</style>

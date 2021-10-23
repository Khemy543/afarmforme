<template>
  <div>
      <div class=" max-w-6xl mx-auto px-4 pt-48">
            <div class=" text-xl font-bold text-center">Contact Us.</div>

            <div class=" mt-10 lg:flex lg:space-x-5 space-y-5 lg:space-y-0 border-t-2 border-gray-200 pt-10">
                <div class=" w-full lg:w-2/5">
                    <div class=" font-bold text-sm">Head Office Location</div>
                    <div class=" text-xs font-normal">F-393/4 Otswe Street, Osu Ako-Adjei<br/>Accra - Ghana<br/>00233</div>
                
                    <div class=" font-bold text-sm">Contact Numbers</div>
                    <div class=" text-xs font-normal">
                        Ghana:<br/>+233 202-822-169<br/>+233 302-906-492 <br/><br/>United Kingdom:<br/>+447393535139
                    </div>

                    <div class=" font-bold text-sm">Email Address</div>
                    <div class=" text-xs font-normal">inquiries@afarmforme.com</div>

                    <div class=" font-bold text-sm">Office Hours</div>
                    <div  class=" text-xs font-normal">Monday to Friday: 8am - 5pm Last Saturday of every month is for farm visits.</div>
                
                    <div class=" w-full flex space-x-10 mt-8">
                        <div class=" h-11 w-11 rounded-full cursor-pointer flex justify-center items-center bg-gray-200" v-for="social in socialLinks" :key="social.id">
                            <img :src="social.icon" :alt="social.name">
                        </div>
                    </div>

                    <div class=" mt-28 w-full">
                        <div class=" text-sm font-bold">Send Us A Message</div>

                        <div class=" space-y-4 w-full">
                            <input type="text" placeholder="Full name" class=" gray-input"/>
                            
                            <input type="email" placeholder="Email address" class=" gray-input"/>
                            
                            <input type="text" placeholder="Message title" class=" gray-input"/>

                            <textarea name="" id="" class=" gray-input h-40" placeholder="Type your message..." ></textarea>
                            
                            <button class=" app-button rounded-xl bg-primary text-white w-full">Send Message</button>
                        </div>
                    </div>
                </div>
                <div class=" w-full lg:w-3/5">
                    <div class=" bg-gray-200 rounded-lg h-96 w-fll lg:w-2/3 mx-auto">

                    </div>
                </div>
            </div>

            <div class=" mt-16 mb-32 py-11 px-5 lg:px-16 lg:flex space-x-0 bg-blue-200 rounded-lg items-center ">
                <div class=" w-full lg:w-1/2 lg:pr-10">
                    <div class="text-lg font-bold text-white">
                    Begin your journey of becoming a Agripreneur.
                    </div>
                </div>
                <div class=" lg:flex space-x-4 w-full lg:w-1/2">
                    <div class=" w-full lg:w-1/2">
                    <div class=" text-sm font-bold text-white">Simple Pricing</div>
                    <div class=" mt-4 text-xs font-normal text-white">
                    We know that every cent counts and budgets need to be clear. We will always be upfront with you about what our services will cost.
                    </div>
                    
                    <button class=" app-button bg-white border border-gray-300 rounded-xl mt-6">Start Farming</button>
                </div>

                <div class=" w-1/2">
                    <div class=" text-sm font-bold text-white">Simple Pricing</div>
                    <div class=" mt-4 text-xs font-normal text-white">
                    We know that every cent counts and budgets need to be clear. We will always be upfront with you about what our services will cost.
                    </div>
                    
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
                    link:""
                },
                {
                    id:2,
                    name:"facebook",
                    icon:"/img/contact/facebook.svg",
                    link:""
                },
                {
                    id:3,
                    name:"twitter",
                    icon:"/img/contact/twitter.svg",
                    link:""
                },
                {
                    id:4,
                    name:"linkedin",
                    icon:"/img/contact/linkedin.svg",
                    link:""
                }
            ]
        }
    }
}
</script>

<style>

</style>
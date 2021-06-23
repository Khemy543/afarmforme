<template>
    <div class=" pt-10">
        <Label 
             page='Contact Us.'
            text='The future of investment.'
        />
        <div class=" py-32 px-72">
            <div class=" grid grid-cols-2">
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

            <form class="text-center mt-32 w-4/6 mx-auto">
                <h4>Send us a message.</h4>
                <div class=" grid grid-cols-2 gap-5 mt-16">
                    <input class="app-input" placeholder="Name of company" />
                    <input class="app-input" placeholder="Name of contact person" />
                </div>
                <input class="app-input w-full mt-14" placeholder="Subject" />
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
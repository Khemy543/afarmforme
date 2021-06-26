<template>
    <div class="flex h-full w-full justify-center items-center">
        <!-- first sign up form -->
        <div class="w-full lg:w-3/12" v-if="start_registration">
            <div class=" flex justify-center">
                <div class=" px-5 border-r-2 border-white">
                    <img src="~/static/img/logo-two.png" />
                </div>
                 <p class=" px-5 text-white">Sign up</p>
            </div>
            <div class="medium-padding">
                <input placeholder="Full name" type="text" class="auth-input" />
            </div>
            <div class="small-padding">
                <input placeholder="Email address" type="email" class="auth-input" />
            </div>
            <div class="small-padding">
                <input placeholder="Phone number" type="text" class="auth-input" />
            </div>
            <div class="small-padding">
                <input placeholder="Name of company" type="email" class="auth-input" />
            </div>
            <div class="small-padding">
                <input placeholder="Choose a profile type" type="email" class="auth-input" />
            </div>
            <div class="small-padding">
                <button class="auth-button">Continue</button>
            </div>
            <div class="small-padding text-center">
                <nuxt-link to="/auth/login" class=" text-white text-center">Already have an account?<br/> Click here to login.</nuxt-link>
            </div>
        </div>

        <!-- second sign up form -->
        <div class="w-full lg:w-3/12" v-if="continue_registration">
            <div class=" text-center">
                <h4  class="text-white">You are almost done</h4>
                <p  class="text-white">A temporary password has been sent to k***********@******.net. Enter it here.</p>
            </div>
            <div class="small-padding">
                <input placeholder="Temporary password" type="password" class="auth-input" />
            </div>
            <div class="small-padding">
                <input placeholder="New Password" type="password" class="auth-input" />
            </div>
            <div class="small-padding">
                <input placeholder="Confirm new password" type="password" class="auth-input" />
            </div>
            <div class="small-padding">
                <button class="auth-button">Create account</button>
            </div>
            <div class="small-padding text-center">
                <nuxt-link to="/auth/register" class=" text-white text-center">cancel account creation<br/> Click here to login.</nuxt-link>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    layout : 'auth',
    data(){
        return{
            start_registration : true,
            continue_registration : false
        }
    },

    methods : {
        continueRegistration(){
            this.start_registration = false;
            this.conitnue_registration = true;
        }
    }
}
</script>
<style scoped>

</style>
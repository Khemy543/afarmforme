<template>
    <div class=" h-full w-full">
        <div class="flex h-full w-full justify-center items-center">
            <form class="w-full lg:w-3/12" @submit.prevent="handleLogin">
                <div class=" flex justify-center">
                    <div class=" px-5 border-r-2 border-white">
                        <img src="~/static/img/logo-two.png" />
                    </div>
                    <p class=" px-5 text-white">Login</p>
                </div>
                <div class="medium-padding">
                    <input placeholder="Email" type="email" class="auth-input" required v-model="form.email" />
                </div>
                <div class="small-padding">
                    <input placeholder="Password" type="password" class="auth-input" required v-model="form.password" />
                </div>
                <div class="small-padding">
                    <button class="auth-button" type="submit">Login</button>
                </div>
                <div class="small-padding text-center">
                    <p class=" text-white text-center cursor-pointer" style="font-size:16px;" @click="() => open_reset_password_modal = true">
                        Forgot password? Click here to reset it.
                    </p>
                    <nuxt-link to="/auth/register" class=" text-white text-center">Don’t have an account? Click here to sign up.</nuxt-link>
                </div>
            </form>
        </div>

        <!-- forgot password -->
        <div class="app-modal" v-if="open_reset_password_modal">
            <form class=" bg-white w-full lg:w-3/12 p-5 rounded-xl text-center relative" @submit.prevent="SubmitResetPasswordEmail">
                <h4>Forgot password</h4>
                <p class=" small-padding">
                    Enter your email address and we will send your password to you.
                </p>
                <div class="small-padding">
                    <input class="app-input w-full" placeholder="Enter email" required v-model="reset_password_email" />
                </div>
                <div class=" small-padding">
                    <button class="auth-button">Send</button>
                </div>

                <button type="submit" class="absolute outline-none rounded-full px-4 focus:outline-none hover:bg-gray-100" style="top:15px; left:15px; font-size:30px;" @click="open_reset_password_modal = false">
                    &times
                </button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    layout : 'auth',
    data(){
        return{
            open_reset_password_modal : false,
            form : {
                email : "",
                password : ''
            },
            reset_password_email : ""
        }
    },

    methods : {
        handleLogin(){

        },

        SubmitResetPasswordEmail(){

        }
    }   
}
</script>
<style scoped>

</style>
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
                <div class=" space-y-4 mt-12">
                    <input placeholder="Email" type="email" class="auth-input" required v-model="form.email" />
                    <input placeholder="Password" type="password" class="auth-input" required v-model="form.password" />
                
               </div>     
               
               <button class="app-button bg-black text-white rounded-full w-full mt-7" type="submit">Login</button>
                
                <div class=" mt-7 text-center space-y-3">
                    <div class=" text-white text-center cursor-pointer text-xs" @click="() => open_reset_password_modal = true">
                        Forgot password? Click here to reset it.
                    </div>
                    <div>
                        <nuxt-link to="/auth/register" class=" text-white text-center">Don’t have an account? Click here to sign up.</nuxt-link>
                    </div>
                </div>
            </form>
        </div>

        <modal :close="() => open_reset_password_modal=false" :showClose="true" v-if="open_reset_password_modal">
            <template v-slot:header>
                <div class=" tex-md font-bold text-center px-6">Forgot password</div>
            </template>
            <template v-slot:body>
                <form class=" bg-white w-full space-y-4 px-6" @submit.prevent="SubmitResetPasswordEmail">
                    <div class=" text-center font-xs ">Enter your email address and we will send your password to you.</div>
                    
                    <input class="gray-input w-full" placeholder="Enter email" required v-model="reset_password_email" />
                    
                    <button type="submit" class="app-button bg-black text-white rounded-full w-full">Send</button>
                </form>
            </template>
        </modal>

    </div>
</template>
<script>
import Modal from '../../components/Modal.vue'
export default {
    layout : 'auth',
    components: {
        Modal : () => import('~/components/Modal.vue')
    },
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
            this.$router.push('/user')
        },

        SubmitResetPasswordEmail(){

        },
    }   
}
</script>
<style scoped>

</style>
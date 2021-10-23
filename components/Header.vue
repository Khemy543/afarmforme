<template>
<div>
  <nav class="fixed inset-x-0 py-1 bg-white z-30">
    <div class="container max-w-6xl px-4 mx-auto flex flex-wrap items-center justify-between">

      <div class="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <nuxt-link to="/" class="text-base font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
          <img src="~/static/img/logo-two.png" alt="logo" class=" h-10 w-auto" />
        </nuxt-link>

        <button class="text-black font-normal cursor-pointer text-base leading-none py-1 bg-transparent block lg:hidden focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <i :class="!showMenu ? 'fa fa-bars' : 'fa fa-close'"></i>
        </button>
      </div>

      <div v-bind:class="{'hidden': !showMenu, 'flex fade-down': showMenu}" class="lg:flex lg:flex-grow h-screen lg:h-auto">
        <ul class="flex flex-col lg:flex-row list-none ml-auto" @click="() => showMenu = false">
          <li class="nav-item">
            <nuxt-link to="/about-us" class="mx-4 py-5 lg:py-2 flex items-center text-sm text-black hover:opacity-75" >
              <span>About us</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/our-packages" class="mx-4 py-5 lg:py-2 flex items-center text-sm text-black hover:opacity-75" >
              <span >Products</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/how-it-works" class="mx-4 py-5 lg:py-2 flex items-center text-sm text-black hover:opacity-75" >
             <span >How it works</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/partner-with-us" class="mx-4 py-5 lg:py-2 flex items-center text-sm text-black hover:opacity-75" >
             <span >Partners</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/contact-us" class="mx-4 py-5 lg:py-2 flex items-center text-sm text-black hover:opacity-75" >
             <span >Contacts</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
      
      <div class="hidden lg:flex lg:flex-grow h-screen lg:h-auto">
        <ul class="flex flex-col lg:flex-row list-none ml-auto items-center">
          <li class="nav-item">
            <nuxt-link to="/auth/login" class="mx-4 py-5 lg:py-2 flex items-center text-sm hover:opacity-75" >
             <span >Login</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/auth/register" class="mx-4 rounded-full bg-primary text-white lg:my-auto flex items-center app-button" style="width:auto">
             <span >Start farming</span>
            </nuxt-link>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      active:false,
      view : {
        atTopOfPage : false
      }
    }
  },
  mounted(){
    window.addEventListener('scroll', this.changeNavColor);
    if(!this.view.atTopOfPage){
      this.showMenu = false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    },
    changeNavColor(){
      if(window.pageYOffset>0){
          this.view.atTopOfPage = false;
        }else{
            this.view.atTopOfPage = true
        }
    }
  },
  destroyed(){
    window.removeEventListener('scroll', this.changeNavColor)
  }
}
</script>
<style scoped>
.nuxt-link-active span{
  @apply border-b-4 border-blue-200
}

.fade-down {
  animation : slideInDown 500ms ease-in-out;
}
</style>
<template>
  <div>
    <nav class="fixed inset-x-0 py-1 bg-white z-30">
      <div class="container max-w-7xl px-4 mx-auto flex flex-wrap items-center justify-between">

        <div class="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <nuxt-link to="/"
            class="text-base font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
            <img src="~/static/img/logo-two.png" alt="logo" class=" h-10 w-auto" />
          </nuxt-link>

          <button
            class="text-black font-normal cursor-pointer text-base leading-none py-1 bg-transparent block lg:hidden focus:outline-none"
            type="button" v-on:click="toggleNavbar()">
            <svg v-if="!showMenu" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <!-- <i :class="!showMenu ? 'fa fa-bars' : 'fa fa-close'"></i> -->
          </button>
        </div>

        <div v-bind:class="{ 'hidden': !showMenu, 'flex fade-down': showMenu }"
          class="lg:flex lg:flex-grow h-screen lg:h-auto">
          <ul class="flex flex-col lg:flex-row list-none ml-auto" @click="() => showMenu = false">
            <li class="nav-item">
              <nuxt-link to="/about-us" class="mx-4 py-5 lg:py-2 flex items-center text-sm text-black hover:opacity-75">
                <span>About us</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/our-packages"
                class="mx-4 py-5 lg:py-2 flex items-center text-sm text-black hover:opacity-75">
                <span>Products</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/how-it-works"
                class="mx-4 py-5 lg:py-2 flex items-center text-sm text-black hover:opacity-75">
                <span>How it works</span>
              </nuxt-link>
            </li>
            <li class="nav-item relative group">
              <div class="mx-4 py-5 lg:py-2 flex items-center space-x-1 text-sm text-black hover:opacity-75 cursor-pointer" @mouseenter="partner=true" @mouseleave="partner=false">
                <span>Partners</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div
                v-if="partner"
                @mouseenter="partner=true" @mouseleave="partner=false"
                class=" flex absolute group-hover:flex flex-col space-y-5 z-10 -ml-4 transform px-2 w-screen sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2" style="max-width:198px;">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-3 bg-white px-4 py-5 sm:gap-5 sm:p-6">
                    <div>
                      <nuxt-link class=" hover:underline" to="/partner/become-a-partner">Become a partner</nuxt-link>
                    </div>
                    <div>
                      <nuxt-link class="hover:underline" to="/partner/become-a-distributor">Become a distributor</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <nuxt-link to="/contact-us"
                class="mx-4 py-5 lg:py-2 flex items-center text-sm text-black hover:opacity-75">
                <span>Contacts</span>
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="hidden lg:flex lg:flex-grow h-screen lg:h-auto">
          <ul class="flex flex-col lg:flex-row list-none ml-auto items-center">
            <li class="nav-item">
              <nuxt-link to="/auth/login" class="mx-4 py-5 lg:py-2 flex items-center text-sm hover:opacity-75">
                <span>Login</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/auth/register"
                class="mx-4 rounded-full bg-primary hover:bg-opacity-70 text-white lg:my-auto flex items-center app-button"
                style="width:auto">
                <span>Start farming</span>
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
      active: false,
      partner: false,
      view: {
        atTopOfPage: false
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.changeNavColor);
    if (!this.view.atTopOfPage) {
      this.showMenu = false
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    },
    changeNavColor() {
      if (window.pageYOffset > 0) {
        this.view.atTopOfPage = false;
      } else {
        this.view.atTopOfPage = true
      }
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.changeNavColor)
  }
}
</script>
<style scoped>
.nuxt-link-active span {
  @apply border-b-4 border-blue-200
}

.fade-down {
  animation: slideInDown 500ms ease-in-out;
}
</style>

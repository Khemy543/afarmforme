<template>
  <div>
    <Header />
    <div class=" flex-1">
      <Nuxt />
    </div>
    <div class="max-w-7xl mx-auto px-4 pb-48">

    <div class=" mt-28 py-11 px-5 lg:px-16 lg:flex space-x-0 bg-footer-banner bg-blue-200 rounded-lg items-center ">
      <div class="w-full lg:w-1/2 lg:pr-10">
        <div class="text-lg font-bold text-white">
          Begin your journey of becoming a Agripreneur.
        </div>
      </div>
      <div class="lg:w-1/2">
      <div class=" lg:flex lg:space-x-4 w-full">
        <div class=" w-full lg:w-1/2 mt-4 lg:mt-0">
          <img src="~/static/img/Footer/simple-pricing-icon.svg" alt="simple pricing"/>
          <div class=" text-sm mb-3 font-bold text-white">Simple Pricing</div>
          <div class=" mt-4 text-xs font-normal text-white">
            We know that every cent counts and budgets need to be clear. We will always be upfront with you about what our services will cost.
          </div>
        </div>

        <div class=" w-full lg:w-1/2 mt-4 lg:mt-0">
          <img src="~/static/img/Footer/secure-transaction-icon.svg" alt="secure transaction"/>
          <div class=" text-sm mb-3 font-bold text-white">Simple Pricing</div>
          <div class=" mt-4 text-xs font-normal text-white">
            We know that every cent counts and budgets need to be clear. We will always be upfront with you about what our services will cost.
          </div>
        </div>
      </div>

      <button class=" hidden lg:block app-button bg-white border border-gray-50 hover:border-black rounded-xl mt-6">Start Farming</button>
      </div>
    </div>
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  components : {
    Header : ()=> import('~/components/Header.vue'),
    Footer : () => import('~/components/Footer.vue')
  }
}
</script>

<style>

</style>

<template>
  <div>
    <Header />
    <div class=" flex-1">
      <Nuxt />
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

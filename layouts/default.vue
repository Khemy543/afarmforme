<template>
  <div>
    <Header />
    <div>
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

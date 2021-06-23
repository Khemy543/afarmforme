<template>
  <div>
    <Header />
    <div>
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  components : {
    Header : ()=> import('~/components/Header.vue')
  }
}
</script>

<style>

</style>

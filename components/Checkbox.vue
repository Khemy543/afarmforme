<template>
  <label class=" checkbox-container" :for="id"><span v-html="name"></span>
      <input type="checkbox" :name="id" :id="id" :checked="checked">
      <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
    props:['name', 'id', 'checked']
}
</script>

<style>

</style>
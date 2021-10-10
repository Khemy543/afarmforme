<template>
  <div class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <div class="inline-block align-bottom bg-white relative rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
      <button v-if="showClose" @click="close" type="submit" class="absolute outline-none rounded-full px-4 focus:outline-none hover:bg-gray-100" style="top:15px; left:15px; font-size:30px;">
        &times
      </button>
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <slot name="header"></slot>
      </div>
      <div class="bg-white px-4 pt-2 pb-4 sm:px-6">
          <slot name="body"></slot>
      </div>
      <div class="bg-white">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props : ['text', 'title', 'successBtnText', 'showClose', 'close']
}
</script>

<style>

</style>

<template>
  <div class="w-full">
    <div class=" tab w-full overflow-hidden">
        <input
          class="absolute opacity-0"
          :id="`faq-${faq.id}`"
          type="checkbox"
          :name="`faq-${faq.id}`"
        />
        <label
          class="inline-block w-full p-5 rounded-lg text-xs leading-normal cursor-pointer shadow-sm mb-2 border border-gray-100"
          :for="`faq-${faq.id}`">
            {{faq.head}}
        </label>
        <div
          class="tab-content overflow-hidden">
          <div class="text-xs font-normal p-5 mb-2 bg-gray-100 border border-gray-600  rounded-xl">
            {{faq.text}}
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['faq']
};
</script>

<style>
/* Tab content - closed */
.tab-content {
  max-height: 0;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35s;
  transition: max-height 0.35s;
}
/* :checked - resize to full height */
.tab input:checked ~ .tab-content {
  max-height: 100vh;
}

.tab input + label {
  box-sizing: border-box;
}
</style>

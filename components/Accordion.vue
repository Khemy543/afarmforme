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
          class=" w-full flex p-5  relative rounded-lg text-xs leading-normal cursor-pointer shadow-sm mb-2 border border-gray-100"
          :for="`faq-${faq.id}`">
            {{faq.head}}
            <span class="absolute right-0 inset-y-0 flex items-center pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="5.6" height="9.699" viewBox="0 0 5.6 9.699">
                <path id="chevron-right" d="M9,13.578l3.789-3.789L9,6" transform="translate(-7.939 -4.939)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
              </svg>
            </span>
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

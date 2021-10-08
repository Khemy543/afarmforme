<template>
  <div class=" w-full">
        <div class="tab w-full overflow-hidden">
            <input type="checkbox" :name="`roadmap-$roadmap.id}`" :id="`roadmap-${roadmap.id}`" class="absolute opacity-0">
            <label :for="`roadmap-${roadmap.id}`" class=" w-full inline-block items-center bg-indigo-600 text-white rounded-lg py-3 px-8 cursor-pointer">
                <div class=" flex justify-between items-center">
                  <div>
                    <div class="text-lg font-semibold mb-1">{{ roadmap.title }}</div>
                    <p class=" text-sm font-normal">{{ roadmap.description }}</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
            </label>
            <div class="tab-content overflow-hidden leading-normal bg-indigo-50 rounded mt-2 px-8">
                <div class=" w-full py-2">
                    <div v-for="plan in roadmap.lesson_plans" :key="plan.id" class=" mb-4">
                        <div class=" text-base font-semibold mb-1">{{plan.title}}</div>
                        <p class=" text-sm font-normal">{{plan.description}}</p>

                        <div class=" mt-3">
                            <div v-for="objective in plan.lesson_objectives" :key="objective.id">
                                <input type="checkbox" :name="`objective-${objective.id}`" :id="`objective-${objective.id}`" :disabled="user==='student' || objective.completed" :checked="objective.completed" />
                                <label :for="`objective-${objective.id}`" class=" ml-5 text-sm">
                                    {{ objective.title }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
export default {
  props:['roadmap', 'user']
}
</script>

<style>
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
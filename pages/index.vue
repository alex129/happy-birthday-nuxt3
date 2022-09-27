<script lang="ts" setup>
import { onMounted, ref } from 'vue'
// eslint-disable-next-line no-undef
const config = useRuntimeConfig()
const getRandomPosition = () => {
  const randomNumber = (Math.random() * (80 - 20) + 20).toFixed(0)
  return randomNumber
}
const totalCats = ref([
  { show: false, position: getRandomPosition() },
  { show: false, position: getRandomPosition() },
  { show: false, position: getRandomPosition() },
  { show: false, position: getRandomPosition() }
])
const textStartButton = ref('Start')
onMounted(() => {})

const start = () => {
  totalCats.value.forEach((element, index) => {
    setTimeout(() => (element.show = true), index * 5500)
  })

  textStartButton.value = 'Atrapa uno!'
}
</script>
<template>
     <div class="dark:text-white px-5 h-full overflow-hidden">
          <div class="grid justify-items-center content-center h-full text-center gap-5">
               <h1>{{ config.public.happyBirthdayTitle }}</h1>
               <p>{{ config.public.happyBirthdayContent }}</p>
               <div v-for="(item, index) in totalCats" :key="index">
                    <img v-if="item.show" class="w-12 z-20 absolute bottom-0 animate-float-balloon transform transition duration-500 hover:scale-110" :style="`left: ${item.position}vw`" src="/assets/img/cat-baloon.webp" />
               </div>
               <button class="text-lg group" @click="start">
                    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                         <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                         <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                         <span class="relative">{{ textStartButton }}</span>
                    </span>
                    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
               </button>
          </div>
     </div>
</template>
<style></style>

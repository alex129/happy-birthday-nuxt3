<script lang="ts" setup>
import { ref, computed } from 'vue'
const config = useRuntimeConfig()

const getRandomPosition = () => {
  const randomNumber = (Math.random() * (80 - 20) + 20).toFixed(0)
  return parseInt(randomNumber)
}
const totalCats = ref<Cat[]>([
  { show: false, position: getRandomPosition(), caught: false },
  { show: false, position: getRandomPosition(), caught: false },
  { show: false, position: getRandomPosition(), caught: false },
  { show: false, position: getRandomPosition(), caught: false },
])
const textStartButton = ref('Start')
const started = ref(false)

const start = () => {
  totalCats.value.forEach((element, index) => {
    setTimeout(() => (element.show = true), index * 5500)
  })

  textStartButton.value = 'Atrapalos!'
  setTimeout(() => (started.value = true), 300)
}

const caughtCat = (cat) => {
  totalCats.value[cat].show = false
  totalCats.value[cat].caught = true

  if (allTrapped.value) {
    setTimeout(() => navigate(), 2000)
  }
}

const allTrapped = computed(() => {
  return totalCats.value.length === totalCats.value.filter((c) => c.caught).length
})

function navigate() {
  return navigateTo({
    path: '/gift',
  })
}
</script>
<template>
  <div class="dark:text-white px-5 h-full overflow-hidden">
    <div class="grid justify-items-center content-center h-full text-center gap-5">
      <h2>{{ config.public.happyBirthdayTitle }}</h2>
      <p>{{ config.public.happyBirthdayContent }}</p>
      <div v-for="(item, index) in totalCats" :key="index">
        <img
          v-if="item.show"
          class="w-12 z-20 absolute bottom-0 animate-float-balloon transform transition duration-500 hover:scale-110"
          :style="`left: ${item.position}vw`"
          src="/assets/img/cat-baloon.webp"
          @click="caughtCat(index)"
        />
      </div>
      <p v-if="started && !allTrapped">Atrapalos!</p>
      <p v-if="totalCats.some((c) => c.caught)">
        {{ totalCats.filter((c) => c.caught).length }} / {{ totalCats.length }} atrapados
      </p>
      <p v-if="allTrapped">Letsgooo has atrapado todos, abriendo el regalo</p>
      <button class="relative inline-block text-lg group" @click="start" v-if="!started">
        <span
          class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white"
        >
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span
            class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"
          ></span>
          <span class="relative">Start</span>
        </span>
        <span
          class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </button>
    </div>
  </div>
</template>
<style></style>

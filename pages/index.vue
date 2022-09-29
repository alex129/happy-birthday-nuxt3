<script lang="ts" setup>
import { useCatsStore } from '../store/cats'
import { getRandomPosition } from '../utils/utils'

const config = useRuntimeConfig()
const store = useCatsStore()

const textStartButton = ref('Start')
const started = ref(false)

onMounted(() => {
  for (let i = 0; i < 4; i++) {
    store.add({ position: getRandomPosition(), show: false, trapped: false })
  }
})

const start = () => {
  store.cats.forEach((element: Cat, index) => {
    setTimeout(() => (element.show = true), index * 5500)
  })

  textStartButton.value = 'Atrapalos!'
  setTimeout(() => (started.value = true), 300)
}

const trapCat = (cat) => {
  store.trap(cat)
  if (store.allTrapped) {
    setTimeout(() => navigate(), 5000)
  }
}

function navigate() {
  return navigateTo({
    path: '/gift',
  })
}
</script>
<template>
  <div class="dark:text-white px-5 h-full overflow-hidden">
    <div class="grid justify-items-center content-center h-full text-center">
      <h2>{{ config.public.happyBirthdayTitle }}</h2>
      <p class="my-12">{{ config.public.happyBirthdayContent }}</p>
      <div v-for="(cat, index) in (store.cats as Cat[])" :key="index">
        <img
          v-if="cat.show"
          class="w-12 z-20 absolute bottom-0 animate-float-balloon transform transition duration-500 hover:scale-110"
          :style="`left: ${cat.position}vw`"
          src="/assets/img/cat-baloon.webp"
          @click="trapCat(cat)"
        />
      </div>
      <p v-if="started && !store.allTrapped">Atrapalos!</p>
      <p v-if="store.cats.some((c) => c.trapped)" class="my-5">
        {{ store.cats.filter((c) => c.trapped).length }} / {{ store.cats.length }} atrapados
      </p>
      <div v-if="store.allTrapped" class="grid justify-items-center mt-5">
        <WaivyLoading text="Abriendo regalo ..." />
        <img class="w-10 mt-2" src="/assets/gif/naruto-loading.gif" />
      </div>
      <button v-if="!started" class="relative inline-block text-lg group" @click="start">
        <span
          class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white"
        >
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50" />
          <span
            class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"
          />
          <span class="relative">Start</span>
        </span>
        <span
          class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        />
      </button>
    </div>
  </div>
</template>
<style></style>

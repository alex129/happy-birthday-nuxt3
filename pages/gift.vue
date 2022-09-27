<!-- eslint-disable no-undef -->
<script lang="ts" setup>
const config = useRuntimeConfig()
</script>
<template>
     <div class="dark:text-white px-5 h-full overflow-hidden">
          <div class="grid justify-items-center content-center h-full text-center gap-5">
               <img class="w-20" src="/assets/gif/nyan-cat.webp" />
               <h2>{{ config.giftTitle }}</h2>
               <p>Location: ???</p>
               <p>Date: ???</p>
               <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span class="relative text-black group-hover:text-white"><NuxtLink to="/info">Info</NuxtLink></span>
               </a>
          </div>
     </div>
</template>
<style></style>

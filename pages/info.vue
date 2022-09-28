<!-- eslint-disable no-undef -->
<script lang="ts" setup>
const config = useRuntimeConfig()
</script>
<template>
  <div class="dark:text-white px-5 h-full overflow-hidden">
    <div class="grid justify-items-center content-center h-full text-center gap-5">
      <p>{{ config.public.extraInfo }}</p>
    </div>
  </div>
</template>
<style></style>

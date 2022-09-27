<!-- eslint-disable no-undef -->
<script lang="ts" setup>
const layout = 'main'
const setColorTheme = (newTheme: Theme) => {
     useColorMode().preference = newTheme
}
setColorTheme('dark')
</script>
<template>
     <div>
          <NuxtLayout :name="layout">
               <NuxtPage />
          </NuxtLayout>
     </div>
</template>
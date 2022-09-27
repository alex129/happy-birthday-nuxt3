<script lang="ts" setup>
const layout = 'main'
type Theme = 'light' | 'dark'
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
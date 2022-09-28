<script lang="ts" setup>
const props = defineProps({ text: { type: String, default: '' } })
const text = computed(() => {
  const data = []
  for (let i = 0; i < props.text.length; i++) {
    data.push(props.text[i])
  }
  console.log(data)
  return data
})
</script>
<template>
  <div class="waviy">
    <span
      v-for="(item, index) in text"
      :key="index"
      :style="`--i: ${index}`"
      :class="item === ' ' ? 'mx-1' : ''"
      >{{ item }}</span
    >
  </div>
</template>
<style>
.waviy {
  position: relative;
}
.waviy span {
  position: relative;
  display: inline-block;
  animation: flip 2s infinite;
  animation-delay: calc(0.2s * var(--i));
}
@keyframes flip {
  0%,
  80% {
    transform: rotateY(360deg);
  }
}
</style>

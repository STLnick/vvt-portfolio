<script setup>
import { ref } from 'vue';
const props = defineProps([ 'delay' ]);

const show = ref(false);
setTimeout(() => show.value = true, props.delay || 400);
</script>

<template>
  <Transition name="slide-fade">
    <slot v-if="show" />
  </Transition>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
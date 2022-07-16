<script setup>
const props = defineProps([ 'caption', 'heading', 'isOdd' ]);

// TODO: Access and use different colors based on isDark & isOdd
const background = props.isOdd ? 'bg-gray-300' : 'bg-gray-50';
</script>

<template>
  <div :class="`max-w-full ${background} p-4`">
    <h2 class="text-4xl text-emerald-600 underline underline-offset-4 tracking-widest">
      {{ heading }}
    </h2>
    <caption class="">
      {{ caption }}
    </caption>
    <slot />
  </div>
</template>

<style>

</style>
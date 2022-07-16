<script setup>
const props = defineProps([ 'caption', 'heading' ]);
</script>

<template>
  <div :class="`max-w-full flex justify-center bg-gray-50 odd:bg-gray-300 dark:bg-secondary-dark dark:odd:bg-secondary py-16 px-8`">
    <div class="w-full max-w-4xl">
      <h2 class="text-4xl text-primary-dark dark:text-primary-light underline underline-offset-4 tracking-widest">
        {{ heading }}
      </h2>
      <caption class="block text-left mt-2 mb-8 text-sm text-secondary dark:text-accent-light">
        {{ caption }}
      </caption>
      <slot />
    </div>
  </div>
</template>

<style>

</style>
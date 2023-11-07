<script setup>
const props = defineProps(["caption", "heading"]);
</script>

<template>
  <div
    :class="[
      'flex max-w-full justify-center py-16 px-8',
      'bg-gray-100 odd:bg-gray-300 dark:bg-secondary-dark dark:odd:bg-secondary',
    ]"
  >
    <div class="w-full max-w-4xl">
      <h2
        :class="[
          'text-4xl text-primary-dark dark:text-primary-light',
          'tracking-widest underline underline-offset-4',
        ]"
      >
        {{ heading }}
      </h2>
      <caption
        class="mt-2 mb-12 block text-left text-sm text-accent-dark dark:text-accent-light"
      >
        {{
          caption
        }}
      </caption>
      <slot />
    </div>
  </div>
</template>

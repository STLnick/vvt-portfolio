<script setup>
const props = defineProps(["name"]);
</script>

<template>
  <div class="w-screen bg-emerald-500 py-3 px-6 text-lg tracking-wide">
    <span class="">{{ name }}</span>
  </div>
</template>

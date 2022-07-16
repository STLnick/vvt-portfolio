<script setup>
import Section from './Section.vue';
const props = defineProps([ 'isOdd' ]);
</script>

<template>
  <Section heading="Fun" :isOdd="props.isOdd" />
</template>

<style>

</style>
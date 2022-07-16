<script setup>
import { ref } from 'vue';
import { FunSection, Hero, MeSection, WorkSection } from '@/components/sections';
</script>

<template>
  <Hero />

  <WorkSection />

  <MeSection :isOdd="true" />

  <FunSection />
  
</template>

<style>
</style>
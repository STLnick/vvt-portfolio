<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div>
    <header v-if="$route.meta.title">
      <NavBar/>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

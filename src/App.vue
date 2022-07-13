<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <NavBar name="Nick Ray" />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

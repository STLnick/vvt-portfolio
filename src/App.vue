<script setup>
import { nextTick, onMounted } from "vue";
import NavBar from "@/components/NavBar.vue";
import { DARK_MODE_COOKIE, getCookie, toggleDarkClass } from "@/utils";

onMounted(() => {
  if (
    !document.getElementById('app').classList.contains('dark')
    && getCookie(DARK_MODE_COOKIE) === 'true'
  ) {
    toggleDarkClass(true);
  }
});
</script>

<template>
  <div>
    <header v-if="$route.meta.title" class="sticky top-0 z-10">
      <NavBar/>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

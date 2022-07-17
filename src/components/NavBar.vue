<script setup>
import { ref, watch } from 'vue';
import { DARK_MODE_COOKIE, getCookie, setCookie, toggleDarkClass } from '@/utils';
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';
import MoonSVG from '@/icons/MoonSVG.vue';
import SunSVG from '@/icons/SunSVG.vue';

// Dark Mode
const darkMode = ref( getCookie(DARK_MODE_COOKIE) === 'true' );
toggleDarkClass(darkMode.value); // Set dark mode based on cookie initially
watch(darkMode, (newSetting) => {
  toggleDarkClass(newSetting);
  setCookie(DARK_MODE_COOKIE, newSetting ? 'true' : 'false');
});

const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({behavior: "smooth" });
};
</script>

<template>
  <div
    id="nav-bar"
    :class="[
      'w-screen py-3 px-6 text-lg tracking-wide',
      'transition-colors bg-primary dark:bg-secondary-dark',
      'flex justify-between',
    ]"
  >
    <!-- Left Side -->
    <div>
      <ul class="flex text-white">
        <li
          @click="scrollToSection('work-section')"
          class="mr-6 cursor-pointer hover:underline hover:underline-offset-2"
        >
          Work
        </li>
        <li
          @click="scrollToSection('me-section')"
          class="mr-6 cursor-pointer hover:underline hover:underline-offset-2"
        >
          Me
        </li>
        <li
          @click="scrollToSection('fun-section')"
          class="cursor-pointer hover:underline hover:underline-offset-2"
        >
          Fun
        </li>
      </ul>
    </div>
    <!-- Right side -->
    <SwitchGroup class="transition-all">
      <div class="flex items-center">
        <Switch
          v-model="darkMode"
          :class="darkMode ? 'bg-primary-dark' : 'bg-secondary'"
          class="relative inline-flex h-6 w-11 items-center rounded-full"
        >
          <span
            :class='darkMode ? "translate-x-6" : "translate-x-1"'
            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
          />
        </Switch>
        <SwitchLabel class="text-sm italic pl-2">
          <MoonSVG v-show="darkMode" class="text-white transition-all" />
          <SunSVG v-show="!darkMode" class="text-white transition-all" />
        </SwitchLabel>
      </div>
    </SwitchGroup>
  </div>
</template>

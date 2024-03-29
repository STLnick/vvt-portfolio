<script setup>
import { ref, watch } from "vue";
import {
  DARK_MODE_COOKIE,
  getCookie,
  setCookie,
  toggleDarkClass,
} from "@/utils";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import MoonSVG from "@/icons/MoonSVG.vue";
import SunSVG from "@/icons/SunSVG.vue";

const darkMode = ref(getCookie(DARK_MODE_COOKIE) === "true");
toggleDarkClass(darkMode.value); // Set dark mode based on cookie initially
watch(darkMode, (newSetting) => {
  toggleDarkClass(newSetting);
  setCookie(DARK_MODE_COOKIE, newSetting ? "true" : "false");
});

const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div
    id="nav-bar"
    :class="[
      'w-full py-3 px-6 text-lg tracking-wide',
      'bg-primary transition-colors dark:bg-secondary-dark',
      'flex justify-between overflow-hidden',
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
    <SwitchGroup class="mr-4 transition-all">
      <div class="flex items-center">
        <Switch
          v-model="darkMode"
          :class="darkMode ? 'bg-primary-dark' : 'bg-secondary'"
          class="relative inline-flex h-6 w-11 items-center rounded-full"
        >
          <span
            :class="darkMode ? 'translate-x-6' : 'translate-x-1'"
            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
          />
        </Switch>
        <SwitchLabel class="relative pl-2 text-sm italic">
          <MoonSVG
            :class="darkMode ? '' : 'translate-x-12'"
            class="absolute left-2 top-0 -translate-y-1/2 text-white transition delay-150 ease-in-out"
          />
          <SunSVG
            :class="darkMode ? 'translate-x-12' : ''"
            class="absolute left-2 top-0 -translate-y-1/2 text-white transition delay-150 ease-in-out"
          />
        </SwitchLabel>
      </div>
    </SwitchGroup>
  </div>
</template>

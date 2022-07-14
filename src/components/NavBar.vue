<script setup>
import { ref } from 'vue';
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';
import MoonSVG from '@/icons/MoonSVG.vue';

const darkMode = ref(false);
</script>

<template>
  <div class="w-screen bg-emerald-500 py-3 px-6 text-lg tracking-wide flex justify-between">
    <div>
      <ul class="flex text-white">
        <li class="mr-6">Work</li>
        <li class="mr-6">Me</li>
        <li>Fun</li>
      </ul>
    </div>
    <SwitchGroup>
      <div class="flex items-center">
        <Switch
          v-model="darkMode"
          :class="darkMode ? 'bg-teal-900' : 'bg-teal-700'"
          class="relative inline-flex h-6 w-11 items-center rounded-full"
        >
          <span
            :class='darkMode ? "translate-x-6" : "translate-x-1"'
            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
          />
        </Switch>
        <SwitchLabel class="text-sm italic pl-2">
          <MoonSVG class="text-white" :class="{ filled: darkMode }" />
        </SwitchLabel>
      </div>
    </SwitchGroup>
  </div>
</template>

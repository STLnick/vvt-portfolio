<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue';
import { ChevronUpIcon } from '@heroicons/vue/solid';
import { TransitionRoot } from '@headlessui/vue'

const props = defineProps([ 'item' ]);
const item = props.item;
</script>

<template>
  <Disclosure v-slot="{ open }">
    <div class="p-4">
      <!-- Panel activator -->
      <DisclosureButton class="w-full py-2 flex items-center dark:text-accent-light">
        <span class="basis-auto">{{ item.title }}</span>
        <ChevronUpIcon
          :class="open ? 'rotate-180 transform' : ''"
          class="h-9 w-9 mx-2 fill-secondary-dark dark:fill-accent-light transition-all"
        />
        <div class="w-2/3 p-px grow bg-secondary-lightest"></div>
      </DisclosureButton>
      <!-- Expanded content -->
      <TransitionRoot
        :show="open"
        enter="transition-opacity duration-75"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity duration-150"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DisclosurePanel class="text-gray-500 border-l-2 border-l-secondary-light dark:text-secondary-lightest transition-all ml-4 pl-2 pr-8">
          {{ item.content.text }}
        </DisclosurePanel>
      </TransitionRoot>
    </div>
  </Disclosure>
</template>

<style>

</style>
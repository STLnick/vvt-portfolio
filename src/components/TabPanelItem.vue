<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue';
import { ChevronUpIcon } from '@heroicons/vue/solid';
import { TransitionRoot } from '@headlessui/vue'

const props = defineProps([ 'post' ]);
const post = props.post;
</script>

<template>
  <Disclosure v-slot="{ open }">
    <div class="p-4">
      <!-- Panel activator -->
      <DisclosureButton class="py-2 flex">
        Concentration Game
        <ChevronUpIcon
          :class="open ? 'rotate-180 transform' : ''"
          class="h-5 w-5 fill-secondary-dark transition-all"
        />
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
        <DisclosurePanel class="text-gray-500 transition-all px-12">
          A simple card game of Concentration built using React, Node and MongoDB. High scores are recorded locally and were persisted in a database until atrophy shut it down.
        </DisclosurePanel>
      </TransitionRoot>
    </div>
  </Disclosure>
</template>

<style>

</style>
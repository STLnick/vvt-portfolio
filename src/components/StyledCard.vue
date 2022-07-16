<script setup>
import { computed } from 'vue'
import BreifcaseSVG from '@/icons/BreifcaseSVG.vue';

// Props
const props = defineProps([ 'properties' ]);
const properties = computed(() => props.properties || {});

// Properties
const heading = computed(() => properties.value.heading || '');
const topCaption = computed(() => properties.value.topCaption || '');
const content = computed(() => properties.value.content || '');
const footerText = computed(() => properties.value.footerText || '');
</script>

<template>
  <div class="max-w-sm w-full lg:max-w-xl flex flex-col lg:flex-row items-center">
    <div
      class="relative h-32 w-32 -mb-12 sm:mb-0 mr-0 sm:-mr-12 rounded flex-none overflow-hidden flex items-center justify-center bg-primary shadow-md"
    >
      <BreifcaseSVG class="h-12 w-12 text-white" />
    </div>

    <div class="bg-white p-4 pt-16 w-1/2 sm:pt-4 pl-4 sm:pl-16 rounded flex flex-col justify-between leading-normal shadow-lg">
      <div class="mb-8">
        <!-- Top caption -->
        <p v-if="topCaption" class="text-sm text-gray-600 flex items-center">
          {{ topCaption }}
        </p>

        <!-- Heading  -->
        <div v-if="heading" class="text-gray-900 font-bold text-xl mb-2">
          {{ heading }}
        </div>

        <!-- Content text -->
        <p v-if="content" class="text-gray-700 text-base">
          {{ content }}
        </p>

        <!-- Default slot content -->
        <slot />
      </div>

      <!-- Footer content -->
      <div v-if="footerText" class="flex items-center">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">
            {{footerText}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
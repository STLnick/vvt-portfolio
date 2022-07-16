<script setup>
import { computed } from 'vue'
import BriefcaseSVG from '@/icons/BriefcaseSVG.vue';

const LAYOUT_STYLES = {
  left: {
    container: 'md:flex-row',
    contentWrapper: 'pl-4 sm:pl-16',
    iconWrapper: 'mr-0 sm:-mr-12',
  },
  right: {
    container: 'md:flex-row-reverse',
    contentWrapper: 'pr-4 sm:pr-16',
    iconWrapper: 'ml-0 sm:-ml-12',
  },
};

// Props
const props = defineProps([ 'properties' ]);
const properties = computed(() => props.properties || {});

// Text definitions from properties
const heading = computed(() => properties.value.heading || '');
const topCaption = computed(() => properties.value.topCaption || '');
const content = computed(() => properties.value.content || '');
const footerText = computed(() => properties.value.footerText || '');

// Computed wrapper classes for left/right layout of icon
const layoutKey = computed(() => properties.value.right ? 'right' : 'left');
const layoutStyles = computed(() => LAYOUT_STYLES[layoutKey.value]);
</script>

<template>
  <div :class="`flex flex-col items-center ${layoutStyles.container}`">
    <div :class="`relative h-32 w-32 -mb-12 sm:mb-0 rounded flex-none overflow-hidden flex items-center justify-center bg-primary shadow-md ${layoutStyles.iconWrapper}`">
      <BriefcaseSVG class="h-12 w-12 text-white" />
    </div>

    <div :class="`bg-white w-1/2 p-4 pt-16 sm:pt-4 rounded flex grow flex-col justify-between leading-normal shadow-lg' ${layoutStyles.contentWrapper}`">
      <div class="mb-8">
        <!-- Top caption -->
        <p v-if="topCaption" class="text-sm text-secondary flex items-center">
          {{ topCaption }}
        </p>

        <!-- Heading  -->
        <div v-if="heading" class="text-secondary-dark font-bold text-xl mb-2">
          {{ heading }}
        </div>

        <div class="w-full p-px mb-1 bg-accent lg:w-2/3"></div>

        <!-- Content text -->
        <p v-if="content" class="text-secondary">
          {{ content }}
        </p>

        <!-- Default slot content -->
        <div class="text-secondary">
          <slot />
        </div>
      </div>

      <!-- Footer content -->
      <div v-if="footerText" class="flex items-center">
        <div class="text-xs">
          <p class="text-primary-dark leading-none tracking-wide">
            {{footerText}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
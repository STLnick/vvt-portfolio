<script setup>
import { computed } from "vue";
import BriefcaseSVG from "@/icons/BriefcaseSVG.vue";

const LAYOUT_STYLES = {
  left: {
    container: "md:flex-row",
    contentWrapper: "pl-4 sm:pl-16",
    iconWrapper: "mr-0 sm:-mr-12",
  },
  right: {
    container: "md:flex-row-reverse",
    contentWrapper: "pr-4 sm:pr-16",
    iconWrapper: "ml-0 sm:-ml-12",
  },
};

// Props
const props = defineProps(["properties"]);
const properties = computed(() => props.properties || {});

// Text definitions from properties
const heading = computed(() => properties.value.heading || "");
const topCaption = computed(() => properties.value.topCaption || "");
const content = computed(() => properties.value.content || "");
const footerText = computed(() => properties.value.footerText || "");

// Computed wrapper classes for left/right layout of icon
const layoutKey = computed(() => (properties.value.right ? "right" : "left"));
const layoutStyles = computed(() => LAYOUT_STYLES[layoutKey.value]);
</script>

<template>
  <div :class="`flex flex-col items-center ${layoutStyles.container}`">
    <div
      :class="[
        'relative h-32 w-32 rounded bg-primary shadow-md',
        'flex flex-none items-center justify-center overflow-hidden',
        '-mb-12 sm:mb-0',
        layoutStyles.iconWrapper,
      ]"
    >
      <BriefcaseSVG class="h-16 w-16 text-white" />
    </div>

    <div
      :class="[
        'rounded bg-white p-4 pt-16 leading-normal shadow-lg sm:w-1/2 sm:pt-4',
        'flex grow flex-col justify-between',
        'dark:bg-secondary-light/40',
        layoutStyles.contentWrapper,
      ]"
    >
      <div class="mb-8">
        <!-- Top caption -->
        <p
          v-if="topCaption"
          class="flex items-center text-sm text-secondary dark:text-secondary-lightest"
        >
          {{ topCaption }}
        </p>

        <!-- Heading  -->
        <div
          v-if="heading"
          class="mb-2 text-xl font-bold text-secondary-dark dark:text-white"
        >
          {{ heading }}
        </div>

        <div class="mb-1 w-full bg-accent p-px lg:w-2/3"></div>

        <!-- Content text -->
        <p v-if="content" class="text-secondary dark:text-secondary-lightest">
          {{ content }}
        </p>

        <!-- Default slot content -->
        <div class="text-secondary dark:text-secondary-lightest">
          <slot />
        </div>
      </div>

      <!-- Footer content -->
      <div v-if="footerText" class="flex items-center">
        <div class="text-xs">
          <p
            class="leading-none tracking-wide text-primary-dark dark:text-primary-light"
          >
            {{ footerText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

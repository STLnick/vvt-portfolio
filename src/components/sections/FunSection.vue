<script setup>
import { ref } from 'vue';
import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from '@headlessui/vue';
import SawSVG from '@/icons/SawSVG.vue';
import Section from './Section.vue';
import TabPanelItem from '../TabPanelItem.vue';

const categories = ref({
  Coding: [
    {
      id: 1,
      title: 'Concentration Game',
      link: {
        href: 'https://game-concentration.netlify.app/',
        text: 'Play the game now'
      },
      content: {
        text: 'A simple card game of Concentration built using <em>React</em>, <em>Node</em> and <em>MongoDB</em>. The Top 10 High scores are read from, updated and recorded in a MongoDB database.',
      },
    },
  ],
  Woodworking: [
    {
      id: 1,
      title: '"Foldable" Chair',
      content: {
        text: 'A 2-piece chair that can have the seat slide in the top of the back support for storage. Slide the seat supports through the slot below the backrest and just sit down.',
      }
    },
    {
      id: 2,
      title: 'Footstool',
      content: {
        text: 'This is about as far from \'pretty\' as you can get. That said this stool has been in service for over 10 years. It\'s due for some TLC  but it does good for me every day.',
      }
    },
  ],
});
</script>

<template>
  <Section id="fun-section" heading="Fun" caption="And my pursuit of it.">
    <!-- <SawSVG class="h-32 w-32 fill-secondary-dark dark:fill-white" /> -->

    <TabGroup>
      <TabList class="flex space-x-1 rounded-xl bg-secondary/40 p-1">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-primary',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2',
              selected
                ? 'bg-white dark:bg-secondary-light/60 shadow'
                : 'text-gray-100 dark:text-secondary-lightest hover:bg-white/[0.12] hover:text-white dark:hover:text-white',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <div class="w-full p-px mt-1 bg-accent-light"></div>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(items, idx) in Object.values(categories)"
          :key="idx"
          :class="[
            'rounded-xl bg-white dark:bg-secondary p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2',
          ]"
        >
          <ul>
            <template v-for="(item, i) in items" :key="`${item.id}-${i}`">
              <TabPanelItem :item="item" />
            </template>
          </ul>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </Section>
</template>

<style>

</style>
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
    // TODO: Replace with items that I've done that are fun/silly/interesting in coding
    {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2,
    },
  ],
  Woodworking: [
    // TODO: Replace with items that I've done that are fun/silly/interesting in Woodworking
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16,
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
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <div class="w-full p-px mt-1 bg-accent-light"></div>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          :class="[
            'rounded-xl bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
          <ul>
            <template v-for="(post, i) in posts" :key="`${post.id}-${i}`">
              <TabPanelItem :post="post" />
            </template>
          </ul>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </Section>
</template>

<style>

</style>
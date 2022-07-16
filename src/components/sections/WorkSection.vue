<script setup>
import { ref } from 'vue';
import StyledCard from '../StyledCard.vue';
import Section from './Section.vue';
import SlideFadeTransition from '@/transitions/SlideFade.vue';
const props = defineProps([ 'isOdd' ]);

const isShowing = ref(true);

// TODO: Double check dates on phases
const phase1Properties = {
  content: 'My first full-time development position. This incredible Business Management application is a medley of Wordpress, PHP/Laravel, and React deployed on a traditional server but eventually incorporating AWS Services as well.',
  footerText: 'Nov 2020 - Apr 2021',
  heading: 'Curate - Curate Classic',
  topCaption: 'Full Stack Developer',
  right: true,
};
const phase2Properties = {
  content: 'A second chapter in my time with the company. We began rebuilding the application entirely using Vue, Vuetify and AWS Services.',
  footerText: 'May 2021 - Present',
  heading: 'Curate - Curate Platform',
  topCaption: 'Software Engineer II',
};
</script>

<template>
  <Section heading="Work" caption="The things I've typed." :isOdd="props.isOdd">
      <div class="container mx-auto flex flex-col items-center">
        <!-- Curate Platform -->
        <SlideFadeTransition class="my-8" :delay="400">
          <StyledCard class="min-w-[500px] max-w-md sm:max-w-xl" :properties="phase2Properties">
            <ul class="list-disc ml-4 px-2 flex">
              <li class="flex-auto">1</li>
              <li class="flex-auto">2</li>
              <li class="flex-auto">3</li>
            </ul>
          </StyledCard>
        </SlideFadeTransition>

        <!-- Curate Classic -->
        <SlideFadeTransition class="my-4" :delay="400">
          <StyledCard class="min-w-[500px] max-w-md sm:max-w-xl" :properties="phase1Properties" />
        </SlideFadeTransition>

      </div>
  </Section>
</template>

<style>

</style>
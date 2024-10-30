<script setup>
import GoogleDriveLogo from "../../icons/GoogleDriveSVG.vue";
import StyledCard from "../StyledCard.vue";
import Section from "./Section.vue";
import SlideFadeTransition from "@/transitions/SlideFade.vue";

const props = defineProps(["isOdd"]);
const phase1Properties = {
  content:
    "My first full-time development position. This incredible Business Management application is a medley of Wordpress, PHP/Laravel, and React deployed on a traditional server but eventually incorporating AWS Services as well.",
  footerText: "Nov 2020 - Jan 2022",
  heading: "Curate - Curate Classic",
  topCaption: "Full Stack Developer",
  right: true,
};
const phase2Properties = {
  content:
    "A second chapter in my time with the company. We began rebuilding the application entirely using Vue, Vuetify and AWS Services.",
  footerText: "Jan 2022 - Present",
  heading: "Curate - Curate Platform",
  topCaption: "Software Engineer II",
};
const resumeUrl =
  "https://drive.google.com/file/d/1riCifV0WlTqu2JqIgVoEeWssPhHGJk8p/view";
</script>

<template>
  <Section id="work-section" heading="Work" caption="The things I've typed.">
    <div class="container mx-auto flex flex-col items-center">
      <!-- Curate Platform -->
      <SlideFadeTransition class="my-8" :delay="400">
        <StyledCard
          class="max-w-md sm:max-w-xl md:min-w-[500px]"
          :properties="phase2Properties"
        />
      </SlideFadeTransition>
      <!-- Curate Classic -->
      <SlideFadeTransition class="my-4" :delay="400">
        <StyledCard
          class="max-w-md sm:max-w-xl md:min-w-[500px]"
          :properties="phase1Properties"
        />
      </SlideFadeTransition>
      <div class="mt-10 mb-2 items-center">
        <span
          :class="[
            'flex cursor-pointer items-center rounded bg-accent-dark px-6 py-4',
            'transition-shadow hover:shadow-md hover:shadow-secondary-light',
            'dark:hover:shadow dark:hover:shadow-accent',
          ]"
        >
          <GoogleDriveLogo />
          <a
            :class="[
              'align-center flex',
              'font-semibold tracking-wider text-white dark:text-secondary-lightest',
            ]"
            :href="resumeUrl"
            target="_blank"
          >
            Resume
          </a>
        </span>
      </div>
    </div>
  </Section>
</template>

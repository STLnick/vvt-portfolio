<script setup>
import Section from './Section.vue';
import BadgeCheckSVG from '@/icons/BadgeCheckSVG.vue';
</script>

<template>
  <Section id="me-section" heading="Me" caption="Myself and I." >
    <div class="container mx-auto flex flex-col items-center text-center">
      <p class="min-w-[500px] max-w-md sm:max-w-xl text-secondary dark:text-white mt-8 text-xl">
        A Missouri native, St. Louis city-dwelling, key-smashing, video-game playing guy.
      </p>
      <p class="min-w-[500px] max-w-md sm:max-w-xl text-secondary dark:text-white my-8 text-xl">
        That also likes to go on rides with anything that has two wheels, make stuff outta wood and read some books.
      </p>

      <div class="w-full sm:w-2/3 p-px mt-6 mb-12 bg-accent"></div>

      <div class="bg-primary-dark p-3 py-4 rounded shadow-lg mb-8 flex items-center justify-center">
        <BadgeCheckSVG class="mr-2"/> 
        <p class="flex justify-center w-72 sm:w-96 text-white">
          Will help with nearly anything with the right amount of tacos and/or coffee offered
        </p>
      </div>
      <div class="bg-primary-dark p-3 py-4 rounded shadow-lg mb-8 flex items-center justify-center">
        <BadgeCheckSVG class="mr-2"/> 
        <p class="flex justify-center w-72 sm:w-96 text-white items-center">
          Member of the Countless Neglected Hobbies club. 
        </p>
      </div>
      <div class="bg-primary-dark p-3 py-4 rounded shadow-lg flex items-center justify-center">
        <BadgeCheckSVG class="mr-2"/> 
        <p class="flex justify-center w-72 sm:w-96 text-white items-center">
          Frequently say "I'm keeping this because I'll be able to use it one day..."
        </p>
      </div>
    </div>
  </Section>
</template>

<style>

</style>
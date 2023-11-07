<script setup>
import Section from "./Section.vue";
import BadgeCheckSVG from "@/icons/BadgeCheckSVG.vue";
</script>

<template>
  <Section id="me-section" heading="Me" caption="Myself and I.">
    <div class="container mx-auto flex flex-col items-center text-center">
      <p
        class="mt-8 max-w-md text-lg text-secondary dark:text-white sm:max-w-xl sm:text-xl md:min-w-[500px]"
      >
        A Missouri native, St. Louis city-dwelling, key-smashing, video-game
        playing guy.
      </p>
      <p
        class="my-8 max-w-md text-lg text-secondary dark:text-white sm:max-w-xl sm:text-xl md:min-w-[500px]"
      >
        That also likes to go on rides with anything that has two wheels, make
        stuff outta wood and read some books.
      </p>

      <div class="mt-6 mb-12 w-full bg-accent p-px sm:w-2/3"></div>

      <div
        class="mb-8 flex items-center justify-center rounded bg-primary-dark p-3 py-4 shadow-lg"
      >
        <BadgeCheckSVG class="mr-2" />
        <p class="flex w-72 justify-center text-white sm:w-96">
          Will help with nearly anything with the right amount of tacos and/or
          coffee offered
        </p>
      </div>
      <div
        class="mb-8 flex items-center justify-center rounded bg-primary-dark p-3 py-4 shadow-lg"
      >
        <BadgeCheckSVG class="mr-2" />
        <p class="flex w-72 items-center justify-center text-white sm:w-96">
          Member of the Countless Neglected Hobbies club.
        </p>
      </div>
      <div
        class="flex items-center justify-center rounded bg-primary-dark p-3 py-4 shadow-lg"
      >
        <BadgeCheckSVG class="mr-2" />
        <p class="flex w-72 items-center justify-center text-white sm:w-96">
          Frequently say "I'm keeping this because I'll be able to use it one
          day..."
        </p>
      </div>
    </div>
  </Section>
</template>

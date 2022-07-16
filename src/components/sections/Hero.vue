<script setup>
import SlideFadeTransition from '@/transitions/SlideFade.vue';
</script>

<template>
  <div>
    <div
      class="landing bg-black bg-center bg-no-repeat bg-cover h-screen transition-all px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-center lg:flex-col lg:py-16 lg:px-8"
    >
        <div class="text-center">
          <SlideFadeTransition :delay="400">
            <h2
              class="transition-all text-shadow-dark dark:text-shadow-light leading-normal text-primary-dark rounded-md dark:text-primary bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 sm:text-6xl md:text-7xl md:leading-normal font-bold mb-2 drop-shadow-lg"
            >
              Nick Ray
            </h2>
          </SlideFadeTransition>
          <SlideFadeTransition :delay="550">
            <p class="transition-all text-lg sm:text-xl text-secondary-dark bg-white dark:text-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 py-1 px-2 rounded-md">
              A JavaScript Engineer somewhere on the Dunning-Kruger curve.
            </p>
          </SlideFadeTransition>
        </div>
    </div>
  </div>
</template>

<style>
.landing {
  background-image: url('/assets/space.jpg');
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1) 90%, rgba(0,0,0,0));
}
.dark .landing {
  background-image: url('/assets/dark-space.jpg');
}
</style>
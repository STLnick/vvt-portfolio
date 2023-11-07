<script setup>
import SlideFadeTransition from "@/transitions/SlideFade.vue";
</script>

<template>
  <div>
    <div
      class="landing flex h-screen items-center justify-center bg-black bg-cover bg-center bg-no-repeat px-4 py-12 transition-all sm:px-6 lg:py-16 lg:px-8"
    >
      <div class="text-center">
        <SlideFadeTransition :delay="400">
          <h2
            :class="[
              'text-shadow-dark dark:text-shadow-light transition-all',
              'rounded-md leading-normal text-primary-dark dark:text-primary',
              'bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40',
              'mb-2 text-6xl font-bold drop-shadow-lg md:text-7xl md:leading-normal',
            ]"
          >
            Nick Ray
          </h2>
        </SlideFadeTransition>
        <SlideFadeTransition :delay="550">
          <p
            class="rounded-md bg-white bg-opacity-40 py-1 px-2 text-lg text-secondary-dark transition-all dark:bg-black dark:bg-opacity-40 dark:text-white sm:text-xl"
          >
            A JavaScript Engineer somewhere on the Dunning-Kruger curve.
          </p>
        </SlideFadeTransition>
      </div>
    </div>
  </div>
</template>

<style>
.landing {
  background-image: url("/assets/space.jpg");
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1) 90%,
    rgba(0, 0, 0, 0)
  );
}
.dark .landing {
  background-image: url("/assets/dark-space.jpg");
  mask-image: unset;
}
</style>

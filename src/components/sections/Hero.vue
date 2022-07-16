<script setup>
import SlideFadeTransition from '@/transitions/SlideFade.vue';
</script>

<template>
  <div>
    <div
      class="landing h-screen  px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-center lg:flex-col lg:py-16 lg:px-8"
    >
        <div class="text-center">
          <SlideFadeTransition :delay="400">
            <h2
              class="heading text-4xl sm:text-6xl md:text-7xl font-bold mb-2 drop-shadow-lg"
            >
              Nick Ray
            </h2>
          </SlideFadeTransition>
          <SlideFadeTransition :delay="550">
            <p class="text-lg sm:text-xl text-white bg-black bg-opacity-40 py-1 px-2 rounded">
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1) 90%, rgba(0,0,0,0));
  transition: background-image 1s ease;
}
.dark .landing {
  background-image: url('/assets/dark-space.jpg');
}
.heading {
  background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.5;
}
</style>
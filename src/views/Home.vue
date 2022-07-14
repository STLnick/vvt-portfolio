<script setup>
</script>

<template>
  <div>
    <div
      class="landing mx-auto max-w-screen-xl h-screen px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-center lg:flex-col lg:py-16 lg:px-8"
    >
      <h2
        class="heading text-4xl font-bold sm:text-6xl mb-2"
      >
        Nick Ray
      </h2>
      <p class="text-xl text-white bg-black bg-opacity-40 py-1 px-2 rounded">
        A JavaScript Engineer doing his best to climb the Dunning-Kruger curve.
      </p>
    </div>
  </div>
</template>

<style>
.landing {
  background-image: url('/assets/space.png');
}
.heading {
  background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.5;
}
</style>
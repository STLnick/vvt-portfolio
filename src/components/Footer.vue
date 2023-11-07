<template>
  <footer
    :class="[
      'h-50 bg-primary-dark dark:bg-secondary',
      'flex flex-col items-center justify-between sm:flex-row',
      'px-3 py-4 text-sm text-gray-200 dark:text-secondary-light',
    ]"
  >
    <div class="my-1 sm:my-0">
      <span class="mr-1 align-baseline text-xs">Built with</span> Vue &middot;
      Tailwind &middot; Headless UI
    </div>
    <div class="my-1 sm:my-0">
      <span class="mr-1 align-baseline text-xs">Hosted using</span> AWS Route 53
      &middot; CloudFront &middot; S3
    </div>
  </footer>
</template>

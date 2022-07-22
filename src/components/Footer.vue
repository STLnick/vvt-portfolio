<template>
  <footer :class="[
    'h-50 bg-primary-dark dark:bg-secondary',
    'flex flex-col sm:flex-row justify-between items-center',
    'px-3 py-4 text-gray-200 dark:text-secondary-light text-sm',
  ]">
    <div class="my-1 sm:my-0">
      <span class="text-xs mr-1 align-baseline">Built with</span> Vue &middot; Tailwind &middot; Headless UI
    </div>
    <div class="my-1 sm:my-0">
      <span class="text-xs mr-1 align-baseline">Hosted using</span> AWS Route 53 &middot; CloudFront &middot; S3
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

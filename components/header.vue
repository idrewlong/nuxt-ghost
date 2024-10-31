<template>
  <div class="flex flex-row gap-4">
    <img
      src="https://placeholder.pics/svg/640x480"
      alt="Placeholder"
      loading="lazy"
      width="640"
      height="480"
      title="Placeholder"
    />
    <!-- Internal Link -->
    <NuxtLink to="/" rel="next" class="text-black no-underline">Home</NuxtLink>
    <!-- External Link -->
    <NuxtLink to="/" rel="external" class="text-black no-underline"
      >Other</NuxtLink
    >
  </div>
</template>

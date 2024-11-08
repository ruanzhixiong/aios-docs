<template>
  <div class="font-heading flex flex-col items-center justify-center px-4 py-6 md:px-8">
    <HeroSection />
    <div class="mb-16 flex w-full flex-col items-center"></div>
    <FeatureSection />
    <ParllexScroll />
    <Testimonials />
  </div>
</template>

<script setup lang="ts">
const config = useConfig();
useSeoMeta({
  title: `Inspira UI: Build beautiful websites using Vue & Nuxt`,
  ogTitle: `Inspira UI: Build beautiful websites using Vue & Nuxt`,
  description:
    "Open Source components to build stunning animated interfaces effortlessly using Vue & Nuxt.",
  ogDescription:
    "Open Source components to build stunning animated interfaces effortlessly using Vue & Nuxt.",
  ogImage: config.value.site.ogImage,
  twitterCard: "summary_large_image",
});
</script>

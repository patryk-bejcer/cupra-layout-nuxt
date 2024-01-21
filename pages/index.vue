<template>
  <div>
    <HeroSection />
    <FeatureSection />
    <CarCarousel />
    <Features />
    <Form />
  </div>
</template>

<script setup>
import HeroSection from "~/components/sections/Hero.vue";
import FeatureSection from "~/components/sections/Feature.vue";
import CarCarousel from "~/components/sections/Cars.vue";
import Features from "~/components/sections/Features.vue";
import Form from "~/components/sections/Form.vue";
</script>

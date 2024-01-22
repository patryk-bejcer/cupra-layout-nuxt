<template>
  <section class="carousel-section bg-whiteGray py-14 md:py-[6.5rem]">
    <CarCarousel :cars="cars" />
  </section>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import CarCarousel from "~/components/shared/CarCarousel.vue";
import type { Cars } from "~/types";
import carList from "~/utils/carList";

const cars: Ref<Cars> = ref(carList);
</script>

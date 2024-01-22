<template>
  <section class="carousel-section bg-whiteGray py-14 md:py-[103px]">
    <CarCarousel :cars="cars" />
  </section>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import CarCarousel from "~/components/shared/CarCarousel.vue";
import type { Cars } from "~/types";

const cars: Ref<Cars> = ref([
  {
    name: "Nowa CUPRA Formentor",
    imageSrc: "/images/cars/cupra-formentor.webp",
    leasingInfo: "Dostępny w leasingu z 0% opłaty własnej",
    monthlyRate: "1943",
    totalPrice: "179 600",
  },
  {
    name: "Nowa CUPRA Formentor VZ",
    imageSrc: "/images/cars/cupra-formentor.webp",
    leasingInfo: "Dostępny w leasingu z 0% opłaty własnej",
    monthlyRate: "1553",
    totalPrice: "152 400",
  },
  {
    name: "Nowa CUPRA Ateca",
    imageSrc: "/images/cars/cupra-ateca.webp",
    leasingInfo: "Dostępny w leasingu z 0% opłaty własnej",
    monthlyRate: "1943",
    totalPrice: "179 600",
  },
  {
    name: "Nowa CUPRA Born",
    imageSrc: "/images/cars/cupra-born.webp",
    leasingInfo: "Dostępny w leasingu z 0% opłaty własnej",
    monthlyRate: "1943",
    totalPrice: "179 600",
  },
  {
    name: "Leon",
    imageSrc: "/images/cars/cupra-leon.webp",
    leasingInfo: "Dostępny w leasingu z 0% opłaty własnej",
    monthlyRate: "1943",
    totalPrice: "179 600",
  },
  {
    name: "Leon Sportstourer",
    imageSrc: "/images/cars/cupra-leon-sportstourer.webp",
    leasingInfo: "Dostępny w leasingu z 0% opłaty własnej",
    monthlyRate: "1601",
    totalPrice: "156 200",
  },
]);
</script>

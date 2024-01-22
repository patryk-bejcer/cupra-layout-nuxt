<template>
  <splide :options="splideOptions">
    <splide-slide v-for="(car, index) in cars" :key="index">
      <div class="flex flex-col items-center text-center">
        <h2 class="text-h2 font-light mb-14">{{ car.name }}</h2>
        <img :src="car.imageSrc" :alt="car.name" class="mb-9" />
        <p class="text-sm text-gray mb-12">Akumulator 58 kWh moc do 204 KM²</p>
        <div
          class="flex flex-col gap-x-12 gap-y-6 md:flex-row md:items-start md:gap-y-0 mb-12"
        >
          <p class="price text-sm text-gray max-w-40">
            {{ car.leasingInfo }}
          </p>
          <p class="price text-sm text-gray">
            Rata netto/mies. od*
            <span class="block text-h4 font-bold text-black"
              >{{ car.monthlyRate }} zł</span
            >
          </p>
          <p class="price text-sm text-gray">
            Cena brutto już od
            <span class="block text-h4 font-bold text-black"
              >{{ car.totalPrice }} zł</span
            >
          </p>
        </div>
        <Btn
          variant="secondary"
          href="#test-drive-form"
          title="Umów się na jazdę próbną"
        >
          Umów jazdę próbną
        </Btn>
      </div>
    </splide-slide>
  </splide>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import Btn from "~/components/ui/Btn.vue";
import type { Cars } from "~/types";

interface CarCarouselProps {
  cars: Cars;
}

const props = defineProps<CarCarouselProps>();

const splideOptions = ref({
  type: "loop",
  perPage: 2,
  perMove: 1,
  gap: "14rem",
  pagination: false,
  arrows: true,
  padding: {
    left: "0.75rem",
    right: "0.75rem",
  },
  focus: "center",
  breakpoints: {
    768: {
      perPage: 1,
      padding: { left: "5rem", right: "5rem" },
    },
  },
});
</script>

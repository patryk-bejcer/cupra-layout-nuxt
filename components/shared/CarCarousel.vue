<template>
  <div>
    <splide :options="splideOptions">
      <splide-slide v-for="(car, index) in cars" :key="index">
        <div class="slide-content flex flex-col items-center text-center">
          <h2 class="mb-14 text-h2 font-light">{{ car.name }}</h2>
          <img class="mb-9" :src="car.imageSrc" :alt="car.name" />
          <p class="price mb-12 text-sm text-gray">
            Akumulator 58 kWh moc do 204 KM²
          </p>
          <div
            class="info mb-12 flex flex-col gap-x-12 gap-y-6 md:flex-row md:items-start md:gap-y-0"
          >
            <p class="price max-w-40 text-sm text-gray">
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
          <Button
            variant="secondary"
            href="#test-drive-form"
            title="Umów się na jazdę próbną"
          >
            Umów jazdę próbną
          </Button>
        </div>
      </splide-slide>
    </splide>
  </div>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import Button from "~/components/ui/Button.vue";
import type { Cars } from "~/types";

interface CarCarouselProps {
  cars: Cars;
}

const props = defineProps<CarCarouselProps>();

const splideOptions = ref({
  type: "loop",
  perPage: 2,
  perMove: 1,
  gap: "15.5rem",
  pagination: false,
  arrows: true,
  padding: {
    left: "1%",
    right: "1%",
  },
  focus: "center",
  breakpoints: {
    768: {
      perPage: 1,
      padding: { left: "20px", right: "20px" },
    },
  },
});
</script>

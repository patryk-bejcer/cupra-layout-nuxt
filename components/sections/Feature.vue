<template>
  <section class="feature-section bg-darkGray py-14 md:py-[104px]">
    <div class="container mx-auto flex flex-wrap items-center px-4 md:px-6">
      <div
        class="mb-4 flex w-full flex-col justify-between text-white md:mb-6 md:w-3/5 md:pr-4"
      >
        <div>
          <div class="mb-4 max-w-xl md:mb-6">
            <h2 class="mb-3 text-h2 md:mb-4 md:text-h1">WYPRÓBUJ</h2>
            <p class="mb-3 text-base text-gray md:mb-4 md:text-h4">
              Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj samochody,
              które są wyjątkowym połączeniem technologii, mocy, elegancji i
              komfortu.
            </p>
          </div>

          <img
            src="/images/feature1.webp"
            alt="Car Image 1"
            class="mb-4 h-auto w-full md:mb-8"
          />

          <p class="mb-4 text-sm text-gray md:mb-16">
            Design inspirowany wyścigami, stworzony z niezwykłą dbałością o
            detale.
          </p>

          <div class="mb-4 max-w-lg md:mb-0">
            <h3 class="mb-3 text-h3 md:mb-4 md:text-h3">TYLKO DLA ODWAŻNYCH</h3>
            <p class="mb-8 text-base text-gray md:text-h4">
              Model CUPRA, który idealnie wpisuje się w DNA marki. Unikalny SUV
              coupé, wyjątkowy, odważny i innowacyjny – zapewni Ci to, co
              najlepsze w marce CUPRA.
            </p>
            <Btn variant="accent" href="#test-drive-form">
              Umów jazdę próbną
            </Btn>
          </div>
        </div>
      </div>

      <div
        class="mt-4 flex w-full flex-col justify-end md:mt-32 md:w-2/5 md:pl-4"
      >
        <img
          src="/images/feature2.webp"
          alt="Car Image 2"
          class="mb-4 h-auto w-full md:mb-8"
        />

        <p class="mb-4 text-sm text-gray md:mb-0">
          Design inspirowany wyścigami, stworzony z niezwykłą dbałością o
          detale.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Btn from "~/components/ui/Btn.vue";

export default {
  name: "FeatureSection",
  components: { Btn },
};
</script>

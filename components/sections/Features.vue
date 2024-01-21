<template>
  <section
    class="features-section bg-darkGray py-14 pt-16 text-white md:pb-[96px] md:pt-[172px]"
  >
    <div
      class="container mx-auto flex flex-wrap items-center gap-y-8 px-4 md:gap-y-[120px] md:px-6"
    >
      <div class="feature-item flex w-full flex-col md:flex-row">
        <div class="mb-4 flex-1 md:mb-0">
          <img
            src="/images/features-1.webp"
            alt="Technologia"
            class="h-auto w-full max-w-full object-cover md:h-[520px] md:max-w-[846px]"
          />
        </div>
        <div
          class="max-w-full flex-1 bg-darkGray pb-4 md:h-[332px] md:max-w-[530px] md:translate-x-[-100px] md:pl-24"
        >
          <h5 class="mb-3 text-h5">Technologia</h5>
          <h3 class="pb-6 text-h3 md:pb-12">
            Poczuj pełną wolność <br />
            jazdy dzięki licznym innowacjom.
          </h3>
          <Button
            variant="primary"
            href="#test-drive-form"
            title="Umów się na jazdę próbną"
          >
            Umów jazdę próbną
          </Button>
        </div>
      </div>

      <div class="feature-item flex w-full flex-col md:flex-row">
        <div class="flex-1 md:order-last">
          <img
            src="/images/features-3.webp"
            alt="Car Interior"
            class="h-auto w-full max-w-full object-cover md:h-[520px] md:max-w-[768px]"
          />
        </div>
        <div
          class="z-10 mb-4 max-w-full flex-1 bg-darkGray py-4 md:mb-0 md:h-[332px] md:max-w-[580px] md:translate-x-24 md:px-4 md:pr-[117px]"
        >
          <h5 class="mb-3 text-h5">Potęga Designu</h5>
          <h3 class="pb-6 text-h3 md:pb-12">
            Crossover emanujący gracją, dynamizmem i czystym wyrafinowaniem.
          </h3>
          <Button
            variant="primary"
            href="#test-drive-form"
            title="Umów się na jazdę próbną"
          >
            Umów jazdę próbną
          </Button>
        </div>
      </div>

      <div class="feature-item flex w-full flex-col md:flex-row">
        <div class="mb-4 flex-1 md:mb-0">
          <img
            src="/images/features-2.webp"
            alt="Design wnętrza"
            class="h-auto w-full max-w-full object-cover md:h-[520px] md:max-w-[846px]"
          />
        </div>
        <div
          class="max-w-full flex-1 bg-darkGray py-4 md:h-[332px] md:max-w-[580px] md:-translate-x-24 md:px-4 md:pl-[117px]"
        >
          <h5 class="mb-3 text-h5">Design wnętrza</h5>
          <h3 class="pb-6 text-h3 md:pb-12">
            Idealny komfort. Unikalny wystrój wnętrza stworzony w stylu CUPRY.
          </h3>
          <Button
            variant="primary"
            href="#test-drive-form"
            title="Umów się na jazdę próbną"
          >
            Umów jazdę próbną
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "~/components/ui/Button.vue";
</script>

<style scoped>
@media (min-width: 768px) {
  .feature-item {
    flex-direction: row;
  }

  .feature-item img {
    max-height: 520px;
    object-fit: cover;
  }
}
</style>

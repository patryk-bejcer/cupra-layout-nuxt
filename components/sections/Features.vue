<template>
  <section class="features-section py-14 bg-darkGray text-white pt-16 md:pt-[172px] md:pb-[96px]">
    <div class="container mx-auto px-4 md:px-6 gap-y-8 md:gap-y-[120px] flex flex-wrap items-center">
      <!-- Feature 1 -->
      <div class="feature-item flex flex-col md:flex-row w-full ">
        <div class="flex-1 mb-4 md:mb-0">
          <img src="/images/features-1.jpg" alt="Technologia"
               class="w-full h-auto md:h-[520px] max-w-full md:max-w-[846px] object-cover">
        </div>
        <div class="flex-1 md:pl-24 pb-4 md:h-[332px] bg-darkGray md:translate-x-[-100px] max-w-full md:max-w-[530px]">
          <h5 class="text-h5 mb-3">Technologia</h5>
          <h3 class="text-h3 pb-6 md:pb-12">Poczuj pełną wolność <br /> jazdy dzięki licznym innowacjom.</h3>
          <a href="#test-drive-form" class="btn-primary">Umów jazdę próbną</a>
        </div>
      </div>

      <!-- Feature 2 -->
      <div class="feature-item flex flex-col md:flex-row w-full">
        <div class="flex-1 md:order-last">
          <img src="/images/features-3.jpg" alt="Car Interior"
               class="w-full h-auto md:h-[520px] max-w-full md:max-w-[768px] object-cover">
        </div>
        <div
          class="flex-1 md:px-4 md:pr-[117px] py-4 md:h-[332px] bg-darkGray mb-4 md:mb-0 max-w-full md:max-w-[580px] z-10 transform md:translate-x-24">
          <h5 class="text-h5 mb-3">Potęga Designu</h5>
          <h3 class="text-h3 pb-6 md:pb-12">Crossover emanujący gracją, dynamizmem i czystym wyrafinowaniem.</h3>
          <a href="#test-drive-form" class="btn-primary">Potęga Designu</a>
        </div>
      </div>


      <!-- Feature 3 (Text over image on the right) -->
      <div class="feature-item flex flex-col md:flex-row w-full">
        <div class="flex-1 mb-4 md:mb-0">
          <img src="/images/features-2.jpg" alt="Design wnętrza"
               class="w-full h-auto md:h-[520px] max-w-full md:max-w-[846px] object-cover">
        </div>
        <div
          class="flex-1 md:px-4 md:pl-[117px] py-4 md:h-[332px] bg-darkGray transform md:-translate-x-24 max-w-full md:max-w-[580px]">
          <h5 class="text-h5 mb-3">Design wnętrza</h5>
          <h3 class="text-h3 pb-6 md:pb-12">Idealny komfort. Unikalny wystrój wnętrza stworzony w stylu CUPRY.</h3>
          <a href="#test-drive-form" class="btn-primary">Umów jazdę próbną</a>
        </div>
      </div>
    </div>
  </section>
</template>

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

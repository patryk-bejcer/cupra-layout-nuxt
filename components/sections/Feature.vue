<template>
  <section class="feature-section py-14 md:py-[104px] bg-darkGray">
    <div class="container mx-auto px-4 md:px-6 flex flex-wrap items-center">
      <!-- Left Column for Text and First Image -->
      <div class="w-full md:w-3/5 text-white md:pr-4 mb-4 md:mb-6 flex flex-col justify-between">
        <!-- Text Content -->
        <div>
          <div class="max-w-xl mb-4 md:mb-6">
            <h2 class="text-h2 md:text-h1 mb-3 md:mb-4">WYPRÓBUJ</h2>
            <p class="text-base md:text-h4 text-gray mb-3 md:mb-4">
              Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj
              samochody, które są wyjątkowym połączeniem technologii,
              mocy, elegancji i komfortu.
            </p>
          </div>

          <!-- First Image -->
          <img src="/images/feature1.jpg" alt="Car Image 1" class="w-full h-auto mb-4 md:mb-8">

          <p class="text-gray text-sm mb-4 md:mb-16">
            Design inspirowany wyścigami, stworzony z niezwykłą dbałością o detale.
          </p>

          <div class="max-w-lg mb-4 md:mb-0">
            <h3 class="text-h3 md:text-h3 mb-3 md:mb-4">TYLKO DLA ODWAŻNYCH</h3>
            <p class="text-base md:text-h4 text-gray mb-8">
              Model CUPRA, który idealnie wpisuje się w DNA marki.
              Unikalny SUV coupé, wyjątkowy, odważny i innowacyjny –
              zapewni Ci to, co najlepsze w marce CUPRA.
            </p>
            <a href="#test-drive-form" class="btn-accent">
              Umów jazdę próbną
            </a>
          </div>
        </div>
      </div>

      <!-- Right Column for Second Image -->
      <div class="w-full md:w-2/5 flex flex-col justify-end md:pl-4 mt-4 md:mt-32">
        <img src="/images/feature2.jpg" alt="Car Image 2" class="w-full h-auto mb-4 md:mb-8">

        <p class="text-gray text-sm mb-4 md:mb-0">
          Design inspirowany wyścigami, stworzony z niezwykłą dbałością o detale.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureSection',
};
</script>

<template>
  <section class="carousel-section py-14 md:py-[103px] bg-whiteGray">
    <splide :options="splideOptions">
      <splide-slide v-for="(car, index) in cars" :key="index">
        <div class="slide-content flex items-center flex-col text-center">
          <h2 class="text-h2 font-light mb-14">{{ car.name }}</h2>
          <img class="mb-9" :src="car.imageSrc" :alt="car.name">
          <p class="price text-gray text-sm mb-12">Akumulator 58 kWh moc do 204 KM²
          </p>
          <div class="info flex items-start gap-x-12">
            <p class="price text-gray text-sm max-w-40">{{ car.leasingInfo }}</p>
            <p class="price text-gray text-sm">Rata netto/mies. od*
              <span class="block text-h4 font-bold text-black">{{car.monthlyRate}} zł</span>
            </p>
            <p class="price text-gray text-sm">Cena brutto już od
              <span class="block text-h4 font-bold text-black">{{car.totalPrice}} zł</span>
            </p>
          </div>
          <a href="#" class="btn-secondary mt-12">Umów jazdę próbną</a>
        </div>
      </splide-slide>
    </splide>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

// Car details
const cars = ref([
  {
    name: 'Nowa CUPRA Formentor',
    imageSrc: '/images/cars/CUPRA-Formentor.png',
    leasingInfo: 'Dostępny w leasingu z 0% opłaty własnej',
    monthlyRate: '1943',
    totalPrice: '179 600'
  },
  {
    name: 'Nowa CUPRA Formentor VZ',
    imageSrc: '/images/cars/CUPRA-Formentor.png',
    leasingInfo: 'Dostępny w leasingu z 0% opłaty własnej',
    monthlyRate: '1553',
    totalPrice: '152 400'
  },
  {
    name: 'Nowa CUPRA Ateca',
    imageSrc: '/images/cars/CUPRA-Ateca.png',
    leasingInfo: 'Dostępny w leasingu z 0% opłaty własnej',
    monthlyRate: '1943',
    totalPrice: '179 600'
  },
  {
    name: 'Nowa CUPRA Born',
    imageSrc: '/images/cars/CUPRA-Born.png',
    leasingInfo: 'Dostępny w leasingu z 0% opłaty własnej',
    monthlyRate: '1943',
    totalPrice: '179 600'
  },
  {
    name: 'Leon',
    imageSrc: '/images/cars/CUPRA-Leon.png',
    leasingInfo: 'Dostępny w leasingu z 0% opłaty własnej',
    monthlyRate: '1943',
    totalPrice: '179 600'
  },
  {
    name: 'Leon Sportstourer',
    imageSrc: '/images/cars/CUPRA-Leon-Sportstourer.png',
    leasingInfo: 'Dostępny w leasingu z 0% opłaty własnej',
    monthlyRate: '1601',
    totalPrice: '156 200'
  },
]);

const splideOptions = ref({
  type      : 'loop',
  perPage   : 2,
  perMove   : 1,
  gap       : '15.5rem',
  pagination: false,
  arrows    : true,
  padding   : {
    left : '1%',
    right: '1%',
  },
  focus    : 'center',
  breakpoints: {
    768: {
      perPage: 1,
      padding: { left: '0', right: '0' },
    },
  },
});
</script>


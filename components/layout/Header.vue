<template>
  <header class="bg-white text-black py-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="logo pr-4">
        <NuxtLink to="/" title="Przejdź do strony głównej">
          <img src="/images/logo.png" alt="Cupra Logo" class="h-5">
        </NuxtLink>
      </div>

      <!-- Hamburger Menu Button (visible on md and smaller screens) -->
      <button @click="toggleMenu" class="lg:hidden" aria-label="Przełącz menu" :aria-expanded="menuOpen.toString()">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path :class="{'hidden': menuOpen}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7" />
          <path :class="{'hidden': !menuOpen}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Full-screen menu (starts hidden and will be toggled) -->
      <div
        :class="{'fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6': menuOpen, 'hidden': !menuOpen}"
        class="transition-all duration-300 ease-in-out">
        <NuxtLink to="/cars" class="text-xl hover:underline" title="Zobacz nasze modele samochodów" @click="toggleMenu">
          Samochody
        </NuxtLink>
        <NuxtLink to="/cars" class="text-xl hover:underline" title="Zarezerwuj jazdę próbną" @click="toggleMenu">Jazda
          próbna
        </NuxtLink>
        <NuxtLink to="/cars" class="text-xl hover:underline" title="Zobacz nasze specjalne oferty" @click="toggleMenu">
          Oferta
        </NuxtLink>
        <NuxtLink to="/cars" class="text-xl hover:underline" title="Znajdź nasze salony" @click="toggleMenu">Salony
          Cupra
        </NuxtLink>
        <button @click="toggleMenu" class="absolute top-5 right-5 !mt-0" aria-label="Close menu">
          <!-- X Icon for closing the menu -->
          <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <nav :class="{'hidden': !menuOpen, 'flex': menuOpen}"
           class="flex-col lg:flex-row lg:flex space-x-0 lg:space-x-8 font-thin">
        <NuxtLink to="/cars" class="hover:underline transition" title="Zobacz nasze modele samochodów">Samochody
        </NuxtLink>
        <NuxtLink to="/cars" class="hover:underline transition" title="Zarezerwuj jazdę próbną">Jazda próbna</NuxtLink>
        <NuxtLink to="/cars" class="hover:underline transition" title="Zobacz nasze specjalne oferty">Oferta</NuxtLink>
        <NuxtLink to="/cars" class="hover:underline transition" title="Znajdź nasze salony">Salony Cupra</NuxtLink>
      </nav>

      <!-- Phone and Buttons -->
      <div class="hidden lg:flex items-center space-x-6">
        <div class="phone mr-6">
          <a href="tel:+48585066565" class="font-medium text-sm hover:underline" title="Zadzwoń do nas">+48 58 506 65
            65</a>
        </div>
        <a href="#test-drive-form" class="btn-primary hidden xl:inline-block" title="Zapytaj o ofertę">
          Zapytaj o ofertę
        </a>
        <a href="#test-drive-form" class="btn-secondary" title="Umów się na jazdę próbną">
          Umów jazdę próbną
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
  <header class="bg-white py-4 text-black">
    <div class="container mx-auto flex items-center justify-between">
      <div class="logo pr-4">
        <NuxtLink to="/" title="Przejdź do strony głównej">
          <img src="/images/logo.webp" alt="Cupra Logo" class="h-5" />
        </NuxtLink>
      </div>

      <button
        class="lg:hidden"
        aria-label="Przełącz menu"
        :aria-expanded="menuOpen.toString()"
        @click="toggleMenu"
      >
        <svg
          class="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            :class="{ hidden: menuOpen }"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
          <path
            :class="{ hidden: !menuOpen }"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        :class="{
          'fixed inset-0 z-50 flex flex-col items-center justify-center space-y-6 bg-white':
            menuOpen,
          hidden: !menuOpen,
        }"
        class="transition-all duration-300 ease-in-out"
      >
        <NuxtLink
          to="/cars"
          class="text-xl hover:underline"
          title="Zobacz nasze modele samochodów"
          @click="toggleMenu"
        >
          Samochody
        </NuxtLink>
        <NuxtLink
          to="/cars"
          class="text-xl hover:underline"
          title="Zarezerwuj jazdę próbną"
          @click="toggleMenu"
          >Jazda próbna
        </NuxtLink>
        <NuxtLink
          to="/cars"
          class="text-xl hover:underline"
          title="Zobacz nasze specjalne oferty"
          @click="toggleMenu"
        >
          Oferta
        </NuxtLink>
        <NuxtLink
          to="/cars"
          class="text-xl hover:underline"
          title="Znajdź nasze salony"
          @click="toggleMenu"
          >Salony Cupra
        </NuxtLink>

        <div class="mobile-actions flex flex-col justify-center mt-auto">
          <div class="phone text-center py-5">
            <a
              href="tel:+48585066565"
              class="text-sm font-medium hover:underline"
              title="Zadzwoń do nas"
              >+48 58 506 65 65</a
            >
          </div>

          <div class="flex flex-col items-center space-y-5">
            <Btn
              variant="primary"
              href="#test-drive-form"
              title="Zapytaj o ofertę"
            >
              Zapytaj o ofertę
            </Btn>
            <Btn
              variant="secondary"
              href="#test-drive-form"
              title="Umów się na jazdę próbną"
            >
              Umów jazdę próbną
            </Btn>
          </div>
        </div>

        <button
          class="absolute right-5 top-5 !mt-0"
          aria-label="Close menu"
          @click="toggleMenu"
        >
          <!-- X Icon for closing the menu -->
          <svg
            class="size-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <nav
        :class="{ hidden: !menuOpen, flex: menuOpen }"
        class="flex-col space-x-0 font-thin lg:flex lg:flex-row lg:space-x-8"
      >
        <NuxtLink
          to="/cars"
          class="transition hover:underline"
          title="Zobacz nasze modele samochodów"
          >Samochody
        </NuxtLink>
        <NuxtLink
          to="/cars"
          class="transition hover:underline"
          title="Zarezerwuj jazdę próbną"
          >Jazda próbna</NuxtLink
        >
        <NuxtLink
          to="/cars"
          class="transition hover:underline"
          title="Zobacz nasze specjalne oferty"
          >Oferta</NuxtLink
        >
        <NuxtLink
          to="/cars"
          class="transition hover:underline"
          title="Znajdź nasze salony"
          >Salony Cupra</NuxtLink
        >
      </nav>

      <div class="hidden items-center space-x-6 lg:flex">
        <div class="phone xl:mr-6 mr-0 md:mr-3 ml-0 md:ml-3 xl:ml-0">
          <a
            href="tel:+48585066565"
            class="text-sm font-medium hover:underline"
            title="Zadzwoń do nas"
            >+48 58 506 65 65</a
          >
        </div>
        <Btn
          variant="primary"
          class="hidden xl:inline-block"
          href="#test-drive-form"
          title="Zapytaj o ofertę"
        >
          Zapytaj o ofertę
        </Btn>
        <Btn
          variant="secondary"
          href="#test-drive-form"
          title="Umów się na jazdę próbną"
        >
          Umów jazdę próbną
        </Btn>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Btn from "~/components/ui/Btn.vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

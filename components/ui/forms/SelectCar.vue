<template>
  <div
    ref="selectWrapper"
    class="car-select-wrapper relative z-10 bg-whiteGray pl-12"
  >
    <div class="car-select p-3" @click="toggleDropdown">
      <div class=") flex -translate-x-16 items-center">
        <img
          :src="carOptions[selectedCar].image"
          alt="Selected Car Image"
          class="selected-car-image w-[160px] md:w-[300px]"
        />
        <span class="px-2">{{ carOptions[selectedCar].name }}</span>
      </div>
      <div class="ml-auto pr-3">
        <svg
          class="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
    <div
      v-show="isDropdownOpen"
      class="custom-dropdown min-w-[calc(100% - 12rem) mt-5 bg-whiteGray"
    >
      <div
        v-for="(option, key) in dropdownOptions"
        :key="key"
        class="car-option p-3 pl-12"
        @click="selectCar(key)"
      >
        <div class="flex -translate-x-16 items-center">
          <img
            :src="option.image"
            :alt="`Select ${option.name}`"
            class="car-image min-w-[160px] md:min-w-[300px]"
          />
          <span class="px-2">{{ option.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { CarOptions } from "~/types";

interface SelectCarProps {
  carOptions: CarOptions;
}

const { carOptions } = defineProps<SelectCarProps>();

const selectedCar = ref("cupra-formentor");
const isDropdownOpen = ref(false);
const selectWrapper = ref<HTMLDivElement | null>(null);

const dropdownOptions = computed(() => {
  return Object.keys(carOptions).reduce((options, key) => {
    if (key !== selectedCar.value) {
      options[key] = carOptions[key];
    }
    return options;
  }, {} as CarOptions);
});

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectCar = (carKey: string) => {
  selectedCar.value = carKey;
  isDropdownOpen.value = false;
};

const closeDropdown = (event: MouseEvent) => {
  if (
    isDropdownOpen.value &&
    selectWrapper.value &&
    !selectWrapper.value.contains(event.target as Node)
  ) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  window.removeEventListener("click", closeDropdown);
});
</script>

<style scoped>
.car-select-wrapper {
  margin: auto;
  position: relative;
}

.car-select {
  appearance: none;
  width: 100%;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.car-select:hover {
  cursor: pointer;
}

.custom-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  border: 1px solid #ccc;
  border-bottom: 0;
  width: calc(100% - 3rem);
}

.car-option {
  display: flex;
  align-items: center;
  padding: 1em;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}

.car-image {
  max-width: 50px;
  margin-right: 10px;
}
</style>

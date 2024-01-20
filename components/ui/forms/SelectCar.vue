<template>
  <div class="custom-select-wrapper relative bg-whiteGray z-10" ref="selectWrapper">
    <div class="custom-select p-3" @click="toggleDropdown">
      <img :src="carOptions[selectedCar].image" alt="Selected Car Image"
           class="selected-car-image w-[160px] md:w-[300px]" />
      <span class="px-2">{{ carOptions[selectedCar].name }}</span>
      <div class="ml-auto pr-3">
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
    <div v-show="isDropdownOpen" class="custom-dropdown">
      <div
        v-for="(option, key) in dropdownOptions"
        :key="key"
        @click="selectCar(key)"
        class="car-option bg-whiteGray p-3"
      >
        <img :src="option.image" :alt="`Select ${option.name}`" class="car-image min-w-[160px] md:min-w-[300px]">
        <span class="px-2">{{ option.name }}</span>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const selectedCar = ref('cupra-formentor');
const isDropdownOpen = ref(false);
const selectWrapper = ref(null);

const carOptions = {
  'cupra-formentor': {
    name: 'Cupra Formentor',
    image: '/images/cars/CUPRA-Formentor.png',
  },
  'cupra-leon': {
    name: 'Cupra Leon',
    image: '/images/cars/CUPRA-Leon.png',
  },
  'cupra-leon-sportstourer': {
    name: 'Cupra Leon Sportstourer',
    image: '/images/cars/CUPRA-Leon-Sportstourer.png',
  },
  'cupra-ateca': {
    name: 'Cupra Ateca',
    image: '/images/cars/CUPRA-Ateca.png',
  },
  'nowa-cupra-born': {
    name: 'Nowa Cupra Born',
    image: '/images/cars/CUPRA-Born.png',
  },
};

const dropdownOptions = computed(() => {
  return Object.keys(carOptions).reduce((options, key) => {
    if (key !== selectedCar.value) {
      options[key] = carOptions[key];
    }
    return options;
  }, {});
});

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectCar = (carKey) => {
  selectedCar.value = carKey;
  isDropdownOpen.value = false;
};

const closeDropdown = (event) => {
  if (isDropdownOpen.value && !selectWrapper.value.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

// Add event listener when component is mounted
onMounted(() => {
  window.addEventListener('click', closeDropdown);
});

// Remove event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener('click', closeDropdown);
});
</script>

<style scoped>
.custom-select-wrapper {
  max-width: 553px; /* Adjust as needed */
  margin: auto;
  position: relative;
}

.custom-select {
  appearance: none;
  width: 100%;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.custom-select:hover {
  cursor: pointer;
}

.custom-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-top: none;
}

.car-option {
  display: flex;
  align-items: center;
  padding: 1em;
  cursor: pointer;
}

.car-image {
  max-width: 50px; /* Adjust as needed */
  margin-right: 10px; /* Add spacing between image and text */
}
</style>

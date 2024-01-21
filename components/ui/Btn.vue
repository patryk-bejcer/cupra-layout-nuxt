<template>
  <a role="button" :class="buttonClass" :href="href">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface BtnProps {
  variant: "primary" | "secondary" | "accent" | "transparent" | string;
  href: string;
}

const props = defineProps<BtnProps>();

const buttonClass = computed(() => {
  switch (props.variant) {
    case "primary":
      return "inline-block bg-white text-black py-4 px-6 transition leading-none ring-1 ring-black hover:ring-2";
    case "secondary":
      return "inline-block bg-primary hover:bg-secondary text-white py-4 px-6 transition leading-none";
    case "accent":
      return "inline-block bg-accent text-black py-4 px-6 hover:bg-white transition leading-none";
    case "transparent":
      return "inline-block bg-transparent hover:bg-green-700 text-white py-4 px-6 transition leading-none";
    default:
      return "inline-block bg-white text-black border border-solid border-black py-4 px-6 transition leading-none";
  }
});
</script>

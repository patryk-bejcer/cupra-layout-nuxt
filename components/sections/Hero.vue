<template>
  <section
    class="relative flex h-[calc(100svh-3.5rem)] max-h-[800px] items-end bg-[url('/images/hero.webp')] bg-cover bg-center md:h-[calc(100svh-5rem)]"
  >
    <div class="container mx-auto px-4 py-16 text-white md:py-32">
      <div class="max-w-[43.75rem]">
        <span class="text-h4 text-gray">CUPRA Formentor</span>
        <h1 class="mb-6 mt-2 text-h2 md:mb-12 md:mt-4 md:text-h1">
          Wejdź do świata Cupra. <br class="hidden md:inline" />
          Poznaj prawdziwą moc <br class="hidden md:inline" />
          i sportowego ducha marki.
        </h1>
        <Btn variant="accent" href="#test-drive-form">
          Ruszaj na jazde testową
        </Btn>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Btn from "~/components/ui/Btn.vue";
</script>

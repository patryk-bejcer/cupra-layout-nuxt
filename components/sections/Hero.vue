<template>
  <section
    class="relative flex items-end bg-[url('/images/hero.webp')] bg-cover bg-center h-[calc(100svh-3.5rem)] max-h-[50rem] md:h-[calc(100svh-5rem)]"
  >
    <div class="container py-16 md:py-32 text-white">
      <div class="max-w-[43.75rem]">
        <span class="text-h4 text-gray">CUPRA Formentor</span>
        <h1 class="mt-2 mb-6 text-h3 md:mt-4 md:mb-12 lg:text-h1">
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

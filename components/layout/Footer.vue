<template>
  <footer class="bg-white text-sm font-thin text-dark">
    <div class="border-t border-lightGray">
      <div
        class="container mx-auto px-4 py-6 md:flex md:items-center md:justify-between"
      >
        <div
          class="flex w-full flex-col items-center md:flex-row md:items-center md:justify-between md:space-x-8"
        >
          <div class="mb-4 text-center md:mb-0 md:text-left">
            SEAT CUPRA S.A.U. 2022 ©
          </div>
          <nav class="flex space-x-3">
            <a href="#" class="hover:underline">Obowiązek informacyjny</a>
            <a href="#" class="hover:underline">Polityka cookies</a>
          </nav>
          <div
            class="mt-4 flex justify-center space-x-8 md:mt-0 md:justify-start"
          >
            <a title="Instagram" href="#">
              <Instagram />
            </a>
            <a title="Vimeo" href="#">
              <Vimeo />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Instagram from "~/components/ui/icons/Instagram.vue";
import Vimeo from "~/components/ui/icons/Vimeo.vue";

export default {
  name: "Footer",
  components: { Vimeo, Instagram },
};
</script>

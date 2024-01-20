<template>
  <footer class="bg-white text-dark font-thin text-sm">
    <div class="border-t border-lightGray">
      <div class="container mx-auto px-4 py-6 md:flex md:justify-between md:items-center">

        <!-- Footer Content Wrapper -->
        <div class="flex flex-col items-center md:flex-row md:space-x-8 md:items-center md:justify-between w-full">

          <!-- Left Side - Copyright -->
          <div class="mb-4 text-center md:mb-0 md:text-left">
            SEAT CUPRA S.A.U. 2022 ©
          </div>

          <!-- Middle Side - Links -->
          <nav class="flex space-x-3">
            <a href="#" class="hover:underline">Obowiązek informacyjny</a>
            <a href="#" class="hover:underline">Polityka cookies</a>
          </nav>

          <!-- Right Side - Icons -->
          <div class="mt-4 flex justify-center space-x-8 md:mt-0 md:justify-start">
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Vimeo />
            </a>
          </div>
        </div>
        <!-- End Footer Content Wrapper -->

      </div>
    </div>
  </footer>
</template>

<script>
import Instagram from '~/components/ui/icons/Instagram.vue';
import Vimeo from '~/components/ui/icons/Vimeo.vue';

export default {
  name: 'Footer',
  components: { Vimeo, Instagram },
};
</script>

<template>
  <div class="sm:text-sm md:text-md lg:text-xl">
    <div class="flex mt-8 justify-center bg-gray-200">
      <!-- Cabeçalho -->
      <Header class="fixed top-0 inset-x-0 z-50"/>
    </div>

    <!-- Layout principal -->
    <div class="flex justify-center mt-4">

      <!-- Espaço à esquerda para propaganda -->
      <div v-if="windowWidth >= 600" class="w-1/5 p-4">
        <Left />
      </div>

      <!-- Conteúdo principal (notícias) -->
      <div class="w-full md:w-3/5 min-w-0">
        <router-view></router-view>
      </div>

      <!-- Espaço à direita para propaganda -->
      <div v-if="windowWidth >= 600" class="w-1/5 p-4">
        <Right />
      </div>

    </div>
  </div>

</template>

<script setup>

import Left from "@/components/layouts/Left.vue";
import Right from "@/components/layouts/Right.vue";
import Header from "@/components/layouts/Header.vue";
import useWindowWidth from '@/plugins/WindowResize.js';

const windowWidth = useWindowWidth();

</script>

<style>
.asside-home {
  padding: 15px;
}
</style>

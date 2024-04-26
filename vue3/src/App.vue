<template>
  <div class="">
    <!-- Cabeçalho centralizado -->
    <div class="w-full flex justify-center bg-gray-200">
      <Header />
    </div>

    <!-- Layout principal -->
    <div class="flex flex-wrapjustify-between ">

      <!-- Espaço à esquerda -->
      <div v-if="windowWidth >= 600"  class="w-1/4 bg-gray-200 asside-home">
        <Left />
      </div>

      <!-- Conteúdo centralizado -->
      <div class="bg-orange-100">
        <router-view></router-view>
      </div>

      <!-- Espaço à direita -->
      <div v-if="windowWidth >= 600" class="w-1/4 bg-gray-200 asside-home">
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

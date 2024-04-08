<template>
  <div class="p-8">
    <!-- Cabeçalho centralizado -->
    <div class="flex justify-center" id="header-background">
      <Header />
    </div>

    <!-- Layout principal -->
    <div class="flex justify-between">
      <!-- Espaço à esquerda -->
      <div class="w-1/4 bg-gray-200">
        <Left />
      </div>

      <!-- Conteúdo centralizado -->
      <div class="w-1/2">
        <router-view></router-view>
      </div>

      <!-- Espaço à direita -->
      <div class="w-1/4 bg-gray-200">
        <Right />
      </div>
    </div>
  </div>
</template>

<script setup>
import Left from "@/components/layouts/Left.vue";
import Right from "@/components/layouts/Right.vue";
import Header from "@/components/layouts/Header.vue";
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

#header-background{
  background-image: url('~@/assets/seca.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  /* background-size: contain;  */
  background-position: center;
}
</style>

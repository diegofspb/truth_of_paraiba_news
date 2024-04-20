<template>
    <v-app>
      <!-- Cabeçalho centralizado -->
      <div class="flex justify-center bg-gray-200" >
        <Header />
      </div>
  
      <!-- Layout principal -->
      <div class="flex justify-between">
        <!-- Espaço à esquerda -->
        <div class="w-1/4 bg-gray-200 asside-home">
          <Left />
        </div>
  
        <!-- Conteúdo centralizado -->
        <div class="w-1/2 ">
          <router-view></router-view>
        </div>
  
        <!-- Espaço à direita -->
        <div class="w-1/4 bg-gray-200 asside-home">
          <Right />
        </div>
      </div>
    </v-app>

 
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


.asside-home{
  padding: 15px;
}
</style>




<template>
  <div class="flex-shrink sm:flex-shrink-0 md:flex-shrink lg:flex-shrink-0 xl:flex-shrink grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div v-for="(noticia, index) in noticias" :key="index" class="p-2" >
      <div class="rounded-lg shadow-md hover:shadow-lg dark:bg-gray-300 dark:hover:bg-gray-400"> 
        <p class="font-bold">{{ noticia.titulo }}</p>    
        <p class="text-gray-700 text-justify ">{{ noticia.conteudo }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import noticias from '@/noticias/noticias.json'; 
</script>

<style>
h2 {
  font-weight: bold;
}
</style>

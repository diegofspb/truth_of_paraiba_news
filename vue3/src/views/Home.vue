<template>
  <div class="grid grid-cols-[300px] place-content-center">
    <!-- Loop para renderizar os cards de notícia em linhas de até 3 -->
    <div v-for="(noticia, index) in noticias" :key="index" class="p-2">
      <div class="p-3 block  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ noticia.titulo }}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {{ noticia.conteudo }}
          </p>
        </div>
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

<template>
  <div id="noticias">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3">

      <div v-for="(noticia, index) in noticias" :key="index" class="p-4 " :class="{ 'col-span-2': index === 0 }">
        <img src="@/assets/noticias_imagem.jpg" alt="Imagem da notícia" class="w-full h-auto">
        <h2 class="text-lg font-semibold">{{ noticia.titulo }}</h2>
        <p class="text-gray-600">{{ noticia.conteudo }}</p>
        <hr>
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

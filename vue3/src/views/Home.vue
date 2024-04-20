<template>
  <div id="home-app">
    <!-- Loop para renderizar os cards de notícia em pares -->
    <div v-for="(noticia, index) in noticias" :key="index">
      <div class="flex justify-between">
        <!-- Card de notícia 1 -->
        <div class="p-4 text-justify" id="card-noticia" v-if="index % 2 === 0">
          <h2>{{ noticia.titulo }}</h2>
          <p>{{ noticia.conteudo }}</p>
          <hr>          
        </div>
        <!-- Card de notícia 2 -->
        <div class="p-4 text-justify" id="card-noticia" v-if="index % 2 === 1">
          <h2>{{ noticias[index - 1].titulo }}</h2>
          <p>{{ noticias[index - 1].conteudo }}</p>
          <hr>          
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

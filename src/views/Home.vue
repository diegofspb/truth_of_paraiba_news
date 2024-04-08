<template>
    <div id="home-app">
      <!-- Loop para renderizar os cards de notícia em pares -->
      <div v-for="(noticia, index) in noticias" :key="index">
        <div class="flex justify-between">
          <!-- Card de notícia 1 -->
          <div class="p-4 text-justify" id="card-noticia" v-if="noticias[index]">
            <h2 >{{ noticias[index].titulo }}</h2>
            <p>{{ noticias[index].conteudo }}</p>
            <hr>          
          </div>
          <!-- Card de notícia 2 -->
          <div class="p-4 text-justify" id="card-noticia" v-if="noticias[index + 1]">
            <h2>{{ noticias[index + 1].titulo }}</h2>
            <p>{{ noticias[index + 1].conteudo }}</p>
            <hr>          
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Importe as notícias de algum lugar, como um arquivo JSON ou de uma API
  import noticias from '@/noticias/noticias.json'; // Supondo que você tenha um arquivo JSON com as notícias
  </script>
  
  <style>
   h2 {
    font-weight: bold;
  }
  </style>
  
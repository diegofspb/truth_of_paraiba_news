<template>

<header class="bg-gray p-3">
  <div class="container mx-auto flex items-center justify-between">
    <!-- Nome "Verdade PB" no canto esquerdo -->
    <div id="logo" class="text-xl md:text-3xl lg:text-5xl">
      <p class="font-bold font-sans text-white flex items-center">
        <span class="text-lg md:text-2xl lg:text-5xl">Verdade</span>
        <span class="text-lg md:text-2xl lg:text-5xl" style="color: red;">PB</span>
      </p>
    </div>

    <!-- Links de navegação no centro -->
    <nav class="hidden md:block">
      <ul class="flex space-x-4">
        <li><a href="#" class="text-white hover:text-gray-300">Início</a></li>
        <li><a href="#" class="text-white hover:text-gray-300">Notícias</a></li>
        <li><a href="#" class="text-white hover:text-gray-300">Esportes</a></li>
        <li><a href="#" class="text-white hover:text-gray-300">Entretenimento</a></li>
        <li><a href="#" class="text-white hover:text-gray-300">Contato</a></li>
      </ul>
    </nav>

    <!-- Campo de pesquisa no lado direito -->
    <div v-if="windowWidth >= 900" class="ml-4 flex items-center">
      <form class="flex items-center">
        <input type="search" id="default-search" class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        <button type="submit" class="ml-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pesquisar</button>
      </form>

      <!-- Ícone do usuário -->
      <div class="ml-3 w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <svg class="w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
        </svg>
      </div>
    </div>
  </div>
</header>

</template>

<script setup>
import useWindowWidth from '@/plugins/WindowResize.js';

const windowWidth = useWindowWidth();

</script>

<style>
/* Se você precisar de estilos específicos para este componente, pode adicioná-los aqui */
</style>


<style>
header {
  background-color: rgb(2, 2, 2);
  width: 100%;
}

#logo {
  margin-left: 10%;
}

li {
  margin: 2%;
}
</style>

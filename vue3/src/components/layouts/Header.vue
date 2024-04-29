<template>

  <header class="bg-gray p-3">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Nome "Verdade PB" no canto esquerdo -->
      <div id="logo" class="text-xl md:text-3xl lg:text-5xl">
        <p class="font-bold font-sans text-white flex mr-2" style="margin-left: -40px;">
          <span class="text-lg  md:text-2xl md:text-2xl lg:text-5xl">Verdade</span>
          <span class="text-lg md:text-2xl lg:text-5xl" style="color: red;">PB</span>
        </p>
      </div>

      <!-- Links de navegação no centro -->
      <nav v-if="windowWidth >= 900" class="mr-6">
        <ul class="flex space-x-4">
          <li><a href="#" class="text-white hover:text-gray-300">Início</a></li>
          <li><a href="#" class="text-white hover:text-gray-300">Notícias</a></li>
          <li><a href="#" class="text-white hover:text-gray-300">Esportes</a></li>
          <li><a href="#" class="text-white hover:text-gray-300">Entretenimento</a></li>
          <li><a href="#" class="text-white hover:text-gray-300">Contato</a></li>
        </ul>
      </nav>

      <!-- Campo de pesquisa no lado direito -->
      <div class="flex items-center">
        <form class="flex items-center">
          <input type="search" id="default-search"
            class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required />
          <button type="submit"
            class="ml-2 flex items-center justify-center w-10 h-10 text-gray-400 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-800">
            <!-- Ícone da lupa -->
            <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 512 512">
              <path fill="#dfe4ec"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </form>

        <!-- Ícone do usuário -->
        <div
          class="ml-1 w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
          <svg class="w-7 h-7 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
            </path>
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
  background-color: rgb(58, 55, 55);
  width: 100%;
}

#logo {
  margin-left: 10%;
}

li {
  margin: 2%;
}
</style>

<template>

  <header class="bg-gray p-4 ">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Marca Verdade PB -->
      <div id="logo" class="flex items-center" style="font-size: 35px;">
        <p class="font-bold font-sans text-white text-4xl">Verdade <span style="color: red;">PB</span></p>
      </div>
      <!-- Menu Central -->
      <div id="central-itens border" style="font-size: 20px;">
        <nav class=" md:block">
          <ul class="flex space-x-4">
            <li><a href="#" class="text-white hover:text-gray-300">Início</a></li>
            <li><a href="#" class="text-white hover:text-gray-300">Notícias</a></li>
            <li><a href="#" class="text-white hover:text-gray-300">Esportes</a></li>
            <li><a href="#" class="text-white hover:text-gray-300">Entretenimento</a></li>
            <li><a href="#" class="text-white hover:text-gray-300">Contato</a></li>
          </ul>
        </nav>
      </div>

      <!-- Actions -->

      <!-- Search -->
      <!-- Search -->
      <div class="search flex items-center justify-center">
        <form class="max-w-md mx-auto flex items-center ml-3">
          <div class="relative flex-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search"
              class="block w-full p-2 pl-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required />
          </div>
          <button type="submit"
            class="ml-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pesquisar</button>
        </form>
        <!-- User -->
        <div class="relative ml-3 w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg class="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>





    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  // Se você precisar de lógica adicional, como manipular eventos ou dados do componente, pode adicioná-la aqui
}
</script>

<style>
/* Se você precisar de estilos específicos para este componente, pode adicioná-los aqui */
</style>


<style>
header {
  background-color: black;
  width: 100%;
}

#logo {
  margin-left: 10%;
}

li {
  margin: 2%;
}
</style>

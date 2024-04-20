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
      <div class="search">
        <form action="#" autocomplete="off">
          <input type="text" placeholder="Pesquisar Noticia" name="s" required="required">
          <i class="fa-solid fa-magnifying-glass" style="color: #f0f2e8;"></i>
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />

          xxx
        </form>

        <!-- Login -->
        <div class="header__menu__user">
          <div id="login"></div>
          <div id="GLgbuttonDiv">
            <div class="" style="position: relative;">
            </div>
          </div>
          <div class="user__container"> </div>
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

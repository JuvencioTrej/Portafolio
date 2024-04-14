<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="main-nav-bar">
      <div class="logo-main">

      </div>
      <nav class="main-navegation">
        <div class="option-navegation">
          <RouterLink to="/">
            <h5 class="text-option">Home</h5>
            <div v-if="$route.path == '/'" class="select-bar"></div>
          </RouterLink>
        </div>
        <div class="option-navegation">
          <RouterLink to="/about">
            <h5 class="text-option">About</h5>
            <div v-if="$route.path == '/about'" class="select-bar"></div>
          </RouterLink>
        </div>
        <div class="option-navegation">
          <RouterLink to="/contact">
            <h5 class="text-option">Contact</h5>
            <div v-if="$route.path == '/contact'" class="select-bar"></div>
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.main-nav-bar{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  background-color: var(--primary_color);
}
.logo-main{
  width: 20%;
}
.main-navegation{
  width: 60%;
  display: flex;
  justify-content: end;
}
.option-navegation{
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.option-navegation a{
  text-decoration: none;
  color: inherit;
}
.text-option{
  margin: 0px;
  text-align: center;
  font-size: 15px;
  color: var(--whoto_color);
  font-family: "Roboto", sans-serif;
  font-weight: normal;
}
.select-bar{
  width: 80%;
  margin-left: 10%;
  height: 5px;
  border-radius: 10px;
  background-color: var(--fourth_color);
}
/* Oculta el menú de navegación en dispositivos con ancho de pantalla menor que 800px */
@media screen and (max-width: 800px) {
  .main-nav-bar {
    display: none;
  }
}
</style>

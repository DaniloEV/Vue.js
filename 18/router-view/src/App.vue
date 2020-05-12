<template>
  <div id="app">
    <!-- Este nav -->
    <div id="nav">
      <!-- Funcionan como a de referencias   -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/service">Service</router-link> |
      <router-link to="/fotos/1">Foto</router-link>
    </div>
    <!-- Lo que hace este componente, es que crea pagina dinamica, al que llame el router 
    es el que se mostrará en pantalla -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
/* Coloca este tipo de css cuando está seleccionada */
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

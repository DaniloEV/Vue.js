<template>
  <div id="app" class="text-center">
    <Cabecera></Cabecera>
    <Lista></Lista>
  </div>
</template>

<script>
//1° Se debe importar el componente
import Cabecera from "./components/17/Cabecera.vue";
import Lista from "./components/17/Lista.vue";
export default {
  name: "App",
  components: {
    //2° Se debe exportar para que lo reconozca la App el componente
    Cabecera,
    Lista,
  },
};
</script>

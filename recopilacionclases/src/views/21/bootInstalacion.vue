<template>
  <div>
    <h1>Bootstrap 4 + Vue [Instalación]</h1>
    <h3>Para instalar</h3>
    <h6>Buscar carpeta donde está contenido el proyecto</h6>
    <h3>1) Comando</h3>
    <h6>npm install vue bootstrap-vue bootstrap</h6>
    <h3>2) Ir a scr/main.js</h3>

    <h6>
      Copiar | import Vue from 'vue' import { BootstrapVue, IconsPlugin } from
      'bootstrap-vue' // Install BootstrapVue Vue.use(BootstrapVue) //
      Optionally install the BootstrapVue icon components plugin
      Vue.use(IconsPlugin)
    </h6>
    <h6>
      El import Vue ya viene || Antes de | Vue.config.productionTip = false;
    </h6>
  </div>
</template>
<script>
import fotoCom from "@/components/20/fotoCom.vue";
export default {
  components: {
    fotoCom,
  },
  data() {
    return {
      fotoGaleria: [1, 2, 3, 6],
    };
  },
  methods: {
    home() {
      //Hace que vaya a la ruta de inicio
      this.$router.push("/");
    },
    anterior() {
      //Se mueve hacia atras con el historial
      this.$router.go(-1);
    },
    siguiente() {
      //Se mueve hacia adelante
      this.$router.go(1);
    },
  },
};
</script>

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clases: [
      {
        nombre: "Router Link y Rutas con Parámetros ",
        id: 19,
        pag: "Fotos19",
        num1: 1,
      },
      {
        nombre: "Parámetros dinámicos y rutas a través de eventos ",
        id: 20,
        pag: "Fotos20",
        num1: 1,
      },
      {
        nombre: "Bootstrap 4 + Vue [Instalación]",
        id: 21,
        pag: "bootInstalacion",
        num1: 1,
      },
      {
        nombre: "Navbar [Class Active] Bootstrap 4 + Vue ",
        id: 22,
        pag: "Navbar",
        num1: 1,
      },
      {
        nombre: "  Columnas responsives [Row/Col] 23- 24 Botones y Cards  ",
        id: 23,
        pag: "Columna",
        num1: 1,
      },
      {
        nombre: " Formulario INPUT ",
        id: 25,
        pag: "Formulario",
        num1: 1,
      },
    ],
  },

  actions: {},
  modules: {},
});

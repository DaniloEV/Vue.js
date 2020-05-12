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
    ],
  },

  actions: {},
  modules: {},
});

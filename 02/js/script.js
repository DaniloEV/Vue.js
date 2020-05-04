//Se debe instanciar Vue para utilizar vue.js llamando a la libreria
const app = new Vue({
  //Le está diciendo que lo el container app es lo que voy a utilizar o gestionar por parte de vue
  //el y data son propios de vue, se deben escribir a mano
  //data es un objeto, el está colocando las propiedades de está
  el: "#container",
  data: {
    titulo: "#02 Methods, v-model y Evento Click ",
    usuarios: [
      { nombre: "Juan", edad: 80, estado: true },
      { nombre: "Pedro", edad: 8, estado: false },
      { nombre: "Juan2", edad: 800, estado: true },
    ],
    nombre: "",
    edad: "",
    beca: "",
  },
  methods: {
    agregarDato() {
      this.usuarios.push({
        nombre: this.nombre,
        edad: this.edad,
        estado: this.beca,
      });
    },
    otroMetodo() {
      console.log("Click");
    },
    becaInformacion() {
      if (beca == true) {
        ("Tiene");
      } else {
        ("No tiene");
      }
    },
  },
});

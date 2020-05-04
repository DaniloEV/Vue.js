//Se debe instanciar Vue para utilizar vue.js llamando a la libreria
const app = new Vue({
  //Le está diciendo que lo el container app es lo que voy a utilizar o gestionar por parte de vue
  //el y data son propios de vue, se deben escribir a mano
  //data es un objeto, el está colocando las propiedades de está
  el: "#container",
  data: {
    titulo: "#04 Clases (v-bind:class)",
    //Se puede enviar como parametro al objeto que le quiero agregar al otro lado de HTML
    fondo: "bg-primary",
    color: false,
  },
  methods: {
    cambio() {
      this.color = !this.color;
    },
  },
  computed: {},
});

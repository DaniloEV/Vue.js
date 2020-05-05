//Primera tapa crear e instanciar la app, la beforeCreate
const app = new Vue({
  //Le está diciendo que lo el container app es lo que voy a utilizar o gestionar por parte de vue
  //el y data son propios de vue, se deben escribir a mano
  //data es un objeto, el está colocando las propiedades de está
  el: "#container",
  //en el data no se puede hacer logica.
  data: {
    titulo: "#06 Ciclo de vida de Vue (Lifecycle) ",
    //Se puede enviar como parametro al objeto que le quiero agregar al otro lado de HTML
    mensaje: "Soy ciclo de vida de jue",
    contador: 0,
  },
  //Se crea en el momento de que se instancea
  beforeCreate() {},
  //Una vez pasado el beforeCreate sigue created, se crea cuando se leed todos los datos y eventos, etc
  //Excepto la  "el"
  created() {},

  //Se ejecuta antes de insertar al DOM
  beforeMount() {},
  //Se ejecuta al insertar al DOM
  mounted() {},
  //Al ejecutar un cambio
  beforeUpdate() {},
  //Al realizar cambio
  updated() {},
  //Antes de destruir la instancia
  beforeDestroy() {},
  //Se destruye toda la instancia
  destroyed() {},
  methods: {
    //Para destruir la instancia
    destruir() {
      this.$destroy();
    },
  },
});

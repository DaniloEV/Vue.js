//Se debe instanciar Vue para utilizar vue.js llamando a la libreria
const app = new Vue({
  //Le está diciendo que lo el container app es lo que voy a utilizar o gestionar por parte de vue
  //el y data son propios de vue, se deben escribir a mano
  //data es un objeto, el está colocando las propiedades de está
  el: "#container",
  //en el data no se puede hacer logica.
  data: {
    titulo: "#05 Propiedades Computadas (computed)",
    //Se puede enviar como parametro al objeto que le quiero agregar al otro lado de HTML
    mensaje: "",
    contador: 0,
  },
  //Propiedades almacenadas en cache de navegador, si hay calculos muy largos, minimiza la carga de los ejercicios
  //para cualquier lógica compleja, deberia usar una propiedad computada

  /* Una propiedad computada solo se volverá a evaluar cuando alguna de
   sus dependencias haya cambiado. Esto significa que mientras message 
   no haya cambiado, el acceso múltiple a la propiedad computada 
   de reverseMessage regresará inmediatamente el resultado previamente calculado 
   sin tener que ejecutar la función de nuevo.*/
  computed: {
    //Es como que pasa datos y le aplica logica en los computed y los metodos
    invertido() {
      //Split lo separa y lo convierte en arreglo
      //reverse le da la vuelta al mensaje
      //join los vuelve a pegar si se ocupa un operador
      return this.mensaje.split("").reverse().join("");
    },
    color() {
      return {
        "bg-success": this.contador <= 35,
        "bg-warning": this.contador > 35 && this.contador <= 75,
        "bg-danger": this.contador >= 75,
      };
    },
  },
});

//Se debe instanciar Vue para utilizar vue.js llamando a la libreria
const app = new Vue({
  //Le está diciendo que lo el container app es lo que voy a utilizar o gestionar por parte de vue
  //el y data son propios de vue, se deben escribir a mano
  //data es un objeto, el está colocando las propiedades de está
  el: "#app",
  data: {
    titulo: "Hola mundo con Vue",
    generos:['Rock','Pop','Jazz'],

    usuarios:[
        {nombre:'Juan', edad:80,estado:true},
        {nombre:'Pedro', edad:8,estado:false},
        {nombre:'Juan2', edad:800,estado:true}
    ],
    
  },
  
});

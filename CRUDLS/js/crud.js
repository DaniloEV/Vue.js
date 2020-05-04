//Se debe instanciar Vue para utilizar vue.js llamando a la libreria
const app = new Vue({
  //Le está diciendo que lo el container app es lo que voy a utilizar o gestionar por parte de vue
  //el y data son propios de vue, se deben escribir a mano
  //data es un objeto, el está colocando las propiedades de está
  el: "#container",
  data: {
    titulo: " CRUD LocalStorage con Vue.js",
    //Se puede enviar como parametro al objeto que le quiero agregar al otro lado de HTML
    tareas: [],
    nuevaTarea: "",
  },
  methods: {
    agregarTarea() {
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false,
      });
      //JSON.stringify(this.tareas) convierte un objeto JS a JSON string
      localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
      this.nuevaTarea = "";
    },
    editarTarea(index) {
      this.tareas[index].estado = true;
      localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
    },
    eliminarTarea(index) {
      //elimina, el 1 ni idea xD
      this.tareas.splice(index, 1);
      localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
    },
  },
  //Metodo para el LocalStorage, se ejecuta cuando carga la pagina
  created: function () {
    //JSON.parse(localStorage.getItem("gym-vue")); convierte de JSON a objeto JS
    let datosDB = JSON.parse(localStorage.getItem("gym-vue"));
    if (datosDB === null) {
      this.tareas = [];
    } else {
      this.tareas = datosDB;
    }
  },
});

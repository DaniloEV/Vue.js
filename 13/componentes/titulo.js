/**
//Crear un componente para trabajar
//El nombre del componente con que se va a trabajar el componente y el objeto
//Los componentes todos tienen un template
/*
 
Para querer trabajar con varias etiquetas html
 */
Vue.component("titulo", {
  //Con las comillas dobles y simples solo sirven para escribir una etiqueta,
  //si quiero escribir varias ``

  //Esta es la estructura basica de los componentes, template, data y puede que lo demàs visto

  /*html*/
  template: `
  <div class="p-5 bg-dark text-light text-center">
      <h1>#13 Action y mapAction con Vuex</h1>
      <h4>Action para hacer procesamiento por BackEnd/API</h4>
       <h4>Por medio de commit hace las mutacion, hace el cambio en el estado y lo visualiza</h4>
    <!-- No olvidar el $ y se maneja como instancia -->
      <h3>Numero {{count}}</h3>
      <h3>Numero {{count2}}</h3>
      <hijo></hijo>
      </div>`,
  // Tiene que ser con :nombre que le manda para que lo reciba como dato y no el nombre de la variable

  computed: {
    //Con los tres puntos esta haciendo que devuelva un objeto, es de JS
    //, no puede devolver un objeto dentro de otro
    //Lo que hace vuex, es que mapea lo que quiero de los state,
    //enviandose por medio de un arreglo y le envia los objetos a utilizar
    //Varios objetos por aparte
    ...Vuex.mapState(["count", "count2"]),
  },
  //Lo que hace es modificar así que se utiliza los metodos
  mounted() {
    this.actions.obtenerCursos();
  },
});

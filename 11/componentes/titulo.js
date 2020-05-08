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
      <h1>#11 mapState con Vuex </h1>
     
    <!-- No olvidar el $ y se maneja como instancia -->
      <h3>Numero {{count}}</h3>
      <hijo></hijo>
      </div>`,
  // Tiene que ser con :nombre que le manda para que lo reciba como dato y no el nombre de la variable

  computed: {
    //Con los tres puntos esta haciendo que devuelva un objeto, es de JS
    //Lo que hace vuex, es que mapea lo que quiero de los state,
    //enviandose por medio de un arreglo y le envia los objetos a utilizar

    ...Vuex.mapState(["count"]),
  },
  // Para no tener que usar todo el store.state se puede hacer con computadas, funcionan igual
  //Pero a la hora de retornar algo no lleva el $
  /*   computed: {
    numero() {
      return store.state.count;
    },
  }, */

  //O se puede utilizar con el map, se puede optimizar, se pueden mapear state, acciones y mutaciones
});

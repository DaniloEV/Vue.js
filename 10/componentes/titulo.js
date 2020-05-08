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
    <!-- No olvidar el $ y se maneja como instancia -->
      <h3>Numero {{$store.state.count}}</h3>
      <hijo :numero="contador" @nombreHijo="nombrePadre = $event" @a="contador=$event"></hijo>
  </div>`,

  // Tiene que ser con :nombre que le manda para que lo reciba como dato y no el nombre de la variable
  data() {
    return {
      nombrePadre: "",
      contador: 0,
    };
  },
});

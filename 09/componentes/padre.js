/**
//Crear un componente para trabajar
//El nombre del componente con que se va a trabajar el componente y el objeto
//Los componentes todos tienen un template
/*
 
Para querer trabajar con varias etiquetas html
 */
Vue.component("padre", {
  //Con las comillas dobles y simples solo sirven para escribir una etiqueta,
  //si quiero escribir varias ``

  //Esta es la estructura basica de los componentes, template, data y puede que lo demàs visto

  /*html*/
  template: `
  <div class="p-5 bg-dark text-light text-center">
      <h3>Componente Padre: {{nombrePadre}}</h3>
      <h3>#09 Comunicación entre componentes De hijo a padre</h3>
     <hr>
      <button class="btn btn-danger" @click="contador++">+</button>
      <h3>Contador: {{contador}}</h3>
        <h3>Contador: {{nombrePadre}}</h3>
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

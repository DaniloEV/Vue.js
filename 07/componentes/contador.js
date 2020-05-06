/**
//Crear un componente para trabajar
//El nombre del componente con que se va a trabajar el componente y el objeto
//Los componentes todos tienen un template
/*
 
Para querer trabajar con varias etiquetas html
 */
Vue.component("contador2", {
  //Con las comillas dobles y simples solo sirven para escribir una etiqueta,
  //si quiero escribir varias ``

  //Esta es la estructura basica de los componentes, template, data y puede que lo demàs visto

  /*html*/
  template: `
  <div>
      <button class="btn btn-primary my-3" @click="contador++">+</button>
      <button class="btn btn-danger my-3" @click="contador--">-</button>
      <h3>Contador {{contador}}</h3>
  </div>`,

  /*Segunda regla de trabajar con componentes, si se quiere trabajar 
  con varias etiquetas debe estar envuelta en algo para que los agarre,
   sino no sirven */

  //La data es una función que debe retornar los datos en los compontentes
  data() {
    return {
      contador: 0,
    };
  },
  /*
     los componentes pueden tener datos propios con data, 
     tomar datos de la instancia o compartir con otros componentes

     
     Los componentes deben estar dentro del div contenedor 
     "el" en este caso container, si no va a servir si quedan fuera
     del container
  */
});

const contador1 = new Vue({
  el: "#container",
});

/**
//Crear un componente para trabajar
//El nombre del componente con que se va a trabajar el componente y el objeto
//Los componentes todos tienen un template
/*
 
Para querer trabajar con varias etiquetas html
 */
Vue.component("hijo", {
  //Con las comillas dobles y simples solo sirven para escribir una etiqueta,
  //si quiero escribir varias ``

  //Esta es la estructura basica de los componentes, template, data y puede que lo demàs visto

  //Un componente puede contener otros componentes que se ocupen
  // A puede contener N cantidad de componentes de B, así sucesivamente

  /*html*/
  template: `
   <div class="py-5 bg-success">
    <h2>Componente Hijo: {{datoPadre}}</h2>
    
    <h2>Componente Hijo: {{datoPadre2}}</h2>
   </div>`,

  //Propiedades que le envia el componente padre
  props: ["datoPadre", "datoPadre2"],

  /*Segunda regla de trabajar con componentes, si se quiere trabajar 
  con varias etiquetas debe estar envuelta en algo para que los agarre,
   sino no sirven */
});

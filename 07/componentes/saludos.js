/**
//Crear un componente para trabajar
//El nombre del componente con que se va a trabajar el componente y el objeto
//Los componentes todos tienen un template
/*
 
Para querer trabajar con varias etiquetas html
 */
Vue.component("saludo", {
  //Con las comillas dobles y simples solo sirven para escribir una etiqueta,
  //si quiero escribir varias ``

  //Esta es la estructura basica de los componentes, template, data y puede que lo demàs visto

  /*html*/
  template: `
   <div>
    <h1>Saludos de forma estatica</h1>   
    <h1>{{titulo}}</h1>
    <h3>{{mensaje}}</h3>
    <h5>{{mensaje2 }}</h5>
   </div>`,

  /*Segunda regla de trabajar con componentes, si se quiere trabajar 
  con varias etiquetas debe estar envuelta en algo para que los agarre,
   sino no sirven */

  //La data es una función que debe retornar los datos en los compontentes
  data() {
    return {
      titulo: "#07 Componentes básicos",
      //Se puede enviar como parametro al objeto que le quiero agregar al otro lado de HTML
      mensaje:
        "Sirven para separar la pagina en diferentes secciones, para logica separada ",
      mensaje2:
        "Trabajar con cli es mejor ya que este genera la estructura de componentes, ayuda para navegadores antiguos con cnd no se puede hacer",
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

//Componentes tienen ciertas reglas
/**
 1-Iniciar vue y trabajar con esta instancia
 2-Segunda regla de trabajar con componentes, si se quiere trabajar 
  con varias etiquetas debe estar envuelta en algo para que los agarre,
   sino no sirven
 */

const app = new Vue({
  el: "#container",
});

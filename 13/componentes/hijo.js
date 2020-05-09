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
   <!-- No olvidar el $ y para llamar mutaciones se utiliza el commit para ejecutar -->
    <button class="btn btn-danger" @click="aumentar">+</button>
     <button class="btn btn-danger" @click="disminuir(2)">-</button>
     <button class="btn btn-danger" @click="obtenerCursos">-</button>
     <h3>Numero {{count}}</h3>
      <h3>Numero {{count2}}</h3>
      <ul v-for="item of cursos">
        <li>Nombre : {{item.nombre}}</li>
      </ul>
      
   </div>`,
  //Mismo computed del padre, es para no estar llamando de manera larga
  computed: {
    ...Vuex.mapState(["count", "count2", "cursos"]),
  },
  methods: {
    ...Vuex.mapMutations(["aumentar", "disminuir"]),
    ...Vuex.mapActions(["obtenerCursos"]),
  },
});

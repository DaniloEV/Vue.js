const store = new Vuex.Store({
  //1 Iniciar un estado, se colocan los datos
  //El estado,la fuente de la verdad que impulsa nuestra aplicación;
  state: {
    count: 45,
    count2: 45,
    cursos: [],
  },
  mutations: {
    aumentar() {
      this.state.count++;
    },
    //Con parametro
    disminuir(state, n) {
      state.count2 -= n;
    },
    //2 Despues las mutations
    llenarCursos(state, cursosAccion) {
      state.cursos = cursosAccion;
    },
  },
  /*Dentro de actions, está llamando la api que consume cursos.json
        El commit llama a llenarCursos y le envia el cursos */

  //Para traer datos desde API,1 primero van las actions
  actions: {
    //Async y await, por las promesas de Fetch
    //Nuevo de JS los async y await
    //La palabra async va antes de function siempre
    obtenerCursos: async function ({ commit }) {
      //await ocupa que esté el async, estamos esperando a que termine la primeso para mostrarla
      const data = await fetch("componentes/cursos.json");

      //Me convierte la información en json
      const cursos = await data.json();
      commit("llenarCursos", cursos);
    },
  },
});

const app = new Vue({
  el: "#container",
  //JS entiende que si lo escribo una vez significa que se llaman igual
  //Seria como hacer store:store
  store,
});

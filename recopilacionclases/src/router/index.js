import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Foto19 from "../views/19/Fotos.vue";
import Foto20 from "../views/20/Fotos.vue";

Vue.use(VueRouter);
//Está es una manera de llamar al componente, realiza el import arriba y el component es el nombre
//de abajo
const routes = [
  {
    //path es donde irá
    path: "/",
    //Nombre que se ocupará para llamar en el router link
    name: "Home",
    //Este llama al componente
    component: Home,
  },

  //Se puede hacer sin poner el import aparte y colocarlo a la todo junto,
  //con arrow functions
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/service",
    name: "Service",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Service" */ "../views/18/Service.vue"),
  },
  //Ruta dinamica #19 capitulo
  {
    //:id es para ruta dinamica, cuando venga el parametro lo colocará ahí
    path: "/fotos/:num",
    name: "Fotos19",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    component: Foto19,
  },
  {
    //:id es para ruta dinamica, cuando venga el parametro lo colocará ahí
    path: "/fotos/:num",
    name: "Fotos20",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    component: Foto20,
  },
  {
    //:id es para ruta dinamica, cuando venga el parametro lo colocará ahí
    path: "/bootInstalacion",
    name: "bootInstalacion",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "Service" */ "../views/21/bootInstalacion.vue"
      ),
  },
  {
    //:id es para ruta dinamica, cuando venga el parametro lo colocará ahí
    path: "/navbar",
    name: "Navbar",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Service" */ "../views/22/navBar.vue"),
  },
  {
    //:id es para ruta dinamica, cuando venga el parametro lo colocará ahí
    path: "/columna",
    name: "Columna",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Service" */ "../views/23/columna.vue"),
  },
  {
    //:id es para ruta dinamica, cuando venga el parametro lo colocará ahí
    path: "/formulario",
    name: "Formulario",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Service" */ "../views/25/formulario.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

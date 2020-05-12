import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Foto from "../views/Fotos.vue";

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
      import(/* webpackChunkName: "Service" */ "../views/Service.vue"),
  },
  //Ruta dinamica #19 capitulo
  {
    //:id es para ruta dinamica, cuando venga el parametro lo colocará ahí
    path: "/fotos/:id",
    name: "Fotos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Foto,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

<template>
  <div class="container">
    <ul class="list-group text-center">
      <li
        v-for="(fruta, index) of arrayOrdenado"
        :key="fruta.id"
        @click="aumentar(index)"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{ index + 1 }} - {{ fruta.nombre }}
        <span class="badge badge-primary badge-pill">{{ fruta.cantidad }}</span>
      </li>
      <button class="btn btn-danger p-2" @click="reiniciar()">Reiniciar</button>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Lista",
  computed: {
    ...mapState(["frutas"]),
    //Es de JS
    arrayOrdenado() {
      //Funcion que enviar puntos de comparacion en los paramentros, retorna ordenado el array con lo que quiera ordenar
      //Como es de flecha retorna
      return this.frutas.sort((a, b) => b.cantidad - a.cantidad);
    },
  },
  methods: {
    ...mapMutations(["aumentar", "reiniciar"]),
  },
};
</script>

<template>
  <div>
    <h1>Galeria fotos</h1>
    <!-- 20 -->
    <!-- Trabaja desde donde está, solo ocupa el numero -->
    <!-- el to ocupa los dos puntos para hacer un objeto de este
    el name es el que tiene en el router la pagina para direccionar
    recibe como parametros el id, osea el item, normalmente seria el id que tenga el item -->
    <router-link
      :to="{ name: 'Fotos20', params: { num: item } }"
      v-for="(item, index) of fotoGaleria"
      :key="index"
    >
      <button>Foto {{ index + 1 }}</button>
    </router-link>
    <!-- 20 -->

    <fotoCom></fotoCom>
    <button @click="home">Home</button>
    <button @click="anterior">Anterior</button>
    <button @click="siguiente">Siguiente</button>
  </div>
</template>
<script>
import fotoCom from "@/components/20/fotoCom.vue";
export default {
  components: {
    fotoCom,
  },
  data() {
    return {
      fotoGaleria: [1, 2, 3, 6],
    };
  },
  methods: {
    home() {
      //Hace que vaya a la ruta de inicio
      this.$router.push("/");
    },
    anterior() {
      //Se mueve hacia atras con el historial
      this.$router.go(-1);
    },
    siguiente() {
      //Se mueve hacia adelante
      this.$router.go(1);
    },
  },
};
</script>

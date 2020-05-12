<template>
  <div>
    <h1>Galeria fotos</h1>
    <h2>Si por url le agrego el dato lo hará</h2>
    <fotoCom></fotoCom>
  </div>
</template>
<script>
import fotoCom from "@/components/19/fotoCom19.vue";
export default {
  components: {
    fotoCom,
  },
  data() {
    return {
      fotoGaleria: [1, 2, 3, 6],
    };
  },
};
</script>

<template>
  <div>
    <!-- Este es componente que va a utilizar en el views -->
    <!-- $route.params.id sirve para enviar como parametro el id que deseemos  -->
    <h1>Foto desde componente:{{ $route.params.num }}</h1>
    <h1>Le manda el numero de la clase que se recibe</h1>
  </div>
</template>
<script>
export default {
  name: "Foto",
};
</script>

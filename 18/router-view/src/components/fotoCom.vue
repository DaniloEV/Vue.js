<template>
  <div>
    <!-- Este es componente que va a utilizar en el views -->
    <!-- $route.params.id sirve para enviar como parametro el id que deseemos  -->
    <h1>Foto desde componente:{{ $route.params.id }}</h1>
  </div>
</template>
<script>
export default {
  name: "Foto",
};
</script>

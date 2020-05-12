<template>
  <div class="home">
    <index />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Index from "@/components/index.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Index,
  },
};
</script>

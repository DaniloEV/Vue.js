<template>
  <div>
    <div class="container">
      <h1>Clases Vue.js</h1>
      <img alt="Vue logo" src="@/assets/logo.png" />
      <ul class="list-group text-center">
        <!-- Utiliza el index de store para agregar los objetos -->
        <li
          v-for="(clase, index) of clases"
          :key="index"
          class="list-group-item d-flex justify-content-between align-items-center "
        >
          <!-- El name es el que debe tener el index de router -->
          <router-link
            :to="{ name: clase.pag, params: { num: clase.num1 } }"
            class="w-100"
          >
            <h6>
              <span class="badge badge-primary badge-pill">{{ clase.id }}</span>
            </h6>
            <h6>{{ clase.nombre }}</h6>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Lista",
  computed: {
    ...mapState(["clases"]),
  },
};
</script>

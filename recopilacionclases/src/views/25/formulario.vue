<template>
  <div>
    <h1>#25 Formulario con Bootstrap 4 + Vue</h1>
    <b-container>
      <form>
        <!-- Se puede relacionar por medio del v-model de toda la vida -->
        <b-form-input type="text" v-model="texto"></b-form-input>
      </form>
      <p>Texto : {{ texto }}</p>

      <h4>Validaciones</h4>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-valid">Valid State:</label>
        </b-col>
        <b-col sm="9">
          <!-- Con state hago que se valide si quiero algo con especifica validación -->
          <b-form-input
            readonly
            id="input-valid"
            :state="comprobar"
            placeholder="Valid input"
            v-model="texto"
          ></b-form-input>
        </b-col>
      </b-row>
      <h4>Select</h4>
      <!-- v-model toma la opcion, options,es el que llena -->
      <b-form-select
        v-model="selected"
        :options="options"
        size="sm"
        class="mt-3"
      ></b-form-select>
      <div class="mt-3">
        Selected: <strong>{{ selected }}</strong>
      </div>

      <b-form-group label="Radios using options">
        <b-form-radio-group
          id="radio-group-1"
          v-model="selected2"
          :options="options2"
          name="radio-options"
        ></b-form-radio-group>
      </b-form-group>
      <div class="mt-3">
        Selected: <strong>{{ selected2 }}</strong>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
      texto: "",
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        //Se le puede mandar css estilos
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      selected2: null,
      options2: [
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        //Se le puede mandar css estilos
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
  computed: {
    comprobar() {
      return this.texto.length > 2 ? true : false;
    },
  },
};
</script>

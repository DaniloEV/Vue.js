<template>
  <div>
    <h1>#23 Columnas responsives [Row/Col]</h1>

    <b-container class="mt-5">
      <!-- Todo lo que esté de manera dinamica estará en el container para eso el router-view -->
      <b-row>
        <b-col cols="12" md="6" lg="5">1 of 2</b-col>
        <b-col>2 of 2</b-col>
      </b-row>

      <b-row cols="12" md="6" lg="5">
        <b-col cols="12" md="6" lg="5">1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container>
    <h1>#24 Botones y Cards</h1>

    <div>
      <b-button class="m-1">Button</b-button>
      <b-button variant="danger" class="m-1">Button</b-button>
      <b-button variant="success" class="m-1">Button</b-button>
      <b-button variant="outline-primary" class="m-1">Button</b-button>
    </div>
    <b-container class="mt-5">
      <b-row>
        <b-col cols="12" md="6">
          <div>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <div>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Columna",
};
</script>

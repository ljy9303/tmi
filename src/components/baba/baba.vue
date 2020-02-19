<template>
  <v-container>
    <!-- Columns are always 50% wide, on mobile and desktop -->
    <v-row>
      <v-col
        cols="2"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <BaBa-Side></BaBa-Side>
        </v-card>
      </v-col>
     <v-col
        cols="10" md="7"
      >
      <v-card
          class="pa-2"
          outlined
          tile
          dark
        >
        <div>
          <div>아크칸 투구</div>
          </div>
      </v-card>
      <v-divider></v-divider>
      <BaBa></BaBa>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import BaBaSide from './babaSide'
  import BaBa from './babaTable'
  export default {
    name: 'baba-side-item',
    components: {
        BaBaSide,
        BaBa
    },
    data: () => ({
      
    })
  }
</script>
<style scss>
.v-slide-group__prev {
    min-width:30px;
}
.v-slide-group__next {
    min-width:30px;
}
.v-tab {
    padding: 0 10px;
}
</style>
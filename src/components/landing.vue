<template>
  <v-container>
    <v-row v-col="12">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <landing-top></landing-top>
    </v-row>
    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <router-view></router-view>
    <v-row v-cols="10">
    <v-col
        cols="8" md="5"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          .col-6
        </v-card>
      </v-col>
    </v-row>
    
    <v-row v-col="10">
    
          <v-col
        cols="8" md="5"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          .col-6
        </v-card>
      </v-col>
    </v-row>
    <!-- Columns are always 50% wide, on mobile and desktop -->
  </v-container>
</template>

<script>
  import LandingTop from './landingTop'
  export default {
    name: 'landing',
    components: {
      LandingTop,
    },
    data: () => ({
      
    })
  }
</script>

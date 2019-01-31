<template>
  <v-container grid-list-md text-xs-center>


    <h2>Vuetify Grid System</h2>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">12</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 2" :key="`6${i}`" xs6>
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 3" :key="`4${i}`" xs4>
        <v-card dark color="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 4" :key="`3${i}`" xs3>
        <v-card dark color="secondary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 6" :key="`2${i}`" xs2>
        <v-card dark color="primary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 12" :key="`1${i}`" xs1>
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <h2>Ordering</h2>
    <v-layout row>
      <v-flex xs6 order-lg2>
        <v-card dark tile flat color="error">
          <v-card-text>#1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card dark tile flat color="red darken-4">
          <v-card-text>#2</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4 order-md2 order-xs1>
        <v-card dark tile flat color="red lighten-1">
          <v-card-text>#1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md3 order-xs2>
        <v-card dark tile flat color="red lighten-2">
          <v-card-text>#2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md1 order-xs3>
        <v-card dark tile flat color="red darken-1">
          <v-card-text>#3</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 order-md4 order-sm2>
        <v-card dark tile flat color="red darken-2">
          <v-card-text>#1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md3 order-sm1>
        <v-card dark tile flat color="deep-orange lighten-1">
          <v-card-text>#2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md2 order-sm4>
        <v-card dark tile flat color="deep-orange darken-3">
          <v-card-text>#3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md1 order-sm3>
        <v-card dark tile flat color="deep-orange">
          <v-card-text>#4</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <h2>Direction and Align</h2>
    <v-layout row justify-space-between>
      <v-flex xs2>
        <v-card dark color="primary">
          <v-card-text>one</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="secondary">
          <v-card-text>two</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="accent">
          <v-card-text>three</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row justify-space-around>
      <v-flex xs2>
        <v-card dark color="primary">
          <v-card-text>one</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="secondary">
          <v-card-text>two</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="accent">
          <v-card-text>three</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs2>
        <v-card dark color="primary">
          <v-card-text>one</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="secondary">
          <v-card-text>two</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="accent">
          <v-card-text>three</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  
</template>

<script>
  export default {
    data: () => ({ })
  }
</script>

<style>

</style>

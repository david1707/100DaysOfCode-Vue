<template>
  <v-app>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Just testing Vuetify things :-)</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Grid />
    </v-content>
    <v-content>
      <GridList />
    </v-content>
  </v-app>
</template>

<script>
import Grid from './components/Grid'
import GridList from './components/GridList'

export default {
  name: 'App',
  components: {
    Grid,
    GridList
  },
  data () {
    return {
      //
    }
  }
}
</script>

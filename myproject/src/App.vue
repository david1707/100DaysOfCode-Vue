<template>
  <div id="app">
    <h1>{{ title }} </h1>
    <Navbar />
      <nav>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'app',
  components: {
    Navbar,
  },
  data () {
    return {
      title: 'My first Vue app, awesome! :)'
    }
  }
}
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>

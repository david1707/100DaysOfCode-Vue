<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <ListTodo />
    </div>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import ListTodo from './components/ListTodo.vue'

export default {
  name: 'app',
  components: {
    AddTodo,
    ListTodo
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

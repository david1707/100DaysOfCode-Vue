<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <ListTodo 
        :todos="todos"
        @removeTodo="removeTodo"/>
    </div>
  </div>
</template>

<script>
import { bus } from './main'
import AddTodo from './components/AddTodo.vue'
import ListTodo from './components/ListTodo.vue'

export default {
  name: 'app',
  components: {
    AddTodo,
    ListTodo
  },
  data() {
    return {
      todos: [
        { title: "Learn Vue", finished: true, editing: false },
        { title: "Create a ToDo", finished: false, editing: false },
        { title: "Never use Vue.js", finished: false, editing: false },
        { title: "Create another project", finished: false, editing: false },
        { title: "Get hired as Vue programmer", finished: false, editing: false },
        { title: "Stop coding", finished: false, editing: false },
      ],
    }
  },
  created() {
    bus.$on('addTodo', data => {
      this.todos.push({ title: data, finished: false, editing: false})
    }),
    bus.$on('removeTodo', data => {
      this.todos.splice(data, 1);
    })
  }
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

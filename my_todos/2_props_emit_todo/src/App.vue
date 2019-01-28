<template>
  <div id="app">
    <div class="container">
      <AddTodo 
        @addTodo="addTodo"/>
      <ListTodo 
        :todos="todos"
        @removeTodo="removeTodo"/>
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
  methods: {
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    addTodo(newTodo) {
      this.todos.push({ title: newTodo, finished: false, editing: false})
    }
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

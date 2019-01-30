import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { title: "Learn Vue", finished: true, editing: false },
      { title: "Create a ToDo", finished: false, editing: false },
      { title: "Never use Vue.js", finished: false, editing: false },
      { title: "Create another project", finished: false, editing: false },
      { title: "Get hired as Vue programmer", finished: false, editing: false },
      { title: "Stop coding", finished: false, editing: false },
    ],
  },
  mutations: {
    removeTodo(state, index) {
      state.todos.splice(index, 1);
    },
    addTodo(state, newTodo) {
      state.todos.push({ title: newTodo, finished: false, editing: false})
    }
  },
})

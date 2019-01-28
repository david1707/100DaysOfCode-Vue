<template>
  <div class="main">
      <div class="container">
        <h3>Simple Todo - 1 Component</h3>
        <!-- Add Todo -->
        <div class="section">
          <input 
            type="text"
            class="add-todo col-8 offset-2"
            placeholder="Add a new ToDo"
            v-model="newTodo"
            @keyup.enter="addTodo()">
        </div><!-- ./Add Todo -->

        <!-- Show Todos -->
        <div class="section">
          <div v-for="(todo, index) of todos" :key="index">
            <p
              v-if="!todo.editing"
              :class="{ isFinished: todo.finished }"
              > <i class="fas fa-check" @click="todo.finished = !todo.finished"> </i> {{ todo.title }}
              <span class="options">
                <i class="fas fa-edit" @click="todo.editing = true"></i>
                <i class="fas fa-trash" @click="removeTodo(index)"></i>
              </span>
            </p>
            <p v-else>
              <input 
                type="text"
                v-model="todo.title"
                @keyup.enter="todo.editing = false">
            </p>
          </div>
        </div><!-- ./Show Todos -->
      </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
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
      newTodo: '',
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ title: this.newTodo, finished: false})
      this.newTodo = '';
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
i {
  padding: 0em 0.5em;
}

.container {
  div {
    width: 80%;
    margin: 0 auto;

    div {
      p {
        text-align: left;
      }
    }
  }
  .section {
    padding: 2em 0em;
    margin: 0 auto;

    input {
      width: 80%;
    }
  }
}

.add-todo {
  font-style: italic;
}

.fa-edit {
  color: #5490ef;
}

.fa-trash {
  color: #ff5a5a;
}

.options {
  float: right;

  i {
    padding: 0.5em;
  }
}

/* 
  Optional classes
*/

.isFinished {
  text-decoration: line-through;
}


</style>

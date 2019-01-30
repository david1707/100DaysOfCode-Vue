<template>
  <div class="addTodo">
    <div class="container">
      <h3>Vuex - 2 Component</h3>
        <!-- Add Todo -->
        <div class="section">
          <input 
            type="text"
            class="add-todo col-8 offset-2"
            placeholder="Add a new ToDo"
            v-model="newTodo"
            @keyup.enter="addTodo(newTodo)">
      </div><!-- ./Add Todo -->
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'addTodo',
  data() {
    return {
      newTodo: '',
    }
  },
  methods: {
    ...mapMutations([
      'addTodo'
    ])
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

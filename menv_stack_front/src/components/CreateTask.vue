<template>
  <div>
    <h2>Create a new task</h2>
    <div class="row">
      <form action="col s12">
        <div class="row">
          <div class="input-field col offset-s4 s4">
            <input id="title" type="text" class="validate" v-model="title">
            <label for="title">Title of the task</label>
          </div>
        </div>        
        <div class="row">
          <div class="input-field col offset-s4 s4">
            <input id="description" type="text" class="validate" v-model="description">
            <label for="description">Description of the task</label>
          </div>
        </div>
        <a class="btn-large btn waves-effect waves-light" @click.prevent="createTask">Save Task</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateTask',
  data() {
    return {
      title: '',
      description: '',
    }
  },
  methods:{
    createTask() {
      axios.post('http://localhost:3000/tasks/', {
        title: this.title,
        description: this.description
      })
      .then( () => {
        this.$emit('newTask', {title: this.title, description: this.description})
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

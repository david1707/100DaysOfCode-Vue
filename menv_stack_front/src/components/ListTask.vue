<template>
  <div>
    <h2>List Task</h2>
    <ul class="collapsible">
      <li v-for="task in tasks" :key="task._id">
        <div class="collapsible-header"><i class="material-icons">play_arrow</i>{{ task.title }}</div>
        <div class="collapsible-body"><span>{{ task.description }}</span></div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListTask',
  data() {
    return {
      tasks: [],
    }
  },
  mounted() {
    axios.get('http://localhost:3000/tasks/')
      .then(response => 
        this.tasks = response.data
      )
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

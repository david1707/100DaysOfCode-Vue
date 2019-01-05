<template>
  <div id="app" class="row center">
    <div class="teal navbar">
      <h2 class="white-text center">ToDo List with MEVN Stack</h2>
    </div>
    <div class="col s6">
      <app-create-task @newTask="newTask=$event"/>
    </div>
    <div class="col s6">
      <app-list-tasks/>
    </div>
  </div>
</template>

<script>
import CreateTask from './components/CreateTask'
import ListTask from './components/ListTask'

export default {
  name: 'app',
  data() {
    return {
      newTask: [],
    }
  },
  components: {
    'app-create-task': CreateTask,
    'app-list-tasks': ListTask,
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
.navbar {
  top: 0px;
  width: 100%;
}
</style>

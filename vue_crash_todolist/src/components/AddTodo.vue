<template>
    <div>
        <form @submit.prevent="addTodo">
            <input type="text" name="title" placeholder="Add todo..." v-model="title">
            <input type="submit" value="Submit" class="btn">
        </form>    
    </div>    
</template>

<script>
export default {
    name: 'AddTodo',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo() {
            const newTodo = {
                title: this.title,
                completed: false,
            }

            // Send upwards to parent
            this.$emit('add-todo', newTodo);
        }
    }
}
</script>

<style scoped>
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }
  input[type="submit"] {
    flex: 2;
  }
</style>

<template>
    <div class="blogs">
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p> {{ post.body | snippet }} </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'blogs',
    data() {
        return {
            posts: Array
        }
    },
    methods: {

    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then( response => 
            this.posts = response.data
        )
        .catch( err => {
            console.log(err)
        });
    }

}
</script>

<style>

</style>

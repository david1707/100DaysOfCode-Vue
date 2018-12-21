<template>
    <nav class="main-nav">
        <ul>
            <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'About' }">About</router-link></li>
        </ul>
        <h2>User Profiles</h2>
        <ul>
            <li v-for="userId in userIds" :key="userId.id">
                <router-link :to="{ name: 'ViewProfile', params: { user_id: userId }}"><span>Profile #{{ userId }}</span></router-link>
            </li>
        </ul>
        <h2>Navigation Controls</h2>
        <ul>
            <li><button @click="goBack">Go to the previous page</button></li>
            <li><button @click="goHome">Redirect to Home</button></li>
            <li><button @click="goForward">Go to the next page</button></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            userIds: ['1', '2', '3', '4'],
        }
    },
    methods: {
        goHome() {
            this.$router.push( { name: 'Home' });
        },
        goBack() {
            this.$router.go(-1);
        },
        goForward() {
            this.$router.go(+1);
        },
    }
}
</script>

<style>
ul {
    list-style-type: none;
    padding: 0;
}
a {
    color: #42b983;
}
li {
    display: inline-block;
    margin: 10px;
}
</style>

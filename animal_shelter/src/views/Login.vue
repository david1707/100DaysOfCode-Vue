<template>
  <div class="login container">
    <form class="card-panel" @submit.prevent="login">
      <h2 class="center">Login</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <div class="field center">
        <button class="btn waves-effect waves-light col s10 offset-s1">Login</button>
      </div>
    </form>
  </div>
</template>
<script>
import firebase from 'firebase';
import router from '@/router.js'

import '../firebase/init.js'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then( user => {
          console.log(user);
          router.push( "admin" )
        })
        .catch( err => {
          console.log(err)
        });
    }
  }

}
</script>

<style lang="scss" scoped>
  .login {
    padding: 10%;
  }

  h2 {
    color: #009688;
  }
</style>
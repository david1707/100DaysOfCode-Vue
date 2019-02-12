<template>
  <div class="admin container">
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

export default {
  name: 'admin',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      if (this.email && this.password) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then( cred => console.log(cred.user));
        // firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        //   .then( crec => console.log(cred.user) });
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  .admin {
    padding: 10%;
  }

  h2 {
    color: #009688;
  }
</style>
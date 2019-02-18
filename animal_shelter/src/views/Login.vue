<template>
  <div class="login container">
    <form class="card-panel" @submit.prevent="login">
      <h2 class="center">Login</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" :class="{ error: $v.email.$error }" class="validate" @blur="$v.email.$touch()" name="email" v-model="email">
        <p v-if="$v.email.$error"><i> Please, provide a valid email</i></p>
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" :class="{ error: $v.password.$error }" class="validate" @blur="$v.password.$touch()" name="password" v-model="password">
        <p v-if="$v.password.$error"><i> Please, provide a password email</i></p>
      </div>
      <div class="field center">
        <button class="btn waves-effect waves-light col s10 offset-s1" :disabled="$v.$invalid">Login</button>
      </div>
    </form>
  </div>
</template>
<script>
import firebase from 'firebase';
import router from '@/router.js'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      minLength: minLength(12)
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then( user => {
          console.log(user);
          router.push( "admin" )
        })
        .catch( () => {
          this.$toasted.show(`Error: Wrong email or password`, { 
            theme: "bubble", 
            position: "top-right", 
            duration: 5000,
            icon: 'markunread_mailbox',
            fullWidth: 'true'
          });
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

  input.error {
    border-bottom: 1px solid #F44336 !important;
    -webkit-box-shadow: 0 1px 0 0 #F44336 !important;
    box-shadow: 0 1px 0 0 #F44336 !important;
  }
</style>
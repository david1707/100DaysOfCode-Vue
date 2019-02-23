<template>
  <div class="contact-form">
    <form class="col s12">
        <div class="row">
        <div class="input-field col s6" :class="{ invalid_value: $v.first_name.$error }">
            <i class="material-icons prefix">person</i>
            <input id="first_name" type="text" class="validate" @blur="$v.first_name.$touch()" v-model="first_name">
            <label for="first_name">First Name</label>
            <p v-if="$v.first_name.$error"><i> Please, provide a valid first name</i></p>
        </div>
        <div class="input-field col s6" :class="{ invalid_value: $v.last_name.$error }">
            <i class="material-icons prefix">person</i>
            <input id="last_name" type="text" class="validate" @blur="$v.last_name.$touch()" v-model="last_name">
            <label for="last_name">Last Name</label>
            <p v-if="$v.last_name.$error"><i> Please, provide a valid last name</i></p>
        </div>
        </div>
        <div class="row">
        <div class="input-field col s6">
            <vuejsDatepicker v-model="birthdate" :monday-first="true"></vuejsDatepicker>
            <label class="active" >Birthdate</label>
        </div>
        <div class="input-field col s6" :class="{ invalid_value: $v.email.$error }">
            <i class="material-icons prefix">email</i>
            <input id="email" type="email" class="validate" @blur="$v.email.$touch()" v-model="email">
            <label for="email">Email</label>
            <p v-if="$v.email.$error"><i> Please, provide a valid email</i></p>
        </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
            <i class="material-icons prefix">comment</i>
            <textarea id="textarea1" class="materialize-textarea" v-model="comments"></textarea>
            <label for="textarea1">Comments</label>
        </div>
        </div>
        <div class="row">
          <button 
              class="btn waves-effect waves-light col s10 offset-s1"
              type="submit"
              name="action"
              :disabled="$v.$invalid"
              @click.prevent="send">Submit
              <i class="material-icons right">send</i>
          </button>
        </div>
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'contact-form',
  data() {
    return {
      first_name: null,
      last_name: null,
      birthdate: null,
      email: null,
      comments: null,
    }
  },
  props: {
    pre_comment: String,
  },
  components: {
    vuejsDatepicker: Datepicker,
  },
  validations: {
    first_name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(30),
    },
    last_name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(30),
    },
    email: {
      required,
      email,
      minLength: minLength(10),
      maxLength: maxLength(50),
    }
  },
  methods: {
    send() {
      let d = new Date(this.birthdate);
      let date_birthdate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
      this.$toasted.show(`Thanks ${this.first_name} ${this.last_name}! We will contact you at ${this.email}!`, { 
        theme: "bubble", 
        position: "top-right", 
        duration: 5000,
        icon: 'markunread_mailbox',
        fullWidth: 'true'
      });
    }
  },
  created() {
    this.comments = this.pre_comment;
    let today = new Date();
    this.birthdate = today.setFullYear(today.getFullYear() - 30);
  }
}
</script>

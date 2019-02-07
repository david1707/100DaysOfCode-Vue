<template>
  <div class="volunteering">
    <div>
      <img src="https://c.pxhere.com/photos/d7/d9/dogs_kids_children_seecanyon-242466.jpg!d" alt="">
    </div>
    <!-- First block of text -->
    <div class="container">
      <div class="row">
        <h3 >Why volunteer?</h3>  
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tenetur pariatur quasi, provident, natus labore, perferendis eveniet repellat cumque maiores deleniti quam. Eligendi quia repellendus optio nulla tempora libero nostrum, reprehenderit quae, explicabo maiores corrupti pariatur sit cumque quibusdam deserunt!</p>
        <p>Adipisci omnis nobis inventore quidem dolor vero. Distinctio assumenda repudiandae illum molestiae velit nostrum voluptas vel ex libero, commodi cum delectus similique deleniti iusto amet ad. Cum earum accusamus fugit sit? Facere illum, debitis fugiat molestiae adipisci suscipit harum neque.</p>
        <p>Quisquam ducimus rerum dignissimos aperiam, mollitia magnam id inventore, qui ex eius nesciunt asperiores ipsum maxime facere. Eius doloremque praesentium eum dolores omnis esse earum nostrum nulla qui voluptate! Delectus nesciunt ipsa alias deserunt ratione pariatur nisi ab maxime a.</p>
        <p>Itaque inventore, provident consequuntur nesciunt unde tenetur eveniet? Suscipit mollitia officia vel delectus? Quas, amet adipisci ex excepturi consequatur ullam assumenda quasi. Eos id numquam perferendis autem minus facere labore velit fugiat deserunt nemo expedita culpa, omnis dolore voluptatem esse!</p>
        <p>Dolore, aperiam, ipsum corrupti ex nisi doloremque culpa consequuntur perferendis, officiis eum quam! Quis ratione maiores est. Excepturi dolor corrupti et quaerat aut culpa, cum obcaecati architecto exercitationem repellat eveniet suscipit nesciunt accusamus expedita numquam laborum sunt placeat asperiores facilis.</p>
      </div>
      <div class="row">
        <h3>What we have achieved:</h3>  
          <ul class="collection">
            <li class="collection-item"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat<a href="#!" class="secondary-content"><i class="material-icons">accessible</i></a></div></li>
            <li class="collection-item"><div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, ab.<a href="#!" class="secondary-content"><i class="material-icons">favorite</i></a></div></li>
            <li class="collection-item"><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, laborum<a href="#!" class="secondary-content"><i class="material-icons">supervisor_account</i></a></div></li>
            <li class="collection-item"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dignissimos!<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a></div></li>
            <li class="collection-item"><div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, adipisci!<a href="#!" class="secondary-content"><i class="material-icons">visibility</i></a></div></li>
          </ul>
      </div>
    </div><!-- ./First block of text -->

    <img src="https://c.pxhere.com/photos/0f/1f/cat_thai_cat_cats_pet_animals_cute_cat_s_eye_cat_eyes-703574.jpg!d" alt="">

    <div class="container">
      <div class="row">
        <h3 >Your life as a volunteer</h3>
          <ul class="collection">
            <li class="collection-item"><div> Lorem ipsum, dolor sit amet consectetur adipisicing elit: <a href="#!" class="secondary-content"></a></div></li>
            <li class="collection-item"><div> - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eveniet aspernatur praesentium tempora odit illum atque rem, nostrum aliquid deserunt ratione eos exercitationem. <a href="#!" class="secondary-content"></a></div></li>
            <li class="collection-item"><div> - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod est suscipit dolorum rerum sed deserunt nihil nemo iure, nulla, quibusdam numquam. Dolor blanditiis, velit expedita quasi dolore reiciendis ut tenetur doloribus. Veniam! <a href="#!" class="secondary-content"></a></div></li>
            <li class="collection-item"><div> - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta sunt maiores tempore nesciunt dignissimos at eveniet obcaecati inventore facilis, in, vel ducimus quae adipisci quibusdam quas repudiandae a ut placeat temporibus. Culpa molestias vitae sapiente nisi, deleniti nihil voluptatibus est? <a href="#!" class="secondary-content"></a></div></li>
            <li class="collection-item"><div> - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quibusdam qui aliquid natus nostrum quam beatae voluptas consequuntur quisquam omnis distinctio, quod quasi ea velit et corrupti aperiam! <a href="#!" class="secondary-content"></a></div></li>
            <li class="collection-item"><div> - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia modi consectetur sunt minus! <a href="#!" class="secondary-content"></a></div></li>
          </ul>
      </div>
      <br>
      <div class="row">
        <h3>Join us and help us to help!</h3>  
        <br>
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
    </div><!-- ./First block of text -->

  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'volunteering',
  data() {
    return {
      first_name: null,
      last_name: null,
      birthdate: null,
      email: null,
      comments: null,
    }
  },
  components: {
    vuejsDatepicker: Datepicker
  },
  validations: {
    first_name: {
      required,
      minLength: minLength(2)
    },
    last_name: {
      required,
      minLength: minLength(2)
    },
    email: {
      required,
      minLength: minLength(10)
    }
  },
  methods: {
    send() {
      let d = new Date(this.birthdate);
      let date_birthdate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
      console.log(`Email sent:\n${this.first_name} ${this.last_name} born in ${date_birthdate} requested help about how to volunteer.\nComments: ${this.comments}\nContact at: ${this.email}`)
      this.$toasted.show(`Thanks ${this.first_name} ${this.last_name}! We will contact you at ${this.email}!`, { 
        theme: "bubble", 
        position: "top-right", 
        duration : 5000000,
        icon: 'markunread_mailbox',
        fullWidth: 'true'
      });
    }
  },
  created() {
    let today = new Date();
    this.birthdate = today.setFullYear(today.getFullYear() - 30);
  }
}
</script>

<style lang="scss">
  div > div > img {
    width: 100vw;
    height: 99vh;
  }

  ul.collection {
    border: 0px;

    .collection-item { 
      border: 0px;
    }
  }

  .invalid_value, .invalid_value label {
    color: red;
  }

  .toasted.bubble {
    background-color: #2bbbad !important;
  }

</style>


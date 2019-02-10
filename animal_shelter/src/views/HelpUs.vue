<template>
  <div class="help-us">
    <div>
      <img src="https://www.bettercitiesforpets.com/wp-content/uploads/2017/08/pets-in-classroom-header.jpg" class="full-image" alt="">
    </div>

    <!-- Container -->
    <div class="container">
      <div class="row">
        <h2>Ways to help our community to grow</h2>
        <p>There are a lot of ways you can help our little community to grow!</p>
      </div>
      <div class="row">
        <h4><router-link to="/volunteering">Volunteering</router-link></h4>
        <p>Why you should be volunteering:</p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non rerum, nemo officiis a eveniet cum accusamus ratione!</li>
          <li>Odio, culpa? Totam vero, consequuntur a officiis ducimus eaque sit expedita repellat? Libero eius maiores explicabo quam.</li>
          <li>Porro tempore similique doloremque eaque velit ea vel amet optio. Non quia sunt optio neque dolor ratione.</li>
          <li>Fugit vero repellendus rerum placeat veniam doloremque, id quia vel architecto autem? Eaque fugit consequatur fuga laborum?</li>
        </ul>
      </div>
      <div class="row">
        <h4>Become a member of Shelter Name family</h4>
        <p>Help us with a small montly donation of 15€ to help us buy food, beds, toys, etc for our pets.</p>
        <p>By doing so, you don't only help us, but you'll get discounts in our affiliated partners:</p>
        <div class="affiliated">
          <img src="https://via.placeholder.com/300x150?text=Local%20food%20restaurant%20logo" alt="">
          <img src="https://via.placeholder.com/300x150?text=Local%20food%20shop%20logo" alt="">
          <img src="https://via.placeholder.com/300x150?text=Supermarket%20logo" alt="">
          <img src="https://via.placeholder.com/300x150?text=construction%20business%20logo" alt="">
          <img src="https://via.placeholder.com/300x150?text=local%20book%20shop%20logo" alt="">
          <img src="https://via.placeholder.com/300x150?text=Local%20food%20restaurant" alt="">
        </div>
      </div>
      <div class="row">
        <h4>Become an Shelter Name partner!</h4>
        <p>Make your business be recognized as an animal friendly company!</p>
        <p>Become affiliated with us by giving a small discount (at least a 10%) to the Shelter Name family members</p>
        <p>In return, your name and logo will be in our affiliated section and in each event we will perform</p>
        <contact-form pre_comment="I want to become a partner, please contact me via email to provide more information"></contact-form>
      </div>
    </div><!-- ./Container -->

    <div class="row">
      <img class="full-image" src="https://i.pinimg.com/originals/bb/27/44/bb27447dd4bc561b2f3bdd2dbb777a95.jpg" alt="">
    </div>

    <!-- Container -->
    <div class="container">
      <div class="row">
        <h4>Donating</h4>
        <p>Do you have toys your pet don't use anymore? Do you want to give away food? Or maybe your dog outgrown the bed where he sleep since he was a puppy</p>
        <p>We are happy to accept anything you give us.</p>
        <p>Come, we are waiting you:</p>
        
      </div>
      <div class="row"> 
        <h4>Shelter house</h4>
        <p>Do you have a farm? A big place at the outskirts of town where our pets may roam freely?</p>
        <p>Abandon pets raised outdoors have a better time to adapt when they're adopted. And you can have a lot of fun too!</p>
        <contact-form pre_comment="I have a shelter home and I want to help"></contact-form>
      </div>
    </div>

  </div>
</template>

<script>
import ContactForm from '../components/ContactForm'

export default {
  name: 'help-us',
  components: {
    'contact-form': ContactForm
  }
}
</script>

<style lang="scss" scoped>
  a {
    color: black;
  }

  a:hover {
    font-size: 100%;
    color: #009688;
  }

  li {
    padding: 0.5em 0em;
  }

  .affiliated {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
  }

</style>

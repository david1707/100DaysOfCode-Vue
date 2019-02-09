<template>
  <div class="help-us">
    <div>
      <img src="https://www.bettercitiesforpets.com/wp-content/uploads/2017/08/pets-in-classroom-header.jpg" alt="">
    </div>
    <!-- Container -->
    <div class="container">
      <div class="row">
        <h2>Ways to help our community to grow</h2>
        <p>There are a lot of ways you can help our little community to grow!</p>
      </div>
      <div class="row">
        <h4><router-link to="/volunteering">Volunteering</router-link></h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum excepturi atque ipsam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eveniet soluta aspernatur, cumque, est blanditiis impedit, adipisci sed beatae facere dicta temporibus et optio officiis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolore debitis et modi suscipit similique consequatur iusto ullam! Illum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis, eligendi eos laborum, et deleniti impedit quasi, alias sapiente amet asperiores? Consequuntur sequi, unde cumque iure nemo reprehenderit odit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing!</p>
      </div>
      <div class="row"> 
        <h4>Shelter house</h4>
        <p>Do you have a farm? A big place at the outskirts of town where our pets may roam freely?</p>
        <p>Abandon pets raised outdoors have a better time to adapt when they're adopted. And you can have a lot of fun too!</p>
        <div>
          <h1>CONTACT FORM HERE</h1>
        </div>
      </div>
    </div><!-- ./Container -->
    <div class="row">
      <img src="https://i.pinimg.com/originals/bb/27/44/bb27447dd4bc561b2f3bdd2dbb777a95.jpg" alt="">
    </div>
    <!-- Container -->
  </div>
</template>

<script>

export default {
  name: 'help-us',
}
</script>

<style lang="scss" scoped>
  img {
    width: 100vw;
    height: 99vh;
  }

  a {
    color: black;
  }

  a:hover {
    font-size: 100%;
    color: #009688;
  }
</style>

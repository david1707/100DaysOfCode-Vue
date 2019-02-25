<template>
  <div class="about-us">
    <div>
      <img class="full-image responsive-img" src="https://c.pxhere.com/photos/74/ea/greece_dog_sleep_tired_hot_santorini-1021532.jpg!d" alt="">
    </div>
    <div class="container">
      <!-- What we do -->
      <div class="row">
        <h3>What we do</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit labore dignissimos, molestias blanditiis repellat non itaque pariatur omnis nisi dolorum maxime facilis praesentium quisquam. Praesentium ut dolores molestias consectetur odit.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, autem, at cupiditate laudantium nulla ducimus, commodi veniam corporis voluptatum dolor error tempore eos harum molestias optio distinctio rem dolores mollitia porro est. Enim minus aperiam natus!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut reprehenderit minima? Aliquid aut quibusdam necessitatibus ad ipsa quod esse eius itaque rerum. Iure, omnis. Aliquam, maxime nihil?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ut repellat fugit repudiandae quos recusandae cupiditate quo voluptates impedit beatae eum totam itaque ipsa, nulla voluptatum laborum.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur labore, soluta architecto vero sed, fugiat nobis omnis placeat inventore quibusdam minus dicta maiores. Sapiente doloribus eligendi provident alias. Ratione consequuntur placeat vitae soluta in nihil pariatur.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati!</p>
      </div>
      <!-- Why we do it -->
      <div class="row">
        <h3>Why we do it</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ab repellendus a voluptates excepturi molestias explicabo laborum natus adipisci dolor, quod consequatur! Perferendis illum provident totam?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eos culpa quis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel! Ab deleniti, quisquam dolorem beatae perferendis adipisci, sed, doloribus velit nobis dolores optio ea voluptatem! Blanditiis, velit molestiae eveniet aut minima consectetur?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloribus natus nostrum nulla qui dolore velit quod aliquid dolores. Illo est sit ab labore officia aspernatur harum aut.</p>
      </div>
      <!-- Our achievements -->
      <div class="row">
        <h3>Our achievements:</h3>
        <ul>
          <li>- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quos voluptatem, tempore fugiat eveniet veritatis ratione?</li>
          <li>- Animi, laborum officia ut cumque fuga vel et architecto qui voluptate repellendus! Consequuntur quisquam ducimus quo?</li>
          <li>- Velit excepturi reprehenderit amet similique nemo repellendus. Amet, sequi aperiam sed maiores saepe eos praesentium odit.</li>
          <li>- Unde sint earum cupiditate, harum eius ab porro neque corrupti quam nostrum totam expedita deserunt. Quisquam.</li>
          <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptas ad porro consectetur! Nulla ipsum optio veritatis quia ad animi!</li>
        </ul>
      </div>
      <!-- Google Maps -->
      <div class="row">
        <h3>Where we are:</h3>
        <br>
        <google-maps-location></google-maps-location>
      </div>
      <!-- Contact info -->
      <div class="row">
        <h3>Connect with us:</h3>
        <br>
        <social-links></social-links>
      </div>
    </div>
  </div>
</template>
<script>
import GoogleMaps from '../components/GoogleMaps'
import SocialLinks from "../components/SocialLinks.vue";

export default {
  name: 'about-us',

  components: {
    'google-maps-location': GoogleMaps,
    'social-links': SocialLinks,
  }
}
</script>

<style lang="scss" scoped>
  .row > ul > li {
    padding: 0.5em;
  }

  a:hover {
    font-size: 100%;
    color: #036158;
  }

  i {
    margin-right: 0.5em;
  }

</style>
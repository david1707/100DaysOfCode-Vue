<template>
  <div class="about-us">
    <div>
      <img src="https://c.pxhere.com/photos/74/ea/greece_dog_sleep_tired_hot_santorini-1021532.jpg!d" alt="">
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
        <GmapMap
          :center="{lat:39.4880541, lng:-0.3577675}"
          :zoom="12"
          map-type-id="terrain"
          style="width: 100%; height: 30vh">
          <GmapMarker :position="google && new google.maps.LatLng(lat, lng)"/></GmapMap>
          <br>
      </div>
      <!-- Contact info -->
      <div class="row">
        <h3>Connect with us:</h3>
        <br>
        <ul class="collection">
          <li class="collection"><i class="material-icons teal-text">phone</i> Phone number: {{ phone }}</li>
          <li class="collection"><i class="material-icons teal-text">email</i> Email: {{ email }}</li>
          <li class="collection"><i class="material-icons teal-text">people</i> <a :href="facebook"> Facebook</a> </li>
          <li class="collection"><i class="material-icons teal-text">people</i> <a :href="twitter"> Twitter</a> </li>
          <li class="collection"><i class="material-icons teal-text">people</i> <a :href="youtube"> Youtube</a> </li>
        </ul>
      </div>

      
    </div>
  </div>
</template>

<script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script><script type="text/javascript">window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us20.list-manage.com","uuid":"47af5050e3dab92ac25ec9e7e","lid":"024665302f","uniqueMethods":true}) })</script>
<script>
import {gmapApi} from 'vue2-google-maps'

export default {
  name: 'about-us',
  data() {
    return {
      reactive: true,
      lat: 39.4880541,
      lng: -0.3577675,
      phone: '984-151-121',
      email: 'sample@email.com',
      facebook: 'https://www.facebook.com/your_address',
      twitter: 'https://www.twitter.com/your_handle',
      youtube: 'https://www.youtube.com/your_channel',
    }
  },
  computed: {
    google: gmapApi
  }
}
</script>

<style lang="scss" scoped>
  .about-us > div > img {
    width: 100vw;
    height: 99vh;
  }

  .row > ul > li {
    padding: 0.5em;
  }

  .collection {
    margin: 0;

    li {
      padding: 1em !important;
    }
  }

  a:hover {
    font-size: 100%;
    color: #036158;
  }

  i {
    margin-right: 0.5em;
  }

</style>
<template>
  <div id="app">
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">  
          <a href="#" class="brand-logo left">Shelter Name logo</a>
          <ul class="right hide-on-med-and-down">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/adopt">Adopt</router-link></li>
            <li><router-link to="/events">Events</router-link></li>
            <li><router-link to="/help-us">Help Us</router-link></li>
            <li><router-link to="/volunteering">Volunteering</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </div>
      </nav>
      <router-view/>
    </div>
  </div>
</template>

<script>

import router from '@/router.js'

// Checks if 'admin' is writen in any part of the web app
var phrase = [];
window.addEventListener("keypress", function(e) {
    
    if (phrase.length >= 5) { 
      phrase.splice(0, 1);
    }

    phrase.push(e.key);
    if (phrase.join('') == "admin") {
      router.push( "login" );
    }
});

export default {
  
}
</script>


<style lang="scss">
  nav {
    background-color: #009688;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 5;
  }

  a:hover {
    font-size: 115%;
  }

  .full-image {
    height: 100vh;
    width: 98.96vw;
  }
</style>

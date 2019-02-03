<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">  
        <a href="#" class="brand-logo right">Animal Shelter Logo</a>
        <ul class="left hide-on-med-and-down">
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
</template>

<script>

export default {
  
}
</script>


<style lang="scss">
</style>

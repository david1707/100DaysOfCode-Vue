<template>
    <div class="social-links">
        <ul class="collection">
          <li class="collection"><i class="material-icons teal-text">phone</i> Phone number: {{ phone }}</li>
          <li class="collection"><i class="material-icons teal-text">email</i> Email: {{ email }}</li>
          <li class="collection"><i class="material-icons teal-text">people</i> <a :href="facebook"> Facebook</a> </li>
          <li class="collection"><i class="material-icons teal-text">people</i> <a :href="twitter"> Twitter</a> </li>
          <li class="collection"><i class="material-icons teal-text">people</i> <a :href="youtube"> Youtube</a> </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            phone: '984-151-121',
            email: 'sample@email.com',
            facebook: 'https://www.facebook.com/your_address',
            twitter: 'https://www.twitter.com/your_handle',
            youtube: 'https://www.youtube.com/your_channel',
        }
    },
}
</script>

<style lang="scss" scoped>
  .collection {
    margin: 0;

    li {
      padding: 1em !important;
    }
  }
</style>

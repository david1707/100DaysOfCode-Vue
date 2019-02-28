<template>
  <div class="events">
    <div class="container">
      <h2 class="center-align">Events</h2>

      <div class="card hoverable" v-for="event in events" :key="event.id">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" :src="event.image_link">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">{{ event.title }}<i class="material-icons right">info</i></span>
          <p>At {{ event.location }}</p>
          <p>{{ event.date }} - {{ event.hour }}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">{{ event.title }}<i class="material-icons right">close</i></span>
          <p><b> Where</b>: {{ event.location }}</p>
          <p><b>When</b>: {{ event.date }} - {{ event.hour }}</p>
          <img class="activator" :src="event.image_link">
          <p>{{ event.text }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import db from '../firebase/firebaseInit'

export default {
  name: 'events',
  data() {
  return {
    events: [],
  }
	},
	created() {
		db.collection('events').get()
			.then(snapshot => {
				snapshot.forEach(doc => {
					let date;
					try{
						date = new Date(doc.data().date['seconds'] * 1000);
					}
					catch {
						date = new Date()
					}

					const data = {
						'id': doc.id,
						'location': doc.data().location,
						'date': date.toDateString(),
						'hour': date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
            'title': doc.data().title,
            'text': doc.data().text,
            'image_link': doc.data().image_link,
					}
					this.events.push(data);
				})
			});
	},
}
</script>


<style lang="scss" scoped>
  .container {
      margin-top: 10vh;

      .activator {
        height: 50%;
        width: 100%;
      }
  }
</style>

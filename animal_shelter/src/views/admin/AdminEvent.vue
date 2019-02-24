<template>
	<div class="admin-event">
		<div class="container">
		<h2 class="center">Manage events</h2>
			<table class="highlight centered"> 
				<thead>
					<tr>
						<th>Title</th>
						<th>Location</th>
						<th>Date</th>
						<th>Hour</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr class="hoverable" v-for="event in events" :key="event.id">
						<td>{{ event.title }}</td>
						<td>{{ event.location }}</td>
						<td>{{ event.date }}</td>
						<td>{{ event.hour }}</td>
						<td class="actions">
							<router-link :to="{ name: 'admin-events-single', params: { event_id: event.id }}"><i class="material-icons view">visibility</i></router-link>
							<i class="material-icons delete" @click="removeEvent(event.id)">delete</i>
						</td>
						<!-- 
						Add this one on the individual view 	
						<i class="material-icons edit">edit</i> 
						<i class="material-icons delete">delete</i>
						-->
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import db from '../../firebase/firebaseInit'

export default {
	name: 'admin-events',
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
					}
					this.events.push(data);
				})
			});
	},
	methods: {
		removeEvent(event_id) {
			if(confirm('Are you sure you want to remove this event?')) {
				db.collection('events').doc(event_id).delete();

				const position_remove = this.events.findIndex(element => element.id == event_id);
				this.events.splice(position_remove, 1);
			}
		}
	}
}
</script>

<style lang="scss" scoped>
    .container {
        margin-top: 20vh;

        .view {
            color: #009688
        }

        .edit {
            color: royalblue;
        }

        .delete {
            color: orangered;
        }
    }

</style>



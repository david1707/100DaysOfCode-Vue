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
					</tr>
				</tbody>

			</table>

			<div class="row">
				<button 
					class="btn waves-effect waves-light col s10 offset-s1"
					type="submit"
					name="action"
					@click.prevent="showModal = true">Create new Event
					<i class="material-icons right">send</i>
				</button>
			</div>
		
			<modal v-if="showModal" @close="closeModal">
					<h2 slot="header">Create a new event</h2>

					<div slot="body">
						<form class="col s12" >

							<div class="input-field col s6" :class="{ invalid_value: $v.location.$error }">
								<i class="material-icons prefix">location_on</i>
								<input id="location" type="text" class="validate" @blur="$v.location.$touch()" v-model="location">
								<label for="location" class="active">Location</label>
								<p v-if="$v.location.$error"><i> Please, provide a valid location</i></p>
							</div>
							<div class="input-field col s6" :class="{ invalid_value: $v.date.$error }">
								<i class="material-icons prefix">date_range</i>
								<input id="date" type="text" class="validate" @blur="$v.date.$touch()" v-model="date">
								<label for="date" class="active">Date</label>
								<p v-if="$v.date.$error"><i> Please, provide a valid date</i></p>
							</div>
							<div class="input-field col s6" :class="{ invalid_value: $v.hour.$error }">
								<i class="material-icons prefix">access_time</i>
								<input id="hour" type="text" class="validate" @blur="$v.hour.$touch()" v-model="hour">
								<label for="hour" class="active">hour</label>
								<p v-if="$v.hour.$error"><i> Please, provide a valid hour</i></p>
							</div>
							<div class="input-field col s6" :class="{ invalid_value: $v.title.$error }">
								<i class="material-icons prefix">announcement</i>
								<input id="title" type="text" class="validate" @blur="$v.title.$touch()" v-model="title">
								<label for="title" class="active">Title</label>
								<p v-if="$v.title.$error"><i> Please, provide a valid title</i></p>
							</div>
							<div class="input-field col s6" :class="{ invalid_value: $v.text.$error }">
								<i class="material-icons prefix">assignment</i>
								<textarea id="text" type="text" class="validate" @blur="$v.text.$touch()" v-model="text" rows="8" cols="50"></textarea>
								<label for="text" class="active">Text</label>
								<p v-if="$v.text.$error"><i> Please, provide a valid text</i></p>
							</div>
							<div class="input-field col s6 center-align" :class="{ invalid_value: $v.image_link.$error }">
								<i class="material-icons prefix">add_photo_alternate</i>
								<input id="image_link" type="text" class="validate" @blur="$v.image_link.$touch()" v-model="image_link">
								<label for="image_link" class="active">Image</label>
								<img id="image_link" :src="image_link" alt="">
								<p v-if="$v.image_link.$error"><i> Please, provide a valid url</i></p>
							</div>

						</form>
					</div>

					<div slot="footer" class="row">
						<button 
							class="btn waves-effect waves-light col s6"
							type="submit"
							name="action"
							@click.prevent="closeModal()">Close
						</button>
						<button 
							class="btn waves-effect waves-light col s6"
							type="submit"
							name="action"
							:disabled="$v.$invalid"
							@click.prevent="sendModal()">Submit
						</button>
					</div>
					
			</modal>

		</div>
	</div>
</template>

<script>
import db from '@/firebase/firebaseInit'
import modal from '@/components/Modal.vue'
import { required, minLength, maxLength, url } from 'vuelidate/lib/validators'

export default {
	name: 'admin-events',
	data() {
		return {
			events: [],
			showModal: false,
			location: '',
			date:'',
			hour: '',
			title: '',
			text: '',
			image_link: '',
		}
	},
	components: {
		modal
	},
	validations: {
		location: {
			required,
			minLength: minLength(8),
			maxLength: maxLength(40),
		},
		date: {
			required,
			minLength: minLength(15),
			maxLength: maxLength(25),
		},
		hour: {
			required,
			minLength: minLength(4),
			maxLength: maxLength(5),
		},
		title: {
			required,
			minLength: minLength(8),
			maxLength: maxLength(30),
		},
		text: {
			required,
			minLength: minLength(10),
			maxLength: maxLength(500),
		},
		image_link: {
			maxLength: maxLength(200),
			url,
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
		},
		closeModal() {
			this.showModal = false;
		},
		sendModal() {
			db.collection("events").add({
				location: this.location,
				date: new Date(this.date + ' ' + this.hour),
				title: this.title,
				text: this.text,
				image_link: this.image_link
			})
			.then(function() {
				this.showModal = false;
			})
			.catch(function(error) {
				console.error("Error writing document: ", error);
			});
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

				.row {
					margin-top: 1rem;
					width: 100%;
				}

				button {
					z-index: 0;
				}

    }

</style>



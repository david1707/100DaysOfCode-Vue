<template >
	<div class="admin-event-single">
		<div class="container">
			<h2 class="center">Manage event {{ event_id }}</h2>
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
				<div class="row">
					<button 
						class="btn waves-effect waves-light col s10 offset-s1"
						type="submit"
						name="action"
						:disabled="$v.$invalid"
						@click.prevent="send()">Submit
						<i class="material-icons right">send</i>
					</button>
				</div>

			</form>
		</div>
	</div>
</template>

<script>
import db from '../../firebase/firebaseInit'
// import Datepicker from 'vuejs-datepicker';
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import router from '@/router.js'

export default {
	name: 'admin-events-single',
	data() {
		return {
			event_id: String,
			location: String,
			date: String,
			hour: String,
			title: String,
			text: String,
		}
	},
	methods: {
		send(){
			db.collection("events").doc(this.event_id).set({
				location: this.location,
				date: new Date(this.date + ' ' + this.hour),
				title: this.title,
				text: this.text
			})
			.then(function() {
				router.push({ path: 'admin-events' })
			})
			.catch(function(error) {
				console.error("Error writing document: ", error);
			});
		}
	},
	// components: {
	// 	vuejsDatepicker: Datepicker,
	// },
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
	},
	beforeRouteEnter(to, from, next) {
		db.collection('events').doc(to.params.event_id).get()
			.then(snapshot => {
				next(vm => {
					let date = new Date(snapshot.data().date['seconds'] * 1000);
					vm.event_id = snapshot.id,
					vm.location = snapshot.data().location,
					vm.date = date.toDateString(),
					vm.hour = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
					vm.title = snapshot.data().title,
					vm.text = snapshot.data().text
				})
			})
	},
}
</script>

<style lang="scss" scoped>
    .container {
        margin-top: 20vh;
	}

	.invalid_value, .invalid_value label {
		color: red;
	}

</style>



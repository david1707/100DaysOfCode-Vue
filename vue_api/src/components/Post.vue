	<template>
	<div id="post">
		<div
			v-on:click="openModal()">
			<h4>{{ post.title }}</h4>
			<p>{{ post.body }}</p>
		</div>
		<sweet-modal hide-close-button blocking ref="modal" id="modal">
			<div>
				<label for="id">Post ID</label>
    		<input type="text" name="id" id="id" v-model="post.id">
			</div>

			<div>
				<label for="title">Post Title:</label>
    		<input type="text" name="title" id="title" v-model="post.title">
			</div>

			<div>
				<label for="title">Post Body:</label>
    		<textarea name="body" id="body" rows="8" v-model="post.body"></textarea>
			</div>

			<div>
				<label for="state">Post State:</label>
				<select name="state" id="state" v-model="post.state">>
					<option value="approved">Approved</option>
					<option value="pending">Pending</option>
				</select> 
			</div>
			
			<button v-on:click="closeModal()">Close</button>
			<button v-on:click="savePost()">Save</button>
		</sweet-modal>
	</div>
</template>

<!-- v-on:dblclick="TOGGLE_POST_STATE(post.id)" -->

<script>
import { mapMutations } from 'vuex'

import { SweetModal, SweetModalTab } from 'sweet-modal-vue'

export default {
	name: 'post',
	data() {
		return {

		}
	},
	components: {
		SweetModal,
		SweetModalTab
	},
	props: {
		post: Object,
	},
	methods: {
		...mapMutations(['TOGGLE_POST_STATE']),

		openModal() {
			this.$refs.modal.open()
		},
		closeModal() {
			this.$refs.modal.close()
		},
		// TODO Finish this method
		savePost() {
			console.log('POST SAVED')
		}
	}
}
</script>

<style lang="scss" scoped>
	label {
		color: black !important;
		float: left;
	}
	input,
	select {
		width: 100%;
		height: 2em;
		border: .5px solid black;
	}
	textarea {
		width: 100%;	
		border: .5px solid black;
	}
</style>



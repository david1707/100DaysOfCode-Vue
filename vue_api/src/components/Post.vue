	<template>
	<div id="post">
		<div
			v-on:click="openModal()">
			<h4>{{ post.title }}</h4>
			<p>{{ post.body }}</p>
		</div>
		<sweet-modal hide-close-button blocking ref="modal" id="modal">
			<h1>Modify Post #{{post.id}}</h1>
			<div>
				<label for="id">Post ID</label>
    		<input type="text" name="id" id="id" v-model="post.id" readonly>
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
			
			<button v-on:click="closePost()" class="save">Save</button>
			<button v-on:click="removePost(post.id)" class="delete">Delete</button>
		</sweet-modal>
	</div>
</template>

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
		...mapMutations(['TOGGLE_POST_STATE', 'REMOVE_POST']),

		openModal() {
			this.$refs.modal.open()
		},
		closePost() {
			this.$refs.modal.close()
		},
		removePost(id) {
			this.REMOVE_POST(id);
			this.closePost()
		}
	}
}
</script>

<style lang="scss" scoped>
	h1 {
		color: black; 
	}
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

	input:focus,
	select:focus,
	textarea:focus {
		background-color: rgb(241, 239, 239);
		opacity: 0.9;
	}

	button {
		width: 50%;
		height: 2em;
		margin-top: 1em;
		color: white;
	}

	.save {
		background-color: rgb(95, 95, 248);
	}
	.delete {
		background-color: rgb(247, 68, 68);
	}
</style>



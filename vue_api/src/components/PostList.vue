<template>
	<div>
    <h1>Your posts:</h1>
    <div class="container">
			<div v-for="post in posts" :key="post.id" class="post" :class="post.state == 'approved' ? 'postApproved' : 'postPending'">
				<h4>{{ post.title }}</h4>
				<p>{{ post.body }}</p>
			</div>
    </div>
	</div>
</template>

<script>
import API from '@/APIService'

export default {
	name: 'postList',
	data() {
		return {
			posts: [],
		}
	},
	methods: {
		fetchPosts() {
			API.getPosts()
				.then(data => this.posts = data)
		}
	},
	created() {
		this.fetchPosts()
	},
    
}
</script>

<style lang="scss" scoped>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-column-gap: 1em;
		grid-row-gap: 1em;

		.post {
			color: white;
		}

		.postApproved {
			background: rgb(50, 189, 50);
		}

		.postPending {
			background: rgb(250, 73, 73);
		}

	}

</style>


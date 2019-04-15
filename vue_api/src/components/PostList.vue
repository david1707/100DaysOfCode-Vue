<template>
	<div>
		<div class="header">
			<h1>YOUR_COMPANY_NAME Posts Manager</h1>
			<h4>Filter by:</h4>
			<input type="text" class="filter" v-model="filterText">
			<h1>Your posts:</h1>
		</div>
    <div class="container">
			<Post
				v-for="post in posts"
				:post="post"
				:key="post.id"
				class="post"
				:class="post.state == 'approved' ? 'postApproved' : 'postPending'" />			
    </div>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

import Post from './Post'

export default {
	name: 'postList',
	data() {
		return {
			filterText: ''
		}
	},
	components: {
		Post,
	},
	computed: {
		...mapGetters(['getPosts']),

		posts: function() {	
			return this.getPosts.filter(post => post.title.includes(this.filterText) || post.body.includes(this.filterText))
		}
	},
	methods: {
		...mapActions(['GET_POSTS']),

	},
	created() {
		this.GET_POSTS()
	},
    
}
</script>

<style lang="scss" scoped>
	.header {
		.filter {
			width: 100%;
			height: 1.75em;
			border-radius: 25px;
			text-align: center;
		}
	}
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


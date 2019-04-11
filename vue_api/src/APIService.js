import axios from 'axios'

const apiInfo = {
	URL: 'https://jsonplaceholder.typicode.com/posts/'
}


export default {
	getPosts() {
		const url = apiInfo.URL;

		return axios.get(url)
			.then( response => {
				return response.data.map(post => {
					post.state = Math.random() < 0.5 ? 'approved' : 'pending'
					return post
				})	
			})
	},
	getPost(id) {
		const url = `${apiInfo.URL}/${id}`

		return axios.get(url)
			.then(response => response.data)
				
	},
}
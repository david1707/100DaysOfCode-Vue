import Vue from 'vue'
import Vuex from 'vuex'

import API from './APIService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
  },
  getters: {
    getPosts: (state) => {
      return state.posts;
    }
  },
  actions: {
    GET_POSTS: async ({commit}) => {
      const posts = await API.getPosts()
      commit('STORE_POSTS', posts)
    }
  },
  mutations: {
    STORE_POSTS (state, posts) {
      state.posts = posts;
    },
    TOGGLE_POST_STATE(state, id) {
      state.posts[id-1].state == 'approved' ?
        state.posts[id-1].state = 'pending' :
        state.posts[id-1].state = 'approved';
    }
  },
})

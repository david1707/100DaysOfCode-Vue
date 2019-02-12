import Vue from 'vue'
import Router from 'vue-router'
import Admin from './views/Admin.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Adopt from './views/Adopt.vue'
import Blog from './views/Blog.vue'
import Event from './views/Event.vue'
import HelpUs from './views/HelpUs.vue'
import Volunteering from './views/Volunteering.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/adopt',
      name: 'adopt',
      component: Adopt
    },
    {
      path: '/events',
      name: 'event',
      component: Event
    },
    {
      path: '/help-us',
      name: 'help-us',
      component: HelpUs
    },
    {
      path: '/volunteering',
      name: 'volunteering',
      component: Volunteering
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})

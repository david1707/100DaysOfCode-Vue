import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Admin from './views/Admin.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Adopt from './views/Adopt.vue'
import Blog from './views/Blog.vue'
import Event from './views/Event.vue'
import HelpUs from './views/HelpUs.vue'
import Volunteering from './views/Volunteering.vue'

import AdminEvent from './views/admin/AdminEvent.vue'
import AdminEventSingle from './views/admin/AdminEventSingle.vue'
import AdminPets from './views/admin/AdminPets.vue'
import AdminBlog from './views/admin/AdminBlog.vue'

import firebase from './firebase/firebaseConfig'

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
      path: '/login',
      name: 'login',
      component: Login,
    },
    // Admin routes
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      // beforeEnter: (to, from, next) => {
      //   firebase.auth().onAuthStateChanged(function(user) {
      //     if (user) {
      //       next()
      //     } else {
      //       next(false);
      //     }
      //   })
      // }
    },
    {
      path: '/admin/events',
      name: 'admin-events',
      component: AdminEvent,
      // beforeEnter: (to, from, next) => {
      //   firebase.auth().onAuthStateChanged(function(user) {
      //     if (user) {
      //       next()
      //     } else {
      //       next(false);
      //     }
      //   })
      // }
    },
    {
      path: '/admin/events/:event_id',
      name: 'admin-events-single',
      component: AdminEventSingle,
      // beforeEnter: (to, from, next) => {
      //   firebase.auth().onAuthStateChanged(function(user) {
      //     if (user) {
      //       next()
      //     } else {
      //       next(false);
      //     }
      //   })
      // }
    },
    {
      path: '/admin/pets',
      name: 'admin-pets',
      component: AdminPets,
      beforeEnter: (to, from, next) => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            next()
          } else {
            next(false);
          }
        })
      }
    },
    {
      path: '/admin/blog',
      name: 'admin-blog',
      component: AdminBlog,
      beforeEnter: (to, from, next) => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            next()
          } else {
            next(false);
          }
        })
      }
    }
  ]
})
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Songs from '@/components/Songs/Songs'
import CreateSongs from '@/components/Songs/Create'
import EditSongs from '@/components/Songs/Edit'
import ViewSong from '@/components/Songs/ViewSong'

import Auth from '@/components/Auth/Auth'
import Register from '@/components/Auth/Register'
import Login from '@/components/Auth/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/songs',
      name: 'Songs',
      component: Songs,
      children: [
        {
          path: 'create',
          name: 'Create song',
          component: CreateSongs
        },
        {
          path: 'edit/:id',
          props: true,
          name: 'Edit song',
          component: EditSongs
        }
        ,
        {
          path: 'view/:id',
          props: true,
          name: 'View song',
          component: ViewSong
        }
      ]
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth,
      children: [
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        }
      ]
    },
    {
      path: "*",
      redirect: "songs"
    }
  ]
})

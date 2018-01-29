import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Auth from '@/components/Auth/Auth'
import Register from '@/components/Auth/Register'
import Login from '@/components/Auth/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})

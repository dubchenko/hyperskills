import Vue from 'vue'
import Router from 'vue-router'
import ApplyForm from './views/ApplyForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ApplyForm',
      component: ApplyForm
    }
  ]
})

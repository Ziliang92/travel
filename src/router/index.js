import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import list from '@/pages/list/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    }, {
      path: '/list',
      component: list
    }
  ]
})

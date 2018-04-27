import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/pages/MainView'
import HeadpageView from '@/pages/HeadpageView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainView,
      children: [
        {
          path: '/headpage',
          component: HeadpageView,
          name: 'HeadpageView'
        }
      ]
    }
  ]
})

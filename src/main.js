import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import Show from './components/Show'

/* eslint-disable no-new */
Vue.use(Router)

var router = new Router()
router.map({
  '/shows/:name': {
    name: 'shows',
    component: Show
  }
})

// router.redirect('*', '/shows/Urinetown')
router.start(App, '#app')


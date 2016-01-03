import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import Show from './components/Show'
import Character from './components/Character'

/* eslint-disable no-new */
Vue.use(Router)

var router = new Router()
router.map({
  '/shows/:name': {
    name: 'shows',
    component: Show,

    subRoutes: {
      ':char': {
        name: 'char',
        component: Character
      }
    }
  }
})

// router.redirect('*', '/shows/Urinetown')
router.start(App, '#app')


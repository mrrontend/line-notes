<template>
  <h1>LINE NOTES</h1>
  <ul>
    <li v-for="show in shows">
      <a v-link="{name: 'shows', params: {name: show}} ">{{show}}</a>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script>
import Show from './components/Show'
import store from './store'
export default {

  components: {
    Show
  },

  data () {
    return {
      shows: store.fetchShows()
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

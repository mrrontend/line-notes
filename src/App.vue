<template>
  <div id="app">
    <character 
      v-for="character in characters"
      :character="character">
    </character>
  </div>
</template>

<script>
import Note from './components/Note'

export default {
  components: {
    Note
  },

  data () {
    return {
      characters: []
    } 
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

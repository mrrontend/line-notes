<template>
  <div id="app">
    <input v-model="newNote.act">
    <input v-model="newNote.scene">
    <input v-model="newNote.page">
    <input v-model="newNote.line">
    <input v-model="newNote.error">
    <button v-on:click="makeNote">Add Note</button>
    <character
      v-for="character in characters"
      :character="character"
      :index="$index">
    </character>
  </div>
</template>

<script>
import Character from './components/Character'
import Note from './components/Note'

export default {
  components: {
    Character
  },

  data () {
    return {
      characters: [
        { name: 'Bob', notes: [] }
      ],
      newNote: Note
    }
  },
  methods: {
    makeNote: function () {
      this.characters[0].notes.push(this.newNote)
      this.newNote = Note
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

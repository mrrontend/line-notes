<template>
  <div id="app">
    <input v-model="newNote.act">
    <input v-model="newNote.scene">
    <input v-model="newNote.page">
    <input v-model="newNote.line">
    <input v-model="newNote.error">
    <button v-on:click="makeNote">Add Note</button>
    <br>
    <ul class="tabs" data-tabs id="character-tabs">
      <li class="tabs-title" v-for="character in characters">
        <a href="character-{{$index}}">{{character.name}}</a>
      </li>
    </ul>
    <character
      v-for="character in characters"
      :character="character"
      :index="$index">
    </character>
    <button v-on:click="getShow">Get Show</button>
  </div>
</template>

<script>
import Character from './components/Character'
import Note from './components/Note'
import store from './store'

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
      let note = {
        act: this.newNote.act,
        scene: this.newNote.scene,
        page: this.newNote.page,
        line: this.newNote.line,
        error: this.newNote.error
      }
      this.characters[0].notes.push(note)
      store.pushCharacter(this.characters[0])
      this.newNote = Note
    },

    getShow: function () {
      store.fetchShow('Urinetown').then(show => {
        console.log(show)
      })
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

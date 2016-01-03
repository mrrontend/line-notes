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
      <li class="tabs-title" v-for="character in show.characters">
        <a v-link="{name: 'char', params: {name: $route.params.name, char: character.name}}">
          {{character.name}}
        </a>
      </li>
      <li class="tabs-title" v-on:click="addChar">+</li>
    </ul>
    <!--<character v-model="activeChar">
    </character>-->
    <router-view></router-view>
    <button v-on:click="getShow">Get Show</button>
  </div>
</template>

<script>
import Character from './Character'
import Note from './Note'
import store from '../store'

export default {
  components: {
    Character
  },

  data () {
    return {
      show: store.fetchShow('Urinetown').then(show => show),
      activeChar: null,
      newNote: Object
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
        this.show = show
      })
    },

    addChar: function () {
      store.pushCharacter(this.show.name, 'Test')
    },

    setActiveChar: function (name) {
      this.activeChar = this.show.characters[name]
      console.log(this.activeChar)
    }
  }
}
</script>




<template>
  <div class="character-table">
    <table>
      <thead>
        <tr>
          <th>Act</th>
          <th>Scene</th>
          <th>Page</th>
          <th>Line</th>
          <th>
            <p class="vertical-text">Wrong Word</p>
            <p class="vertical-text">Wrong Order</p>
            <p class="vertical-text">Dropped</p>
            <p class="vertical-text">Added</p>
            <p class="vertical-text">Paraphrased</p>
            <p class="vertical-text">Called Line</p>
          </th>
          <th>Act</th>
        </tr>
      </thead>
      <tbody>
        <tr is="note"
          v-for="note in notes"
          :note="note"
          :index="$index">
        </tr>
        <tr>
          <td><input class="number" v-model="newNote.act"></td>
          <td><input class="number" v-model="newNote.scene"></td>
          <td><input class="number" v-model="newNote.page"></td>
          <td><input class="line"   v-model="newNote.line"></td>
          <td><input class="number" v-on:keyup.enter="makeNote"
                                    v-model="newNote.error"></td>
          <td><button v-on:click="makeNote">Add</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Note from './Note'
import store from '../store'

export default {
  name: 'Character',

  components: {
    Note
  },

  data () {
    return {
      show: '',
      char: '',
      newNote: {},
      notes: {}
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
      let key = store.pushNote(this.show, this.char, note)
      this.notes[key] = 'true'
      this.newNote = {}
    }

  },

  route: {
    data ({ to }) {
      console.log('new name: ' + to.params.name)
      console.log('new char: ' + to.params.char)
      console.log('switching character')
      let storeNotes = store.fetchNotes(to.params.name, to.params.char)
                  .then((notes => notes), {})
      console.log('new notes: ' + JSON.stringify(storeNotes))
      return {
        show: to.params.name,
        char: to.params.char,
        notes: storeNotes,
        newNote: {}
      }
    }
  }
}
</script>

<style>
input.number {
  width: 40px
}

input.line {
  width: 100%
}

.vertical-text {
  /*transform: rotate(90deg);
  transform-origin: left top 0;
  float: left;*/
}
</style>


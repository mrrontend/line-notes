<template>
  <div class="character-table">
    <span>{{ character.name }}</span>
    <br>
    <table>
      <thead>
        <tr>
          <th>Act</th>
          <th>Scene</th>
          <th>Page</th>
          <th>Line</th>
          <th>Wrong Word</th>
          <th>Wrong Order</th>
          <th>Dropped</th>
          <th>Added</th>
          <th>Paraphrased</th>
          <th>Called Line</th>
        </tr>
      </thead>
      <tbody>
        <note
          v-for="note in character.notes"
          :note="note"
          :index="$index">
        </note>
      </tbody>
    </table>
  </div>
</template>

<script>
import Note from './Note'

export default {
  name: 'Character',

  props: {
    character: Object
  },

  components: {
    Note
  },

  data () {
    // return {
    //   name: '',
    //   notes: []
    // }
  }
}
</script>

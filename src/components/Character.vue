<template>
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
        v-for="note in notes"
        :note="note">
      </note>
    </tbody>
  </table>
</template>

<script>
import Note from './components/Note'

export default {
  components {
    Note
  },

  data () {
    return {
      name: "",
      notes: []
    }
  }
}
</script>

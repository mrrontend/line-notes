<template>
  <tr class="note">
    <td>{{ note.act }}</td>
    <td>{{ note.scene }}</td>
    <td>{{ note.page }}</td>
    <td class="line">{{ note.line }}</td>
    <td>{{ note.error }}</td>
    <td><button v-on:click="deleteNote"> X </button></td>
  </tr>
</template>

<script>
export default {
  name: 'Note',

  props: {
    note: {}
  },

  data () {
    return {
      // act: 0,
      // scene: 0,
      // page: 0,
      // line: '',
      // error: 0
    }
  },

  methods: {
    deleteNote: function () {

    }
  }
}
</script>

<style>
td.line {
  width: 50%
}
</style>

<template>
  <tr class="note">
    <td>{{ note.act }}</td>
    <td>{{ note.scene }}</td>
    <td>{{ note.page }}</td>
    <td>{{ note.line }}</td>
    <td>{{ note.error }}</td>
  </tr>
</template>

<script>
export default {
  name: 'Note',

  props: {
    note: Object
  },

  data () {
    return {
      // act: 0,
      // scene: 0,
      // page: 0,
      // line: '',
      // error: 0
    }
  }
}
</script>

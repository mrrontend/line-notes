<template>
  <tr class="note">
    <td>{{ act }}</td>
    <td>{{ scene }}</td>
    <td>{{ page }}</td>
    <td>{{ line }}</td>
    <td>{{ error }}</td>
  </tr>
</template>

<script>
export default {
  data () {
    return {
    act: 0,
    scene: 0,
    page: 0,
    line: "",
    error: 0
    }
  }
}
</script>

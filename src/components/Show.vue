<template>
  <div id="app">
    <br>
    <ul class="tabs" data-tabs id="character-tabs">
      <li class="tabs-title" v-for="character in show.characters"
        v-link="{name: 'char',
                    params: {name: $route.params.name, char: character.name},
                    activeClass: 'is-active'}">
        <a>{{character.name}}</a>
      </li>
      <li class="tabs-title"><a v-on:click="addChar">+</a></li>
    </ul>
    <!--<character v-model="activeChar">
    </character>-->
    <router-view></router-view>
  </div>
</template>

<script>
import Character from './Character'
import store from '../store'

export default {
  name: 'Show',

  components: {
    Character
  },

  data () {
    return {
      name: '',
      newNote: {},
      show: {}
    }
  },

  route: {
    // http://router.vuejs.org/en/pipeline/data.html#promise-sugar
    data ({ to }) {
      return store.fetchShow(to.params.name).then(show => ({
        name: to.params.name,
        newNote: {},
        show
      }))
    }

    // TODO: make the route transition to show a char automatically
    /* deactivate: function (transition) { */
    /*   transition.redirect({ */
    /*     name: 'char', */
    /*     params: { */
    /*       name: transition.from.params.name, */
    /*       char: store.fetchFirstChar(transition.from.params.name) */
    /*     } */
    /*   }) */
    /* } */
  },

  methods: {
    addChar: function () {
      let name = prompt('Enter a name', 'Test')
      store.pushCharacter(this.show.name, name)
    }
  }
}
</script>

<style>
.is-active {
  background: #e6e6e6
}
</style>


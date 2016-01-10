import Firebase from 'firebase'
import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

// const urlify = require('urlify').create()
const api = new Firebase('https://brilliant-inferno-5092.firebaseio.com/')
const store = new EventEmitter()
const cache = Object.create(null)

export default store

/**
 * Fetch all shows
 *
 */
store.fetchShows = () => {
  var names = []
  api.child('shows').once('value', snapshot => {
    snapshot.forEach((child) => {
      names.push(child.key())
    })
    return names
  })
  return names
}

/**
 * Fetch a show by its name
 *
 */
store.fetchShow = name => {
  return new Promise((resolve, reject) => {
    if (cache[name]) {
      resolve(cache[name])
    } else {
      api.child('shows/' + name).once('value', snapshot => {
        const show = cache[name] = snapshot.val()
        resolve(show)
      }, reject)
    }
  })
}

/**
 * Fetch first character
 *
 */
store.fetchFirstChar = (show) => {
  let char = ''
  api.child('shows/' + show).once('value', snapshot => {
    snapshot.forEach(child => {
      char = child.key()
      console.log(char)
      return true
    })
  })
}

/**
 * Fetch the notes for a character
 *
 */
store.fetchNotes = (show, char) => {
  return new Promise((resolve, reject) => {
    if (cache[show].characters[char].notes === 'butts') {
      console.log('umm')
      resolve(cache[show].characters[char].notes)
    } else {
      api.child(getShowCharacter(show, char)).once('value', snapshot => {
        const char = cache[show].characters[char] = snapshot.val()
        if (char.notes) {
          console.log('new notes~: ' + JSON.stringify(char.notes))
          resolve(char.notes)
        } else {
          console.log('rejecting')
          reject
        }
      }, reject)
    }
  })
}

/**
 * Insert a new character
 *
 */
store.pushCharacter = (show, char) => {
  // let urlChar = urlify(char)
  api.child(getShowCharacter(show, char)).set({
    name: char,
    notes: []
  })
}

/**
 * Insert a note for a character
 */
store.pushNote = (show, char, note) => {
  let notesRef = api.child('notes/')
  console.log(getShowCharacter(show, char))
  let charRef = api.child(getShowCharacter(show, char) + 'notes/')
  let newNotesRef = notesRef.push()
  newNotesRef.set(note)
  charRef.child(newNotesRef.key()).set('true')
  return newNotesRef.key()
}

const getShowCharacter = (show, char) => {
  return 'shows/' + show + '/characters/' + char + '/'
}

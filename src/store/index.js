import Firebase from 'firebase'
import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

const api = new Firebase('https://brilliant-inferno-5092.firebaseio.com/')
const store = new EventEmitter()
const cache = Object.create(null)

export default store

/**
 * Fetch a show by its name
 *
 */
store.fetchShow = name => {
  return new Promise((resolve, reject) => {  
    api.child('shows/' + name).once('value', snapshot => {
      resolve(snapshot.val())
    }, reject)   
  })
}

/**
 * Insert a new character
 *
 */
store.pushCharacter = char => {
  api.push(char)
}

/**
 * Insert a note for a character
 */
store.pushNote = (char, note) => {
  api.once('value', function (snapshot) {
    if (!snapshot.child(char).exists()) {
      store.pushCharacter(char)
    }
    api.child(char).push(note)
  })
}

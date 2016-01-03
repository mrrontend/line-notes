import Firebase from 'firebase'
import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

const api = new Firebase('https://brilliant-inferno-5092.firebaseio.com/characters/');
const store = new EventEmitter();

export default store

/**
 * Fetch a character with its notes, by id
 *
 */
store.fetchCharacter = id => {
  
}

/**
 * Insert a new character
 *
 */
store.postCharacter = char => {
  api.push(char);
}

/**
 * Insert a note for a character
 */
store.postNote = (char, note) => {
  api.child(char).push(note);
}

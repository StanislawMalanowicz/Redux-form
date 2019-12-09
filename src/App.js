import React from 'react';
import './App.css';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// git działa ;)
console.log('hello from vs');

const initialActors = {
  listName: 'Best',
  actors: [
    'Bogusław Linda', 'Tom Hanks', 'Arnold Schwarzeneger'
  ]
}
const initialMovies = {
  listName: 'Favourite',
  movies: [
    'Rambo III', 'Kiler', 'Terminator'
  ]
}
function movies(state = initialMovies, action) {
  switch (action.type) {
    case 'RESET_MOVIE':
      return{
        ...state, movies: []
      }
    case 'ADD_MOVIE':
      return{
        ...state, movies: [...state.movies, action.film]
      }
    case 'DELETE_MOVIE':
      return{
        ...state, movies: [...state.movies.filter(el => el !== action.film)]
      }
       
    default:
      return state;
  }
}
function actors(state = initialActors, action) {
  switch (action.type) {
    case 'RESET_ACTOR':
      return{
        ...state, actors: []
      }
    case 'ADD_ACTOR':
      return{
        ...state, actors: [...state.actors, action.actor]
      }
    case 'DELETE_ACTOR':
      return{
        ...state, actors: [...state.actors.filter(el => el !== action.actor)]
      }
       
    default:
      return state;
  }
}

const rootReducer = combineReducers({ movies, actors })
const store = createStore(rootReducer, composeWithDevTools())

window.store = store;
function App() {
  return (
    <div className="App">
      <h1>Hello redux</h1>
    </div>
  )
}

export default App;

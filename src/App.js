import React from 'react';
import './App.css';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { moviesActions } from './app/movies/duck'
// git działa ;)




const store = createStore(rootReducer, composeWithDevTools());
window.store = store;

store.dispatch(moviesActions.add('Herkules'))

function App() {
  return (
    <div className="App">
      <h1>Hello redux</h1>
    </div>
  )
}

export default App;

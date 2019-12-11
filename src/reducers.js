import { combineReducers } from 'redux';
// import actorsReducer from './app/actors/duck';
import formReducer from './app/form/duck';

const rootReducer = combineReducers({
    // actors: actorsReducer,
    movies: formReducer
})


export default rootReducer;
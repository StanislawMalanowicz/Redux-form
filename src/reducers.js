import { combineReducers } from 'redux';
import formReducer from './app/form/duck';

const rootReducer = combineReducers({
    person: formReducer
})


export default rootReducer;
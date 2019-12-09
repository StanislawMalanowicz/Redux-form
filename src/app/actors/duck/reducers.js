import types from './types';



const initialActors = {
  listName: "Best",
  actors: ["Bogusław Linda", "Tom Hanks", "Arnold Schwarzeneger"]
};


const actorsReducer =(state = initialActors, action) => {
  switch (action.type) {
    case types.RESET_ACTOR:
      return {
        ...state,
        actors: []
      };
    case types.ADD_ACTOR:
      return {
        ...state,
        actors: [...state.actors, action.actor]
      };
    case types.DELETE_ACTOR:
      return {
        ...state,
        actors: [...state.actors.filter(el => el !== action.actor)]
      };

    default:
      return state;
  }
}


export default actorsReducer;
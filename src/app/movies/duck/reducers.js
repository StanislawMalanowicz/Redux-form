import types from './types'

const initialMovies = {
  listName: "Favourite",
  list: ["Rambo III", "Kiler", "Terminator"]
};

const moviesReducer =(state = initialMovies, action) => {
  switch (action.type) {
    case types.RESET_MOVIE:
      return {
        ...state,
        list: []
      };
    case types.ADD_MOVIE:
      return {
        ...state,
        list: [...state.list, action.film]
      };
    case types.DELETE_MOVIE:
      return {
        ...state,
        list: [...state.list.filter(el => el !== action.film)]
      };
    case types.DELETE_LAST:
      return {
        ...state,
        list: [...state.list.slice(0,-1)]
      }

    default:
      return state;
  }
}

export default moviesReducer;
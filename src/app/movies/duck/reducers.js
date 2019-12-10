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
        movies: []
      };
    case types.ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.film]
      };
    case types.DELETE_MOVIE:
      return {
        ...state,
        movies: [...state.movies.filter(el => el !== action.film)]
      };

    default:
      return state;
  }
}

export default moviesReducer;
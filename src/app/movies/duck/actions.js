import types from "./types";

const add = film => ({ type: types.ADD_MOVIE, film });
const reset = () => ({ type: types.RESET_MOVIE });
const deleteMovie = film => ({ type: types.DELETE_MOVIE, film });

export default { add, reset, deleteMovie };

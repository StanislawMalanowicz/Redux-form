import types from './types'

const initialData = {
  listName: "personalInfo",
  name: "",
  email: "@@@",
  pass: "",
  confirmPass: "",
  isPassCorrect: false
};

const formReducer =(state = initialData, action) => {
  switch (action.type) {
    case types.PASSWORD_CONFIRM:
      if(state.pass === state.confirmPass){
        return {
          ...state,
          isPassCorrect: true
        }
      }
      return {
        ...state,
        isPassCorrect: false
      }
    case types.HANDLE_PASS:
      return {
        ...state,
        isPassCorrect: action.password === state.confirmPass ,
        pass: action.password,
      };
    case types.SECOND_HANDLE_PASS:
      return {
        ...state,
        isPassCorrect: action.password === state.pass,
        confirmPass: action.password,
      };
    
    // case types.DELETE_MOVIE:
    //   return {
    //     ...state,
    //     movies: [...state.movies.filter(el => el !== action.film)]
    //   };

    default:
      return state;
  }
}

export default formReducer;
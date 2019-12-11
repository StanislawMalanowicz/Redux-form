import types from './types'

const initialData = {
  listName: "personalInfo",
  email: "",
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
    
    case types.HANDLE_EMAIL:
      return {
        ...state,
        email: action.email
      };

    default:
      return state;
  }
}

export default formReducer;
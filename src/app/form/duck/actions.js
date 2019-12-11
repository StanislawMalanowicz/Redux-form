import types from "./types";

const handlePassword = password => ({ type: types.HANDLE_PASS, password});
const handleConfirmPassword = password => ({ type: types.SECOND_HANDLE_PASS, password});
const checkPasswords = () => ({type: types.PASSWORD_CONFIRM});
const handleEmail = email => ({type: types.HANDLE_EMAIL, email});

export default { handlePassword, handleConfirmPassword, checkPasswords, handleEmail };

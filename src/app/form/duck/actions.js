import types from "./types";

const handlePassword = password => ({ type: types.HANDLE_PASS, password});
const handleConfirmPassword = password => ({ type: types.SECOND_HANDLE_PASS, password});
const checkPasswords = () => ({type: types.PASSWORD_CONFIRM})

export default { handlePassword, handleConfirmPassword, checkPasswords };

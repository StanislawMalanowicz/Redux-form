import types from './types';

const add = actor => ({type: types.ADD_ACTOR, actor});
const reset = () => ({type: types.RESET_ACTOR});
const deleteActor = actor => ({type: types.DELETE_ACTOR, actor});

export default { add, reset, deleteActor }
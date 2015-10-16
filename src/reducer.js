function rootReducer (state, action) {
  switch (action.type) {
    case 'SELECT_CENTER':
      return Object.assign({}, state, {
        selected: action.selected
    });
    case 'SET_STATE':
      return Object.assign({}, state, action.initialState);
    default:
      return state;
  }
}
export default rootReducer;

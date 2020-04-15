const INITIAL_STATE = {
  SelectedUserRecord: null
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case "SELECT_USER": {
      return {
        ...state,
        SelectedUserRecord: payload
      };
    }
    default:
      return state;
  }
};

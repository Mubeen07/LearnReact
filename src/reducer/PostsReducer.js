const INITIAL_STATE = {
    SelectedPostRecord: null
};

export default (state = INITIAL_STATE, action) => {
    const { payload } = action;
    switch (action.type) {
        case "SELECT_POST": {
            return {
                ...state,
                SelectedPostRecord: payload
            };
        }
        default:
            return state;
    }
};

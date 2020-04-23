const INITIAL_STATE = {
    AddPostRecord: null
};

export default (state = INITIAL_STATE, action) => {
    const { payload } = action;
    switch (action.type) {
        case "ADD_POST": {
            return {
                ...state,
                AddPostRecord: payload
            };
        }
        default:
            return state;
    }
};

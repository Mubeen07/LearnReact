const INITIAL_STATE = {
    SelectedUserPostsRecord: null
};

export default (state = INITIAL_STATE, action) => {
    const { payload } = action;
    switch (action.type) {
        case "SELECT_USER_POSTS": {
            return {
                ...state,
                SelectedUserPostsRecord: payload
            };
        }
        default:
            return state;
    }
};

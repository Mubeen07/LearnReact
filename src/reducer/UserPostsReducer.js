import {addPost} from "../actions/addPostActions";

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
        case "ADD_POST":{
            return {
                ...state,
                SelectedUserPostsRecord: addPost

            }
        }
        default:
            return state;
    }
};

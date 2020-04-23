export const addPost = addPost => dispatch => {
    try {
        dispatch({
            type: "ADD_POST",
            payload: addPost
        });
    } catch (err) {
        throw new Error(err);
    }
};

export const selectPost = selectedPost => dispatch => {
    try {
        dispatch({
            type: "SELECT_POST",
            payload: selectedPost
        });
    } catch (err) {
        throw new Error(err);
    }
};

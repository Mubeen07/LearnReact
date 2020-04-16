export const selectUserPosts = selectedUserPosts => dispatch => {
    try {
        dispatch({
            type: "SELECT_USER_POSTS",
            payload: selectedUserPosts
        });
    } catch (err) {
        throw new Error(err);
    }
};

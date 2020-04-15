export const selectUser = selectedUser => dispatch => {
  try {
    dispatch({
      type: "SELECT_USER",
      payload: selectedUser
    });
  } catch (err) {
    throw new Error(err);
  }
};

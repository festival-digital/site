export const createThunkMiddleware = (any) => ({ dispatch, getState }) => (
  action
) => {
  if (typeof action === 'function') {
    return action(dispatch, getState, any);
  }
  return dispatch(action);
};

export default createThunkMiddleware();

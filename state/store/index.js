import React from 'react';
import PropTypes from 'prop-types';
import { useCombinedReducers, StoreContext } from 'state/store/hooks';
import { createThunkMiddleware as thunk } from 'state/store/middleware/thunk';

const Provider = ({ children }) => {
  const { store, reducers } = useCombinedReducers();

  const triggerDispatchs = (action) => {
    for (let i = 0; i < reducers.length; i += 1) {
      reducers[i](action);
    }
  };

  const withMiddleware = (action) => {
    const dispatch = triggerDispatchs;
    const getState = () => store;
    thunk()({ dispatch, getState })(action);
  };

  return (
    <StoreContext.Provider
      value={{
        store,
        dispatch: withMiddleware,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

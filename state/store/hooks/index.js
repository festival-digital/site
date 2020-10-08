import { useContext, createContext, useReducer } from 'react';
import accountReducer, { accountDefault } from 'state/reducers/account';

/* Hook useCombinedReducers() */
const useCombinedReducers = () => {
  const [accountStore, account] = useReducer(accountReducer, accountDefault);

  return {
    store: {
      account: { ...accountStore },
    },
    reducers: [account],
  };
};

/* Criação do Contexto principal */
const defaultStore = {
  store: {
    account: { ...accountDefault },
  },
  dispatch: () => {},
};

/* Store Context */
const StoreContext = createContext(defaultStore);

/* Hook useStore() */
const useStore = () => {
  return useContext(StoreContext);
};

export { useCombinedReducers, useStore, StoreContext };

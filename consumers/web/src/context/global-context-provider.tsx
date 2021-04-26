import React from 'react';
import Action from './actions';

const initialState = {
  isNavbarDisplay: true,
};

export const GlobalContext: any = React.createContext(initialState);

const GlobalContextProvider = ({ children }: any) => {
  const [state, dispatch] = React.useReducer((state: any, action: any) => {
    switch (action.type) {
      case Action.UPDATE_STATE:
        return { ...state, ...action.payload };
      default:
        return initialState;
    }
  }, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

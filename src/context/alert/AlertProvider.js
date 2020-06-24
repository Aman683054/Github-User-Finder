import React, { useReducer } from 'react';

import { GithubActionTypes } from '../types';
import AlertReducer from './AlertReducer';
import AlertContext from './AlertContext';

const AlertProvider = ({ children }) => {
  const Initial_State = {
    alerts: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, Initial_State);

  //Set Alert

  const setAlert = (msg, type) => {
    dispatch({
      type: GithubActionTypes.SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => {
      dispatch({ type: GithubActionTypes.REMOVE_ALERT });
    }, 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state.alerts,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;

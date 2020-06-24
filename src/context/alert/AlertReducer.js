import { GithubActionTypes } from '../types';

const AlertReducer = (state, action) => {
  switch (action.type) {
    case GithubActionTypes.SET_ALERT:
      return {
        ...state,
        alerts: action.payload,
      };

    case GithubActionTypes.REMOVE_ALERT:
      return {
        ...state,
        alerts: null,
      };

    default:
      return state;
  }
};

export default AlertReducer;

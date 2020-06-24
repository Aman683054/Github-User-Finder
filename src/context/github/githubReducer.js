import { GithubActionTypes } from '../types';

const GithubReducer = (state, action) => {
  switch (action.type) {
    case GithubActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GithubActionTypes.CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };

    case GithubActionTypes.GET_USER_PROFILE:
      return {
        ...state,
        userprofile: action.payload,
        loading: false,
      };

    case GithubActionTypes.SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case GithubActionTypes.GET_USER_REPO:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default GithubReducer;

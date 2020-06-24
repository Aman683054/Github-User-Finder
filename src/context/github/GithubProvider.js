import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './githubReducer';
import { GithubActionTypes } from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_ID;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    userprofile: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Set Loading
  const setLoading = () => dispatch({ type: GithubActionTypes.SET_LOADING });

  //Search User
  const searchUser = async (text) => {
    try {
      setLoading();
      const result = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
        ${githubClientId}&client_secret=
        ${githubClientSecret}`);

      dispatch({
        type: GithubActionTypes.SEARCH_USERS,
        payload: result.data.items,
      });

      // console.log(result.data);
    } catch (e) {
      console.error(e);
    }
  };

  //Clear search users
  const clearUsers = () => dispatch({ type: GithubActionTypes.CLEAR_USERS });

  //get user profile
  const getUserProfile = async (username) => {
    try {
      setLoading();
      const result = await axios.get(`https://api.github.com/users/${username}?client_id=
        ${githubClientId}&client_secret=
        ${githubClientSecret}`);

      dispatch({
        type: GithubActionTypes.GET_USER_PROFILE,
        payload: result.data,
      });
    } catch (e) {
      console.error(e);
    }
  };

  //get user repos
  const getUserRepos = async (username) => {
    try {
      setLoading();
      const result = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
        ${githubClientId}&client_secret=
        ${githubClientSecret}`);

      dispatch({
        type: GithubActionTypes.GET_USER_REPO,
        payload: result.data,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        userprofile: state.userprofile,
        loading: state.loading,
        repos: state.repos,
        searchUser,
        clearUsers,
        getUserProfile,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;

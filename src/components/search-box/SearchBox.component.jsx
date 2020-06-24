import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const SearchBox = () => {
  const [search, setsearch] = useState('');
  const { searchUser, clearUsers, users } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const onChange = (e) => {
    setsearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (search === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUser(search);
      setsearch('');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          value={search}
          placeholder='Search Users...'
          onChange={onChange}
        />

        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
        {users.length > 0 && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBox;

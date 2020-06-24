import React, { useContext } from 'react';

import UserItem from '../user-item/UserItem.component';
import Spinner from '../spinner/Spinner.component';
import GithubContext from '../../context/github/GithubContext';
import './User.styles.scss';

const User = () => {
  const { users, loading } = useContext(GithubContext);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='user-style'>
        {users.map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  }
};

export default User;

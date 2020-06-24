import React from 'react';

import './UserItem.styles.scss';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  const { login, avatar_url } = user;
  return (
    <div className='user-item'>
      <img src={avatar_url} alt='' className='avatar' />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='button'>
          more
        </Link>
      </div>
    </div>
  );
};

export default UserItem;

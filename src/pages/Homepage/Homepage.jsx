import React, { Fragment } from 'react';
import SearchBox from '../../components/search-box/SearchBox.component';
import User from '../../components/user/User.component';

const Homepage = () => {
  return (
    <Fragment>
      <SearchBox />
      <User />
    </Fragment>
  );
};

export default Homepage;

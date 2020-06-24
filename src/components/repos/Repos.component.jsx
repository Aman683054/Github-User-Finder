import React, { useContext } from 'react';
import RepoList from '../repo-list/RepoList.component';
import GithubContext from '../../context/github/GithubContext';

const Repos = () => {
  const { repos } = useContext(GithubContext);
  return (
    <div>
      {repos
        ? repos.map((repo) => <RepoList repo={repo} key={repo.id} />)
        : null}
    </div>
  );
};

export default Repos;

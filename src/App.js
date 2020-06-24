import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from '../src/components/layouts/NavBar/NavBar.component';
import Alert from './components/alert/Alert.component';
import About from './pages/about/About';
import UserProfile from './components/user-profile/UserProfile.component';
import GithubProvider from './context/github/GithubProvider';
import AlertProvider from './context/alert/AlertProvider';
import Homepage from './pages/Homepage/Homepage';
import NotFound from './pages/not-found/NotFound';

const App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
        <div className='App'>
          <NavBar title='Github Finder' />
          <div className='container'>
            <Alert />
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/about' component={About} />

              <Route path='/user/:login' component={UserProfile} />

              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </AlertProvider>
    </GithubProvider>
  );
};

export default App;

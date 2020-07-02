import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomeScreen} />
      </Switch>
    </>
  );
}

export default App;

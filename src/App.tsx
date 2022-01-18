import React,{ useContext } from 'react';
import User from './components/user/User'
import {UserContext} from './providers/userProvider'

function App() {
  
  const {name} = useContext(UserContext)

  return (
    <div className="App">
      <User name="lucas" description="test description" />
      <h1>{name}</h1>
    </div>
  );
}

export default App;

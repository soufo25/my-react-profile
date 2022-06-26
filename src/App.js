import React from 'react';
import './App.css';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';
import ProfilePhoto from './Components/Profile/ProfilePhoto';


function App() {
  const name = "Nteyou Nkah"
  return (
  <div className='App'>
    <>
    <ProfilePhoto />
    <FullName />
    <Address />
    
    </>    
    </div>
    
  );
}

export default App;

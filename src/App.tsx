import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import Dashboard from './Components/Dashboard/Dashboard';
import { UserProvider } from '../src/Components/Context/AuthContext';
import './App.css';
import PrivateRoute from './PrivateRoute';


function App() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [hideNavbar, setHideNavbar] = useState<boolean>(false);

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <div className="App">
      <UserProvider>
        <Router>
          {!hideNavbar && (
            <Navbar isSignedIn={isSignedIn} handleSignOut={handleSignOut} />
          )}
          <Routes>
            <Route path="/" element={<HomePage setHideNavbar={setHideNavbar} hideNavbar={hideNavbar} />} />
            <Route path="/sign-in" element={<SignIn setIsSignedIn={setIsSignedIn} hideNavbar={true} setHideNavbar={setHideNavbar} />} />
            <Route path='/dashboard' element={<PrivateRoute element={undefined} />}>
              <Route path='/dashboard' element={<Dashboard setHideNavbar={setHideNavbar} hideNavbar={hideNavbar} />} />
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;

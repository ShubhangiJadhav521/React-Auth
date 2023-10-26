import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  isSignedIn: boolean;
  handleSignOut: () => void;
}

function Navbar({ isSignedIn, handleSignOut }: NavbarProps) {
  const navigate = useNavigate();
  const handleSignOutAndRedirect = () => {
    handleSignOut();
    navigate('/');
  };
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo">
          itWox
        </Link>
        <ul className="nav-links">

          {isSignedIn ? (
            <>
              <li>
                <Link to="/dashboard" className="btnli">Dashboard</Link>
              </li>
              <li>
                <Link to="/" onClick={handleSignOutAndRedirect} className="btnli">
                  Sign Out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/" className="btnli">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sign-in" className="btnli">
                  Sign In
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

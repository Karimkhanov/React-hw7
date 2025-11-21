import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './NavBar.css';

const NavBar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          R&M App
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/items" className="nav-link">Characters</NavLink>
          </li>
          {currentUser ? (
            <>
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link">Profile</NavLink>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-button">Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Profile.css';

const Profile = () => {
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
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <p>
          <strong>Email:</strong> {currentUser?.email}
        </p>
        <p>
          <strong>User ID:</strong> {currentUser?.uid}
        </p>
      </div>
      <button onClick={handleLogout} className="logout-button">
        Log Out
      </button>
    </div>
  );
};

export default Profile;
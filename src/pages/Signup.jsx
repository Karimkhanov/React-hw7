import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ErrorBox from '../components/ErrorBox';
import './AuthForm.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signup(email, password);
      navigate('/profile');
    } catch (err) {
      console.error("Firebase Signup Error:", err);
      setError('Failed to create an account. The email might already be in use.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {error && <ErrorBox message={error} />}
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button disabled={loading} type="submit" className="auth-button">
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      <div className="auth-switch-text">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default Signup;
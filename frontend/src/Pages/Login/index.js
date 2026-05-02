import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,     // oder email, je nachdem was dein Backend erwartet
        password,
      });

      // Token speichern
      localStorage.setItem('token', response.data.token);
      
      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }

      alert('Login erfolgreich! 🎉');
      navigate('/');           // Zur Startseite

    } catch (err) {
      setError(err.response?.data?.message || 'Falsche Zugangsdaten');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <h2>Login</h2>
        
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Benutzername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input 
            type="submit" 
            value={loading ? "Einloggen..." : "Login"} 
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
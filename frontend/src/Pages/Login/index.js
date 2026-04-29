import React from 'react';
import styles from './Login.module.css';

class Login extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <h2>Login</h2>
          <form className={styles.loginForm} action="#" method="post">
            <input type="text" name="username" placeholder="Benutzername" required />
            <input type="password" name="password" placeholder="Passwort" required />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

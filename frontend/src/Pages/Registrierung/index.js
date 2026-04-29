import React from 'react';
import styles from './Registrierung.module.css';

class Registrierung extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.RegistrierungContainer}>
          <h2>Registrierung</h2>
          <form className={styles.loginForm} action="#" method="post">
            <input type="text" name="Email" placeholder="Email" required />
            <input type="text" name="Benutzername" placeholder="Benutzername" required />
            <input type="password" name="password" placeholder="Passwort" required />
            <input type="submit" value="Registrieren" />
          </form>
        </div>
      </div>
    );
  }
}

export default Registrierung;

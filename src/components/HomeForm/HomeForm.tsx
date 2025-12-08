import React from 'react';
import styles from './HomeForm.module.css';
import peticon from '../../assets/petqr-icon.png';
import { Link } from 'react-router-dom';

export const HomeForm = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoSection}>
        <div className={styles.logoContainer}>
          <img src={peticon} alt="pet" className={styles.petqricon} />
        </div>
        <h1 className={styles.title}>Crear una cuenta</h1>
        <h3 className={styles.description}>Únete para comenzar</h3>
      </div>

      <div className={styles.loginSection}>
        <div className={styles.formWrapper}>
          <Link to="/register" className={styles.signEmail}>Registrarse con correo</Link>
          <a href="#" className={styles.login}>Iniciar sesión</a>
          <a href="#" className={styles.policy}>Políticas de privacidad</a>
        </div>
      </div>
    </div>
  );
};

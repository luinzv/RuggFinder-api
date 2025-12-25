import styles from "./HomeForm.module.css";
import { backgroundCathuman, petqrIcon, stampImage, userSvg } from "../../assets/icon";

export const HomeForm = () => {

  return (
    <div className={styles.Header}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarMenu}>
          <div className={styles.stamp}>
            <div className={styles.stampImage}>
              <img src={stampImage} alt="fingerprint" />
            </div>
            <div className={styles.stampText}>
              RuggFinder
            </div>
          </div>

          <div className={styles.aboutContainerNav}>
            <a href="#">Inicio</a>
            <a href="#">Nosotros</a>
            <a href="#">Contacto</a>
          </div>


          <div className={styles.login}>
            <div className={styles.containerUserSvg}>
              <img src={userSvg} alt="userSvg" />
            </div>
            <h3>Ingresar</h3>
          </div>
        </div>
      </div>
      <div className={styles.ContainerGridForm}>
        <div className={styles.logoSection}>
          <div className={styles.logoContainer}>
            <img src={petqrIcon} alt="petQRicon" />
          </div>
        <h1 className={styles.title}>
          Crear una cuenta
        </h1>
        <h3 className={styles.description}>Unete para comenzar</h3>
        </div>

        <div className={styles.FormContainer}>
          <div className={styles.formRegister}>
            <a href="/register" className={styles.signEmail}>Registrarse con correo</a>
            <a href="/login" className={styles.login}>Iniciar sesión</a>
            <a href="#" className={styles.privacyText}>Politicas de privacidad</a>
          </div>
        </div>
      </div>

      <div className={styles.aboutSectionContainer}>
        <div className={styles.aboutSectionContainer}>
          <div className={styles.visualWrapper}>

            <div className={styles.imageWrapper}>
              <img src={backgroundCathuman} alt="PetQR" />
            </div>

            <div className={styles.textWrapper}>
              <h1>Accede a tu cuenta</h1>
              <h3>Inicia sesión para revisar los perfiles</h3>
            </div>
          </div>
          <div className={styles.buttonStyles}>
            <button className={`${styles.btnblack} ${styles.buttons}`}>
              Ingresar
            </button>
            <button className={`${styles.btnwhite} ${styles.buttons}`}>
              Registrarse
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

import styles from "./HomeForm.module.css";
import { animalPortals, communityIcon, mailIcon, petqrIcon, secureIcon, stampImage, userSvg } from "../../assets/icon";

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


          <div className={styles.login1}>
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
          <div className={styles.backtoback}>
            <h1>Bienvenido de vuelta</h1>
            <h3>Ingresa para continuar en RuggFinder </h3>
          </div>
          <div className={styles.formRegister}>
            <div className={styles.signEmailContainer}>
              <a href="/register" className={styles.signEmail}>Registrarse con correo</a>
              <img src={mailIcon} alt="mailIcon" className={styles.mailIcon}/>
            </div>
            <div className={styles.borderContainer}>
              <div className={styles.borderfix}></div>
              o
              <div className={styles.borderfix}></div>
            </div>
            <a href="/login" className={styles.login}>Ingresa con tu cuenta</a>
            <a href="#" className={styles.privacyText}>Politicas de privacidad</a>

            <div className={styles.containerData}>
              <div className={styles.forgotpasword}>
                <a href="#">¿Olvidaste tu contraseña?</a>
              </div>
              <div className={styles.noaccount}>
                ¿No tienes cuenta? <a href="#">Registrate</a>
              </div>

              <div className={styles.aboutus}>
                © 2025 <span>RuggFinder</span> <a href="#">Privacidad • Terminos</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutSectionContainer}>
        <div className={styles.aboutSectionContainerWrapper}>
          <div className={styles.phraseContainer}>
          <h1>
            Recupera lo que más amas, regístrate en RuggFinder
          </h1>
        </div>
        <div className={styles.stickerContainer}>
          <div className={styles.securePlataformContainer}>
            <img src={secureIcon} alt="shield" />
            Plataforma Segura
          </div>

          <div className={styles.comunitySupportContainer}>
            <img src={communityIcon} alt="community" />
            Apoyo Comunitario
          </div>
        </div>

        <div className={styles.animalsContainer}>
          <img src={animalPortals} alt="animals" />
        </div>
        </div>
      </div>

    </div>
  );
};

import { useState } from "react";
import styles from "./LoginForm.module.css";
import { backgroundCathuman, catSleepingIcon, humanpetIcon, mailIcon, stampImage, userIcon, userSvg } from "../../assets/icon";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [, setError] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const userData = { email, password };

        try {
            const response = await fetch("http://localhost:4000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.msg || "Error en el inicio de sesión");
            }

            const data = await response.json();
            console.log("Usuario autenticado:", data);
            localStorage.setItem("token", data.token);

            window.location.href = "/home";

        } catch (err: any) {
            setError(err.message);
        }
    };

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
                <div className={styles.FormContainer}>
                    <div className={styles.accessAccount}>
                        <h1>Accede a tu cuenta</h1>
                        <h3>Inicia sesión para revisar los perfiles</h3>
                    </div>
                    <div className={styles.pugIconContainer}>
                        <img src={catSleepingIcon} alt="pugicon" className={styles.pugIcon} />
                    </div>
                    <div className={styles.catIconContainer}>
                        <img src={humanpetIcon} alt="pugicon" className={styles.catIcon} />
                    </div>

                    <div className={styles.titleCatContainer}>
                        <h1>Accede a tu cuenta</h1>
                    </div>

                    <div className={styles.formRegister}>
                        <form action="" className={styles.formInputs} onSubmit={handleSubmit}>
                            <div className={styles.inputContainer}>
                                <input
                                    type="email"
                                    placeholder='Correo electronico'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <img src={userIcon} alt="userIcon" className={styles.userIcon} />
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    type="password"
                                    placeholder='Contraseña'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <img src={mailIcon} alt="mailIcon" className={styles.userIcon} />
                            </div>

                            <div className={styles.privacyContent}>
                                <h3 className={styles.privacyText}>
                                    ¿Olvidaste tu contraseña?
                                </h3>
                            </div>

                            <button type="submit" className={styles.buttonSubmit}>Registrar</button>
                        </form>
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

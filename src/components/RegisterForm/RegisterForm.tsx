import { useState } from 'react';
import styles from './RegisterForm.module.css';
import { pugqrIcon, userIcon, mailIcon, passwordIcon, checkboxIcon, petqrIcon, stampImage, userSvg } from '../../assets/icon';

export const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [, setError] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        console.log("Datos a enviar:", { nombre, email, password });

        const userData = { nombre, email, password };

        try {
            const response = await fetch('http://localhost:4000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.msg || 'Error en el registro');
            }

            const data = await response.json();
            console.log('Usuario registrado:', data);

        } catch (err: any) {
            console.error("Detalles del error:", err);
            setError(err.message || 'Error desconocido');
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
                    <div className={styles.pugIconContainer}>
                        <img src={pugqrIcon} alt="pugicon" className={styles.pugIcon} />
                    </div>
                    <div className={styles.title}>Registrate con tus datos</div>
                    <div className={styles.formRegister}>
                        <form action="" className={styles.formInputs} onSubmit={handleSubmit}>
                            <div className={styles.inputContainer}>
                                <input
                                    type="text"
                                    placeholder='Usuario'
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                <img src={userIcon} alt="userIcon" className={styles.userIcon} />
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    type="email"
                                    placeholder='Correo Electronico'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <img src={mailIcon} alt="mailIcon" className={styles.userIcon} />
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    type="password"
                                    placeholder='Contraseña'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <img src={passwordIcon} alt="passwordIcon" className={styles.passwordIcon} />
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    type="password"
                                    placeholder='Repetir Contraseña'
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <img src={passwordIcon} alt="passwordIcon" className={styles.passwordIcon} />
                            </div>


                            <div className={styles.privacyContent}>
                                <h3 className={styles.privacyText}>
                                    Acepto los Términos y Condiciones y la Política de Privacidad
                                </h3>
                                <img src={checkboxIcon} alt="checkboxIcon" />
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
                            <img src={petqrIcon} alt="PetQR" />
                        </div>

                        <div className={styles.textWrapper}>
                            <h1>Crea una cuenta</h1>
                            <h3>Regístrate para comenzar</h3>
                        </div>
                    </div>
                    <div className={styles.buttonStyles}>
                            <button className={`${styles.btnblack} ${styles.buttons}`}>
                                Registrarse
                            </button>
                            <button className={`${styles.btnwhite} ${styles.buttons}`}>
                                Ingresar
                            </button>
                        </div>
                </div>
            </div>

        </div>
    );
};

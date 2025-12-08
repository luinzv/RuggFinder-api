import { useState } from "react";
import styles from "./LoginForm.module.css";
import { humanpetIcon, mailIcon, passwordIcon } from "../../assets/icon";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 

    const handleSubmit = async (e:any) => {
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
            
            window.location.href = "/perfil"; 

        } catch (err:any) {
            setError(err.message); 
        }
    };

    return (
        <div className={styles.Header}>
            <div className={styles.FormContainer}>
                <form onSubmit={handleSubmit} className={styles.FormLogin}>
                    <div className={styles.textTitle}>
                        <h1>Accede a tu cuenta</h1>
                        <h3>Inicia sesión para ver tu perfil</h3>
                    </div>

                    <div className={styles.imageContainer}>
                        <img src={humanpetIcon} alt="humanpet" />
                    </div>

                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            placeholder="Correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <img src={mailIcon} alt="mailIcon" />
                    </div>

                    <div className={styles.inputContainer}>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <img src={passwordIcon} alt="password" />
                    </div>
                    <div className={styles.forgotpassword}>
                        <a href="#">Olvidaste la contraseña?</a>
                    </div>

                    {error && <div className={styles.error}>{error}</div>} {}
                    
                    <button type="submit" className={styles.AccessButton}>Acceder</button>
                </form>
            </div>
        </div>
    );
};

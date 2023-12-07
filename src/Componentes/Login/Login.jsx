import React, { useState } from "react";
import './login.css'

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    const handleLogin = () => {
        const fakeToken = "fake_access_token";
        localStorage.setItem("token", fakeToken);
        onLogin();

        // Limpiar los campos después de iniciar sesión
        setUsername("");
        setPassword("");

        // Imprimir todo el contenido de localStorage
        console.log(localStorage);

        // Imprimir el valor asociado con una clave específica
        console.log(localStorage.getItem('token'));

        // Mostrar el mensaje
        setShowMessage(true);
    };

    return (
        <main className="contenedorlogin">
            <div className="contenedorformulario">
                <div className="input-group mb-3">
                    <span
                        className="input-group-text"
                        id="basic-addon1">Usuario</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese su usuario"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                    <span
                        className="input-group-text"
                        id="basic-addon1">Contraseña</span>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Ingrese su contraseña"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleLogin}>Iniciar Sesión</button>

                {showMessage && <p>¡Ha iniciado sesión correctamente!</p>}
            </div>
        </main>
    )
}

export default Login;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const loginUrl = 'http://localhost:3001/api/users/login';

const LoginPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const confirm = async (e) => {
        e.preventDefault();
        const requestBody = { login: login, password: password };
        try {
            const request = await axios.post(loginUrl, requestBody);
            setSuccess(request.data.success);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        if (success) {
            localStorage.setItem('login', login);
            navigate('/');
        }
    }, [success]);

    return (
        <form className="login">
            <h1>CHICKEN DRIVER</h1>
            <input
                type="text"
                placeholder="Login"
                onChange={(e) => {
                    setLogin(e.target.value);
                }}
                value={login}
            />
            <input
                type="text"
                placeholder="Password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                value={password}
            />
            <button onClick={confirm}>Connexion</button>
        </form>
    );
};

export default LoginPage;

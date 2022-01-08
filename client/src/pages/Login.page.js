import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { gsap } from 'gsap';

const loginUrl = 'http://localhost:3001/api/users/login';

const LoginPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(null);

    const navigate = useNavigate();
    const errorMessRef = useRef();

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
        } else if (success === false) {
            console.log('oui');
            gsap.timeline().fromTo(
                errorMessRef.current,
                {
                    scale: 0,
                },
                {
                    scale: 1,
                    ease: 'back',
                },
            );
        }
    }, [success]);

    // animation

    useEffect(() => {
        gsap.set(errorMessRef.current, {
            scale: 0,
        });
        gsap.timeline().from('.login', {
            duration: 1,
            x: -1000,
            ease: 'bounce',
        });
    }, []);

    return (
        <form className="login">
            <h1>CHICKEN DRIVER</h1>
            <p className="error" ref={errorMessRef}>
                login ou mot de passe incorrect
            </p>
            <input
                type="text"
                placeholder="Login"
                onChange={(e) => {
                    setLogin(e.target.value);
                }}
                value={login}
            />
            <input
                type="password"
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

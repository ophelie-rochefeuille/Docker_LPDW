import React, { useState } from 'react';
import axios from 'axios';

const loginUrl = 'http://localhost:3001/api/users/login';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const confirm = async () => {
        const requestBody = { login: login, password: password };
        try {
            const request = await axios.post(loginUrl, requestBody);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="Home">
            <div className="form">
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
                <button onClick={confirm}>se connecter</button>
            </div>
        </div>
    );
};

export default Login;

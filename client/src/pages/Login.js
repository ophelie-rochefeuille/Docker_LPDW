import React, { useState } from 'react';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const confirm = () => {};

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

import React, { useState } from 'react';
import axios from 'axios';

const signinUrl = 'http://localhost:3001/api/users/sign';

const SignInPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const confirm = async () => {
        const requestBody = {
            user: {
                login: login,
                password: password,
                firstName: firstName,
                lastName: lastName,
            },
        };
        try {
            const request = await axios.post(signinUrl, requestBody);
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <div className="Sign">
            <div>
                <input
                    type="text"
                    placeholder="FirstName"
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                    value={firstName}
                />
                <input
                    type="text"
                    placeholder="LastName"
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                    value={lastName}
                />
            </div>
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
            <input
                type="password"
                placeholder="Confim Password"
                onChange={(e) => {
                    setConfirmPassword(e.target.value);
                }}
                value={confirmPassword}
            />
            <button onClick={confirm}>s`enregistrer</button>
        </div>
    );
};

export default SignInPage;

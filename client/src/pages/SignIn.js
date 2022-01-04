import React, { useState } from 'react';

const SignIn = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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
            <button>Confirm</button>
        </div>
    );
};

export default SignIn;

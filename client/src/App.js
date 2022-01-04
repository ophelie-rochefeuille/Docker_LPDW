import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignIn from './pages/SignIn';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    );
};

export default App;

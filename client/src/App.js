import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard.page';
import LoginPage from './pages/Login.page';
import SignInPage from './pages/SignIn.page';

const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/" element={<DashboardPage />} />
        </Routes>
    );
};

export default App;

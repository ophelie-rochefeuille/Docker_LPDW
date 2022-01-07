import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('login')) {
            navigate('/login');
        }
    }, []);
    return <div></div>;
};

export default DashboardPage;

import React from 'react';
import CreatorLogin from '../../components/Auth/CreatorLogin';
import { useAuth } from '../../hooks/useAuth';

const CreatorLoginPage = () => {
    const { login } = useAuth();

    const handleLogin = (email, password) => {
        login(email, password);
    };

    return (
        <div>
            <h3>Creator Login</h3>
            <CreatorLogin onLogin={handleLogin} />
        </div>
    );
};

export default CreatorLoginPage;



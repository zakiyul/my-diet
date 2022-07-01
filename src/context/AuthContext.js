import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
import config from '../global/config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [authToken, setAuthToken] = useState(() => localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null);
    const [user, setUser] = useState(() => localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null);

    const loginUser = async (e) => {
        e.preventDefault();
        const response = await fetch(`${config.BASE_URL}/api/token/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'username': e.target.username.value, 'password': e.target.password.value })
        });
        const data = await response.json();
        if (response.status === 200) {
            setAuthToken(data);
            setUser(jwt_decode(data.access));
            console.log(authToken);
            localStorage.setItem('authToken', JSON.stringify(data));
            navigate('/admin', { replace: true }); 
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
              })
        }
    }
    const logoutUser = () => {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem('authToken');
        navigate('/login', { replace: true });
    }

    const contextData = {
        user,
        loginUser,
        logoutUser,
    };
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
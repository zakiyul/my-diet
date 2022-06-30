import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [authToken, setAuthToken] = useState(() => localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null);
    const [user, setUser] = useState(() => localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null);
    const [loading, setLoading] = useState(true);

    const loginUser = async (e) => {
        e.preventDefault();
        const response = await fetch('https://zakiulfikri.pythonanywhere.com/api/token/', {
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
    const updateToken = async () => {
        const response = await fetch('https://zakiulfikri.pythonanywhere.com/api/refresh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'refresh': authToken.refresh })
        });
        const data = await response.json();

        if (response.status === 200) {
            setAuthToken(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem('authToken', JSON.stringify(data));
        } else {
            logoutUser();
        }
    }

    const contextData = {
        user,
        loginUser,
        logoutUser,
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (authToken) {
                updateToken();
            }
        }, 2000);
        
        return () => clearInterval(interval);
    })
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
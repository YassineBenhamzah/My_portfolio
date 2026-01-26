import { useContext } from "react";
import { createContext, useState, useEffect } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    notification: null,
    isDarkMode: true,
    setUser: () => {},
    setToken: () => {},
    setNotification: () => {},
    toggleTheme: () => {},
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [notification, _setNotification] = useState("");
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const [isDarkMode, setIsDarkMode] = useState(true);
    
    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(prefersDark);
        }
    }, []);

    // Save theme to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };
    
    const setNotification = (msg) => {
        _setNotification(msg);  
        setTimeout(() => {
            _setNotification("");
        }, 5000);
    };
    
    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };
    
    return (
        <StateContext.Provider
            value={{
                user,
                token,
                notification,
                isDarkMode,
                setUser,
                setToken,
                setNotification,
                toggleTheme,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
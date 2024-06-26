import {useState, useEffect, createContext, useContext } from 'react';

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }

   return 'dark' 
};

export const Themecontext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    const rawSetTheme = (rawTheme) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('color-theme', rawTheme);
    };

    if (initialTheme) {
        rawSetTheme(initialTheme);
    }

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return (
        <Themecontext.Provider value={{ theme, setTheme }}>
            {children}
        </Themecontext.Provider>
    );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const { theme, setTheme } = useContext(Themecontext);
    return { theme, setTheme };
};
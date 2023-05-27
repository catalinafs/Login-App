import { createContext, useMemo, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    const product = useMemo(
        () => {
            return {
                isLogin,
                setIsLogin
            }
        }, [
        isLogin,
        setIsLogin
    ]);

    return (
        <Context.Provider value={product}>
            {children}
        </Context.Provider>
    );
}
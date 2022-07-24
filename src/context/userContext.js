import React, { useState, useContext, createContext } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export function UserProvider({ children }) {
    const [user, setUser] = useState();
    return (
        <UserContext.Provider
            value={{
                user,
                setUser: (userData) => {
                    setUser(userData);
                },
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

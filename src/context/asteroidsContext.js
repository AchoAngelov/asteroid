import React, { useState, useContext, createContext } from 'react';

const AsteroidContext = createContext();

export const useAsteroidContext = () => useContext(AsteroidContext);

export function AsteroidsProvider({ children }) {
    const [asteroids, setAsteroids] = useState();
    return (
        <AsteroidContext.Provider
            value={{
                asteroids,
                setAsteroids: (asteroidsData) => {
                    setAsteroids(asteroidsData);
                },
            }}
        >
            {children}
        </AsteroidContext.Provider>
    );
}

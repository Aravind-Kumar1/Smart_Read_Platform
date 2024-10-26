// src/context/FavoritesContext.js

import React, { createContext, useState, useContext } from 'react';

// Create the Favorites context
const FavoritesContext = createContext();

// Provider component for Favorites context
export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Function to add a favorite item
  const addFavorite = (item) => setFavorites((prev) => [...prev, item]);

  // Function to remove a favorite item by ID
  const removeFavorite = (itemId) =>
    setFavorites((prev) => prev.filter((item) => item.id !== itemId));

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom hook to use the Favorites context
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesContextProvider');
  }
  return context;
};

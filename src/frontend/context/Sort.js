import React, { useState, createContext } from 'react';

export const SortContext = createContext([]);

export const SortContextProvider = ({ children }) => {
  const [sortedBy, setSortedBy] = useState([]);

  return (
    <SortContext.Provider value={[sortedBy, setSortedBy]}>
      {children}
    </SortContext.Provider>
  );
};

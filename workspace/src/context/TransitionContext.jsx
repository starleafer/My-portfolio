import React, { createContext, useState, useContext } from 'react';

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
    const [runTransition, setRunTransition] = useState(false)


  return (
    <TransitionContext.Provider value={{ runTransition, setRunTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionContext = () => {
  return useContext(TransitionContext);
};
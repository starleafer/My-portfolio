import React, { createContext, useState, useContext, useEffect } from 'react';

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const [runTransition, setRunTransition] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState('');


  const triggerTransition = (direction) => {
    setRunTransition(true);
    setTransitionDirection(direction);
  }

  useEffect(() => {
    if (runTransition) {
      const timer = setTimeout(() => {
        setRunTransition(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [runTransition]);

  return (
    <TransitionContext.Provider value={{
      runTransition,
      setRunTransition,
      transitionDirection,
      setTransitionDirection,
      triggerTransition
    }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionContext = () => {
  return useContext(TransitionContext);
};

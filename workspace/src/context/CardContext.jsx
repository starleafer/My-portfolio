import React, { createContext, useContext } from 'react';

const CardContext = createContext();

export const CardProvider = ({ children }) => {

  const card = [
    { id: 1, title: "Cleaning service", path: 'cleaning', label: "React.js", color: 'var(--dark)', backgroundColor: 'var(--yellowish)'  },
    { id: 2, title: "Tic tac toe", path: 'tictactoe', label: "React Native", color: 'var(--blueish)', backgroundColor: 'var(--redish)', shadow: 'var(--shadow-blueish)'  },
    { id: 3, title: "The webb shop", path: 'webbshop', label: "React.js", color: 'var(--bisque)', backgroundColor: 'var(--greenish)', shadow: 'var(--shadow-bisuqe)'  },
    { id: 4, title: "The chat app", path: 'chatapp', label: "React Native", color: 'var(--neon-green)', backgroundColor: 'var(--light-purple)', shadow: 'var(--shadow-neon-green)'  },
    { id: 5, title: "The movie app", path: 'movieapp', label: "React.js / React Native", color: 'var(--redish)', backgroundColor: 'var(--darker)', shadow: 'var(--shadow-redish)'  },
  ];

  return (
    <CardContext.Provider value={{ card }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  return useContext(CardContext);
};

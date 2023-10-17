import React, { createContext, useState, useContext } from 'react';

const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [buttonFade, setButtonFade] = useState(false);


  return (
    <ButtonContext.Provider value={{ buttonFade, setButtonFade }}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonContext = () => {
  return useContext(ButtonContext);
};

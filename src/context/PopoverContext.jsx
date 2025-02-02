import React, { createContext, useContext, useState } from 'react';

const PopoverContext = createContext();

export const PopoverProvider = ({ children }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <PopoverContext.Provider value={{ isPopoverOpen, setIsPopoverOpen }}>
      {children}
    </PopoverContext.Provider>
  );
};

export const usePopover = () => {
  const context = useContext(PopoverContext);
  if (context === undefined) {
    throw new Error('usePopover must be used within a PopoverProvider');
  }
  return context;
}; 
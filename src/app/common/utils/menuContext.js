import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [widgetOpen, setWidgetOpen] = useState(true);
  const [mathBlockOpen, setMathBlockOpen] = useState(false);
  const [logicBlockOpen, setLogicBlockOpen] = useState(false);
  const [functionBlockOpen, setFunctionBlockOpen] = useState(false);
  const [constantsBlockOpen, setConstantsBlockOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        open,
        setOpen,
        widgetOpen,
        setWidgetOpen,
        mathBlockOpen,
        setMathBlockOpen,
        functionBlockOpen,
        setFunctionBlockOpen,
        logicBlockOpen,
        setLogicBlockOpen,
        constantsBlockOpen,
        setConstantsBlockOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
export const useMenu = () => {
  return useContext(MenuContext);
};

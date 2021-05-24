import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const OpenSidebar = () => {
    setIsSidebarOpen(true);
  };
  const CloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  const OpenModal = () => {
    setIsModalOpen(true);
  };
  const CloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        OpenModal,
        OpenSidebar,
        CloseModal,
        CloseSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

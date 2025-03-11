import { createContext, useState } from 'react';

interface AppContextType {
  contextCount: number;
  updateContextCount: () => void;
}

const AppContext = createContext({} as AppContextType);

const AppProvider = ({ children }: any) => {
  const [contextCount, setCount] = useState(0);
  const updateContextCount = () => setCount(contextCount + 1);

  return (
    <AppContext.Provider value={{ contextCount, updateContextCount }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

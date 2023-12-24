import { useState, useContext, createContext } from "react";

// 1. Create the context
const CPContext = createContext();

// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>
export const CPProvider = (props) => {
  // store the current user in state at the top level
  const [currentCP, setCurrentCP] = useState({});

  // sets user object in state, shared via context
  const handleUpdateCP = (user) => {
    setCurrentCP(user);
  };

  
  // 2. Provide the context.
  // The Provider component of any context (UserContext.Provider)
  // sends data via its value prop to all children at every level.
  // We are sending both the current user and an update function
  return (
    <CPContext.Provider value={{ currentCircle, handleUpdateCP }}>
      {props.children}
    </CPContext.Provider>
  );
};

// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useCPContext = () => {
  return useContext(CPContext);
};

import { useState, useContext, createContext } from "react";
import { useCookies } from "react-cookie";
import { themeList } from "../themes/themeList";

// 1. Create the context
const CPContext = createContext();

// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>
export const CPProvider = ({children, onChangeTheme}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  // store the current user in state at the top level
  const [currentCP, setCurrentCP] = useState(cookies.user ? cookies.user : {});

  // sets user object in state, shared via context
  const handleUpdateCP = (user) => {
    if (user) {
      setCookie("user", JSON.stringify(user), { path: "/", maxAge: 60 * 60 * 24 * 2 });
      if (user.level) {
      const [theme, ] =  themeList.get(user.level) //theme colour changes according to the user academic level 
      onChangeTheme(theme)
      }
      setCurrentCP(user);
    } else {
      removeCookie("user");
      
      const [theme, ] =  themeList.get("Default") //default theme if users are not log in 
      onChangeTheme(theme)
  
    }
    };

  
  // 2. Provide the context.
  // The Provider component of any context (UserContext.Provider)
  // sends data via its value prop to all children at every level.
  // We are sending both the current user and an update function
  return (
    <CPContext.Provider value={{ currentCP, handleUpdateCP }}>
      {children}
    </CPContext.Provider>
  );
};

// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useCPContext = () => {
  return useContext(CPContext);
};
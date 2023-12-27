import React from "react";

// theme options with specific colour values
export const themes = {
  light: {
    foreground: "#333333",
    background: "#BAE2FF",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

// named export for this context (to be used via useContext elsewhere)
export const MyThemeContext = React.createContext({theme:themes.light, state: true});


export default function MyThemeProvider(props) {
    
  const [theme, setTheme] = React.useState({theme:themes.light, state: true});
  // helper boolean to tell if we’re currently in dark mode
  const darkMode = theme.background === themes.dark;

  const handleThemeChange = () => {
    setTheme((prevTheme) => ({
      theme: prevTheme.theme === themes.light ? themes.dark : themes.light,
      state: !prevTheme.state,
    }));
  };
  return (
    <MyThemeContext.Provider value={{ theme, handleThemeChange, darkMode }}>
      {props.children}
    </MyThemeContext.Provider>
  );
}

export const useMyThemeContext = () => {
    return React.useContext(MyThemeContext)
}
// ++ Try to use this context to style some existing components
// ++ Try to add a component with a button/checkbox to switch themes

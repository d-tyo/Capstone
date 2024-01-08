import React from "react";
import { useState } from "react";
import "./App.css";
import CPNavBar from "./components/CPNavBar";
import AppRoutes from "./routes/AppRoutes";
import { CPProvider } from "./context/CPContext";
import { BrowserRouter } from "react-router-dom";
import { TeacherProvider } from "./context/TeacherContext";
import { ThemeProvider } from "@mui/material/styles";
import { purpleTheme } from "./themes/purpleTheme";
import { tealTheme } from "./themes/tealTheme";


function App() {
  const [count, setCount] = useState(0);
  const [currentTheme, setCurrentTheme] = useState(purpleTheme);
  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <CPProvider>
          <TeacherProvider>
            <CPNavBar onChangeTheme={setCurrentTheme} theme={currentTheme} />
          </TeacherProvider>
        </CPProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

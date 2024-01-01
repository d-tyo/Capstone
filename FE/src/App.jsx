import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CPNavBar from "./components/CPNavBar";
import AppRoutes from "./routes/AppRoutes";
import { CPProvider } from "./context/CPContext";

import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <CPProvider>
        <CPNavBar />
      </CPProvider>
    </BrowserRouter>
  );
}

export default App;

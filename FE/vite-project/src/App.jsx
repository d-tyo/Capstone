import { useState } from 'react';
import './App.css';
import Dashboard from './pages/dashboard';
import CPNavBar from './components/CPNavBar';
import Switch from '@mui/material/Switch';
// import MaterialUISwitch from '@mui/material'



function App() {
  const [count, setCount] = useState(0)
  // const [currentTheme, setCurrentTheme] = useState(purpleTheme);

  
    return (
      <>
      <CPNavBar/>
      </>
    );
  }

export default App;

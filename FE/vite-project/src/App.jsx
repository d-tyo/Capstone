import { useState } from 'react';
import './App.css';
import Dashboard from './pages/dashboard';
import CPNavBar from './components/CPNavBar';

function App() {
  const [count, setCount] = useState(0)
  // const [currentTheme, setCurrentTheme] = useState(purpleTheme);

  return (
    <>
     <CPNavBar>
      <Dashboard/>

     </CPNavBar>
    </>
  )
}

export default App;

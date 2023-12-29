import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import LogInPage from "../pages/LogInPage";
import StudentPage from "../pages/StudentPage";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";





// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
function AppRoutes(props) {
  return (
    <Routes>
     <Route index element={<LandingPage/>}/>
     <Route path="/signup" element={<SignUp {...props} />} />
     <Route path ="/Students" element= {<ProtectedRoute><StudentPage/></ProtectedRoute>}/>
     <Route path ="/loginpage" element= {<LogInPage/>}/>
     <Route path ="/dashboard" element= {<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
    


     
    </Routes>

    
  );
}

export default AppRoutes;

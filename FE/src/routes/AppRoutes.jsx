import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import LogInPage from "../pages/LogInPage";
import StudentPage from "../pages/StudentPage";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import AccountPage from "../pages/AccountPage";
import LessonPage from "../pages/LessonPage";
import HelpPage from "../pages/HelpPage";
import ProfilePage from "../pages/ProfilePage";




// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
function AppRoutes(props) {
  return (
    <Routes>
     <Route index element={<LandingPage/>}/>
     <Route path="/signup" element={<SignUp {...props} />} />
     <Route path ="/students" element= {<ProtectedRoute><StudentPage/></ProtectedRoute>}/>
     <Route path ="/loginpage" element= {<LogInPage/>}/>
     <Route path ="/account" element= {
    //  <ProtectedRoute>
        <AccountPage/>
        //* </ProtectedRoute> */
    }/>
     <Route path ="/dashboard" element= {
    //  <ProtectedRoute>
        <Dashboard/>
        //* </ProtectedRoute> */
    }/>
      
      <Route path ="/courses" element= {
    //  <ProtectedRoute>
        <LessonPage/>
        //* </ProtectedRoute> */
    }/>
      <Route path ="/help" element= {
    //  <ProtectedRoute>
        <HelpPage/>
        //* </ProtectedRoute> */
    }/>

<Route path ="/profile" element= {
    //  <ProtectedRoute>
        <ProfilePage/>
        //* </ProtectedRoute> */
    }/>
    
    </Routes>

    
  );
}

export default AppRoutes;

import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import LogInPage from "../pages/LogInPage";
import StudentPage from "../pages/StudentPage";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import LessonPage from "../pages/LessonPage";
import HelpPage from "../pages/HelpPage";
import ProfilePage from "../pages/ProfilePage";
import TeacherPage from "../pages/TeacherPage";
import LogOut from "../pages/LogOut";
import SingleLesson from "../pages/SingleLesson";




// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
function AppRoutes(props) {
  return (
    <Routes>
     <Route index element={<LandingPage/>}/>
     <Route path="/signup" element={<SignUp {...props} />} />
     <Route path ="/students" element= {
        // <ProtectedRoute>
        <StudentPage/>
        // </ProtectedRoute>
    }/>
     <Route path ="/login" element= {<LogInPage/>}/>
    
     <Route path ="/dashboard" element= {
    //  <ProtectedRoute>
        <Dashboard/>
        //* </ProtectedRoute> */
    }/>
      
      <Route path ="/course" 
        // element= {
    //  <ProtectedRoute>
        // <LessonPage/>
        //* </ProtectedRoute> */
    // }
    >   
    <Route path =":id" element= {
      //  <ProtectedRoute>
          <SingleLesson/>
       //* </ProtectedRoute> */
      }/>

    </Route>

    <Route path ="/courses" 
        element= {
        // <ProtectedRoute>
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
    
    <Route path ="/teachers" element= {
        // <ProtectedRoute>
        <TeacherPage/>
        // </ProtectedRoute>
    }/>
   

   <Route path ="/logout" element= {<LogOut/>}/>

   </Routes>
  );
}

export default AppRoutes;

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import CPNavBar from "../components/CPNavBar";

function AppRoutes(props) {
    return (


        <Route path="dash" element={<ProtectedRoute>
            <Dashboard {...props} />
            </ProtectedRoute>}>
      
        






</Route>

    
);
}

export default AppRoutes;
import { Outlet, Navigate } from "react-router-dom";
import { useCPContext } from "../context/CPContext";


// see https://www.robinwieruch.de/react-router-private-routes/
function ProtectedRoute({ redirectPath = '/loginpage', children }) {
    const {currentCP} = useCPContext()
    if (!currentCP.email) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet/>;
}

export default ProtectedRoute
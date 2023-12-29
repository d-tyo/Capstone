import { Outlet, Navigate } from "react-router-dom";


// see https://www.robinwieruch.de/react-router-private-routes/
function ProtectedRoute({ redirectPath = '/loginpage', children }) {
    const {currentCPContext} = useCPContext()
    if (!currentCP.email) {
        alert("Hey, please logged in!")
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet/>;
}

export default ProtectedRoute
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const locatin = useLocation()
    console.log(locatin.pathname)

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({isAuth, children}: { isAuth: boolean, children: any }) => {
    return isAuth
    ? children
    : <Navigate to='/login' />
}

export default PrivateRoutes;
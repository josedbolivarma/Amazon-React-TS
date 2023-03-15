import { Navigate } from "react-router-dom";

const PublicRoutes = ({isAuth, children}: { isAuth: boolean, children: any }) => {
    return !isAuth
    ?children
    :<Navigate to="/*"/>
};

export default PublicRoutes;
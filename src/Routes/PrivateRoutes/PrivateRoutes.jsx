import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate,useLocation} from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={location?.pathname || '/'}></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes={
    children:PropTypes.node
}
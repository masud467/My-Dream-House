import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate} from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoutes = ({children}) => {

    const {user} = useContext(AuthContext)

    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes={
    children:PropTypes.node
}
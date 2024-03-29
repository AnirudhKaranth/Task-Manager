import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext.js";

const ProtectedRoutes = ({children})=>{
    const { user } = useAppContext();
    if (!user) {
        return <Navigate to='/register'/>
    }
    return children
}

export default ProtectedRoutes
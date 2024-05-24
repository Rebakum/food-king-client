import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const ProtectedRoute = ({ children }) => {
    const { currentUser, loading } = useContext(AuthContext) || {}
    const location = useLocation()



    return (
        <div>
            { 
            loading?<div className="flex justify-center items-center min-h-screenn">
                <div className="loader ">

                </div>
            </div>
            :
            <div>
            
            {currentUser ?<> {children}</>
            
             :
                <Navigate state={location.pathname} to={`/login`} replace='true' />

            }

        </div>

            }
        </div>

    );
};

export default ProtectedRoute;
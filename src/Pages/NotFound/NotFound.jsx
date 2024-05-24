import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/lottie.json"



const NotFound = () => {
    return (

        <div>
        <Lottie animationData={groovyWalkAnimation} loop={true} />
        </div>
       
    );
};

export default NotFound;
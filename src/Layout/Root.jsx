import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Pages/Footer/Footer";


const Root = () => {
    return (
        <div>
           <div className=" poppins ">
           <Navbar></Navbar>
           </div>
           <div className=" mt-[90px] min-h-screen poppins ">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;
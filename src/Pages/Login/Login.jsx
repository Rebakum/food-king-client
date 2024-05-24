import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import SocialLogin from "./SocialLogin";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logImg from '../../assets/images/login.png'




const Login = () => {
    //navigation sistem
   

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';
    const { signInUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;

        signInUser(email, password)
            .then(result => {
                toast.success('Yeah!! You are welcome');
                if (result.user)
                    setTimeout(() => navigate(from), 0);
            })
            .catch(error => {
                console.log(error);
                toast.warn('Please check email and password');
            });
    };




    return (
        <div className="hero min-h-screen ">
            <div className=" flex flex-col lg:flex-row  justify-between items-center shadow-2xl gap-0 p-5">
                <div className="text-center lg:text-left flex-1">

                    <img className="rounded-2xl" src={logImg} alt="" />
                </div>
                <div>
                    <h1 className="text-4xl text-center font-bold">Login now!</h1>

                    <div className=" shrink-0 w-full h-full justify-center items-center flex-1 p-5">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"{...register("email", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}

                            </div>

                            <div className="flex justify-between items-center">
                                <label htmlFor="" className="label">
                                    <Link className="text-primary" >Porgot password !</Link>
                                    <small>No account plese <Link to="/register" className="text-primary">Register</Link></small>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                       <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
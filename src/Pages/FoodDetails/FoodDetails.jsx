import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { RiPassExpiredLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";



const FoodDetails = () => {
    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(currentUser)
    const food = useLoaderData();

    const {
        _id,
        food_image,
        food_name,
        additional_notes,
        food_quantity,
        expired_datetime,
        donator,
        pickup_location,
        food_status,
        current_date,


    }
        = food;

    const handeFormSubmit = async e => {
        e.preventDefault()   
        if (currentUser?.email === donator?.email)
            return toast.error('Action not permitted!')   
        const form = e.target
        const food_id = _id        
        const additional_notes = form.additional_notes.value        
        const email = currentUser?.email
        const allData = {
            food_id,
            food_image,
            food_name,
            additional_notes,
            food_quantity,
            expired_datetime,
            current_date,
            donator,
            pickup_location,
            food_status,
            email,
            donator_email:donator?.email,
            donator_name:donator?.name
            
        }
        console.table(allData)
        try {
            const { data } = await axios.post(
              `${import.meta.env.VITE_API_URL}/myRequestFoods`, allData
             
            )
            console.log(data)
            toast.success('Job Data Updated Successfully!');
            navigate('/myFoodRequest');
        } catch (err) {
          console.log(err)
          console.log('oooops, i am nai', err.message)
        }

    }


    return (
        <div className="hero min-h-screen   mt-32 mb-20   ">
            <div className="hero-content flex-col justify-center border rounded-2xl gap-10 items-center shadow-2xl p-10 ">
                <img className="rounded-2xl" src={food_image} />
                <h1 className="text-5xl rancho font-bold">Food Name: {food_name}</h1>
                <div>
                    <div className="flex justify-center items-center gap-10">

                        <div className="  *:text-xl *:font-bold poppins ">
                            <p>Food Quantity: {food_quantity}</p>
                            <p className="flex justify-state gap-3 items-center"><RiPassExpiredLine></RiPassExpiredLine> {expired_datetime}</p>
                        </div>

                        <div className="  *:text-xl *:font-bold poppins ">
                            <p>Donator: {donator.name}</p>
                            <p className="flex justify-state gap-3 items-center"><FaLocationDot></FaLocationDot> {pickup_location}</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-10">


                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn bg-orange-700" onClick={() => document.getElementById('my_modal_5').showModal()}>Request</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div >
                                <div className="modal-box *:my-2">
                                    <img src={food_image} alt="" />
                                    <h3 className="font-bold text-lg">{food_name}</h3>
                                    <hr />
                                    <div>
                                        <p className="py-4">Food id:{_id}</p>
                                        <p>PIckupLocation:{pickup_location}</p>
                                        <p>Expire Date: {expired_datetime}</p>
                                        {/* <p>Current Date: {new Date().toLocaleString()}</p> */}
                                        <p>Current Date:{current_date}</p>
                                    </div>
                                    <hr />

                                    <div>
                                        <p>Donar infomation:</p>
                                        <hr />
                                        <p>Donator Name: {donator?.name}</p>
                                        <p>Donator email: {donator?.email}</p>


                                    </div>
                                    <hr />

                                    <form onSubmit={handeFormSubmit} >


                                        <label className="form-control  md:w-1/2 ">
                                            <label className="label">
                                                <span className="label-text-alt text-primary">Email:
                                                </span>
                                            </label>
                                            <input type="email" id="email" disabled name="email" defaultValue={currentUser?.email} placeholder="email" className="input input-bordered w-full " />
                                        </label>
                                       

                                        <label className="form-control  md:w-1/2 ">
                                            <label className="label">
                                                <span className="label-text-alt text-primary">Additional Notes:
                                                </span>
                                            </label>
                                            <textarea name="additional_notes" id="additional_notes" className="border"></textarea>
                                        </label>

                                        <div className=" flex justify-center items-center gap-8 my-5">
                                            
                                        <button type="submit" className="btn">Request</button>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">close</button>
                                        </form>
                                        </div>

                                    </form>

                                    <div className="modal-action">
                                        
                                    </div>
                                </div>
                            </div>
                        </dialog>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;

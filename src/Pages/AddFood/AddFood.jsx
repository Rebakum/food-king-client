import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const AddFood = () => {

    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(currentUser)
       

   
    const handeFormSubmit = async e => {
        e.preventDefault();
        const form = e.target;
    
        const food_image = form.food_image.value;
        const food_name = form.food_name.value;
        const additional_notes = form.additional_notes.value;
        const expired_datetime = form.expired_datetime.value;
        const current_date = form.current_date.value;
        const pickup_location = form.pickup_location.value;
        const food_status = form.food_status.value;
        const food_quantity = form.food_quantity.value;
     
    
        const addData = {
            food_image,
            food_name,
            additional_notes,
            expired_datetime,
            current_date,
            pickup_location,
            food_status,
            food_quantity,
            donator: {
                email: currentUser?.email,
                name: currentUser?.displayName,
                image: form.DonatorURL.value
            }
        };
    
        console.table(addData);
    
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/allFoods`,
                addData
            );
            console.log(data);
            toast.success(' food Data Successfully!');
            navigate('/manageMyFood');
        } catch (err) {
            console.log(err);
            console.log('Oops, something went wrong:', err.message);
        }
    };

    
        return (
            <div className="hero min-h-screen bg-base-200">
        
        
                <div className="card shrink-0 w-full max-w-2xl  shadow-2xl bg-base-100">
                    <form onSubmit={handeFormSubmit} className="card-bod p-5">
                        <h1 className="text-3xl text-center rancho my-6">Add Data</h1>
        
                        <div className="flex justify-center items-center gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Name:</span>
                                </label>
                                <input type="text" id="food_name" name="food_name" className="input input-bordered px-10" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Image:</span>
                                </label>
                                <input type="text" id="food_image" name="food_image" className="input input-bordered px-10" required />
        
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Quantity:</span>
                                </label>
                                <input type="text" id="food_quantity" name="food_quantity" className="input input-bordered px-10" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Food Status:</span>
                                </label>
                                <input type="text" id="food_status" name="food_status" className="input input-bordered px-10" required />
        
                            </div>
                        </div>
        
        
                        <div className="flex justify-center items-center gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Donator Name:</span>
                                </label>
                                <input type="text" id="name" name="name" defaultValue={currentUser?.name} className="input input-bordered px-10" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Donator Email:</span>
                                </label>
                                <input type="email" id="email" name="email" defaultValue={currentUser?.email} className="input input-bordered px-10" required />
                            </div>
                        </div>
        
                        <div className="flex justify-center items-center gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Donator Image URL:</span>
                                </label>
                                <input type="text" id="DonatorURL" name="DonatorURL" defaultValue={currentUser?.image} className="input input-bordered px-10" required />
                            </div>
        
        
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Pickup location:</span>
                                </label>
                                <input type="text" id="pickup_location" name="pickup_location" className="input input-bordered px-10" required />                      </div>
                        </div>
        
                        <div className="flex justify-center items-center gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Expired Date:</span>
                                </label>
                                <input type="datetime-local" id="expired_datetime" name="expired_datetime" className="input input-bordered px-6" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Current Date:</span>
                                </label>
                                <input type="datetime-local" id="current_date" name="current_date" className="input input-bordered px-6" required />
                            </div>
                        </div>
        
        
                        <div className="form-control mx-6">
                            <label className="label">
                                <span className="label-text">Additional Notes:</span>
                            </label>
                            <textarea id="additional_notes" name="additional_notes" className="border "></textarea><br></br>
                        </div>
        
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        
        );
        };

export default AddFood;
{/* <label for="foodName">Food Name:</label>
<input type="text" id="foodName" name="foodName" required><br>

<label for="foodImage">Food Image URL:</label>
<input type="text" id="foodImage" name="foodImage" required><br>

<label for="foodQuantity">Food Quantity:</label>
<input type="number" id="foodQuantity" name="foodQuantity" required><br>

<label for="pickupLocation">Pickup Location:</label>
<input type="text" id="pickupLocation" name="pickupLocation" required><br>

<label for="expiredDateTime">Expired Date/Time:</label>
<input type="datetime-local" id="expiredDateTime" name="expiredDateTime" required><br>

<label for="additionalNotes">Additional Notes:</label>
<textarea id="additionalNotes" name="additionalNotes"></textarea><br>

<label for="donatorName">Donator Name:</label>
<input type="text" id="donatorName" name="donatorName" readonly><br>

<label for="donatorEmail">Donator Email:</label>
<input type="email" id="donatorEmail" name="donatorEmail" readonly><br>

<label for="donatorImage">Donator Image URL:</label>
<input type="text" id="donatorImage" name="donatorImage" readonly><br>

<input type="submit" value="Add"> */}
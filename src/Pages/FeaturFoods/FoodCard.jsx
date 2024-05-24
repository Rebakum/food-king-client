import { FaLocationDot } from "react-icons/fa6";
import { RiPassExpiredLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const FoodCard = ({ food }) => {
    const {_id,  food_image, food_name, additional_notes, food_quantity, expired_datetime, donator, pickup_location, food_status } = food;
    // console.log(food)
    return (

        <div className="card  bg-base-100 shadow-xl border-2 hover:border-b-8 hover:border-orange-700 transitio delay-100">
            <figure><img className="w-full h-72" src={food_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Food Name: {food_name} </h2>
                <span>{food_status}</span>
                <hr />
                <div className="*:font-bold">
                    <p>Food quantity: {food_quantity}</p>
                    <p className="flex justify-state gap-3 items-center"><RiPassExpiredLine></RiPassExpiredLine> {expired_datetime}</p>
                    <p className="flex justify-state gap-3 items-center"><FaLocationDot></FaLocationDot> {pickup_location}</p>
                </div>
                <hr />
                <div>
                    <img className="size-[60px] rounded-full" src={donator.image} alt="" />
                    <p> {donator?.name}</p>
                </div>

                <div className="card-actions justify-end">
                    <Link to={`/allFood/${_id}`} className="btn bg-orange-700 ">View Details</Link>
                </div>
            </div>
        </div>


    );
};

export default FoodCard;
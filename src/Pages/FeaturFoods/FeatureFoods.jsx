import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";



const FeatureFoods = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/allFoods`)
            .then(res => res.json())
            .then(data => {
                setFoods(data.slice(0, 6))

            })

    }, [])
    return (
        <div>
            <div className="text-center flex justify-center items-center flex-col my-20 ">
                <h1 className="text-7xl rancho ">Our Feature Foods</h1>
                <p className="lg:w-1/2 text-center rancho text-xl">Discover our enticing selection of feature foods, carefully curated to tantalize your taste buds with exquisite flavors and culinary delights.</p>
            </div>

            <div className=" poppins n gap-10 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <Link to="/availableFoods" className=" flex justify-center items-center my-20">
                <button className="btn rancho text-2xl  bg-orange-700 ">Show All</button>
            </Link>
        </div>
    );
};

export default FeatureFoods;
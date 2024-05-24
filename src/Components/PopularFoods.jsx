import { useEffect, useState } from "react";


const PopularFoods = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/allFoods`)
            .then(res => res.json())
            .then(data => {
                setFoods(data.slice(0, 4))

            })

    }, [])
    return (

        <div>
            <div className="text-center flex justify-center items-center flex-col my-20 ">
                <h1 className="text-7xl rancho ">Our Popular Foods</h1>
                <p className="lg:w-1/2 text-center rancho text-xl">Discover our enticing selection of feature foods, carefully curated to tantalize your taste buds with exquisite flavors and culinary delights.</p>
            </div>

            <div className=" poppins  my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10  ">
                {
                    foods.map(food => (
                        <div key={food._id}
                            className="card w-80 bg-base-100 shadow-2xl  border pt-10 hover:bg-yellow-500 transition">
                            <figure><img className="size-60 rounded-full" src={food.food_image} alt="Shoes" /></figure>
                            <div className="card-body flex justify-center items-center flex-col *:text-orange-700 *:poppins *:hover:text-white">
                                <h2 className="card-title  border-b-2 text-center hover:border-white">{food.food_name}</h2>
                             
                                <p>{food.food_quantity} Products</p>
                                
                            </div>
                        </div>

                    ))
                }
            </div>

        </div>
    );
};

export default PopularFoods;
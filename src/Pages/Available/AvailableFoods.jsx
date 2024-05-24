import { FiSearch } from "react-icons/fi";
import { useLoaderData } from "react-router-dom";
import FoodItem from "./FoodItem";
import { useState, useEffect } from "react";

const AvailableFoods = () => {
    const [layOut, setLayOut] = useState(false);
    const foods = useLoaderData();
    const [searchFood, setSearchFood] = useState('');
    const [sort, setSort] = useState('');
    const [foodsToDisplay, setFoodsToDisplay] = useState(foods);

    useEffect(() => {
        let filteredFoods = foods.filter(food => 
            food.food_name.toLowerCase().includes(searchFood.toLowerCase())
        );

        if (sort === 'asc') {
            filteredFoods = filteredFoods.sort((a, b) => new Date(a.expired_datetime) - new Date(b.expired_datetime));
        } else if (sort === 'dsc') {
            filteredFoods = filteredFoods.sort((a, b) => new Date(b.expired_datetime) - new Date(a.expired_datetime));
        }

        setFoodsToDisplay(filteredFoods);
    }, [searchFood, sort, foods]);

    const handleSearchFood = (e) => {
        setSearchFood(e.target.value);
    };

    return (
        <div>
            <div className="flex justify-center items-center flex-col rancho mt-32 mb-20">
                <h1 className="text-7xl">Available food</h1>
                <p className="text-xl text-center lg:w-1/2">
                    Discover a diverse selection of delicious and fresh foods ready for pickup. Explore our range of available meals, snacks, and ingredients today!
                </p>
            </div>
            <div className="flex justify-center items-center gap-6 poppins">
                <button onClick={() => setLayOut(!layOut)} className="btn hover:bg-orange-700 focus:bg-orange-700">Change LayOut</button>

                <label className="input input-bordered flex lg:w-1/2 items-center gap-2">
                    <input onChange={handleSearchFood} type="text" className="grow" value={searchFood} placeholder="Search by food name" />
                    <FiSearch />
                </label>

                <div>
                    <select
                        onChange={e => setSort(e.target.value)}
                        value={sort}
                        name='sort'
                        id='sort'
                        className='border p-4 rounded-md  hover:bg-orange-700 focus:bg-orange-700'
                    >
                        <option value=''>Sort By expired_datetime </option>
                        <option value='asc'>Ascending expired_datetime</option>
                        <option value='dsc'>Descending expired_datetime</option>
                    </select>
                </div>
            </div>

            <div className={`my-20 containermx-auto grid ${layOut ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} md:grid-cols-2 grid-cols-1 gap-10`}>
                {foodsToDisplay.map(food => <FoodItem key={food._id} food={food} />)}
            </div>
        </div>
    );
};

export default AvailableFoods;






















// import { FiSearch } from "react-icons/fi";
// import { useLoaderData } from "react-router-dom";
// import FoodItem from "./FoodItem";
// import { useState } from "react";

// const AvailableFoods = () => {
//     const [layOut, setLaout] = useState(false)
//     const foods = useLoaderData();
//     const [searchFood, setSearchFood] = useState('');
//     const [sort, setSort] = useState([]);
//     const [foodsToDisplay, setFoodsToDisplay] = useState(foods)


//     const handleSearchFood = (e) => {
//         setSearchFood(e.target.value);
//         const searchValue = e.target.value;
//         console.log(searchValue)
//         const filteredFoods = foods.filter(food => food.food_name.toLowerCase().includes(searchValue.toLowerCase()));
//         // console.log(filteredFoods)
//         setFoodsToDisplay(filteredFoods)

//     }


//     const currentDate = new Date().toLocaleDateString()
//     console.log(currentDate)



//     // const handleSortByExpireDate = () => {
//     //     const sorted = foods.sort((a, b) => (a.expired_datetime) - new Date(b.expired_datetime));
//     //     setSortedFood(sorted);
//     // }




//     return (
//         <div>
//             <div className="flex justify-center items-center flex-col rancho mt-32 mb-20">
//                 <h1 className="text-7xl">Available food</h1>
//                 <p className="text-xl text-center lg:w-1/2">Discover a diverse selection of delicious and fresh foods ready for pickup. Explore our range of available meals, snacks, and ingredients today!</p>
//             </div>
//             <div className="flex justify-center items-center gap-6 poppins">
//                 <button onClick={() => setLaout(!layOut)} className="btn hover:bg-orange-700 focus:bg-orange-700">Change LayOut</button>

//                 <label className="input input-bordered flex lg:w-1/2 items-center gap-2">
//                     <input onChange={handleSearchFood} type="text" className="grow" value={searchFood} placeholder="Search by food name" />
//                     <FiSearch />
//                 </label>



//                 <div>
//                     <select
//                         onChange={e => {
//                             setSort(e.target.value)
//                             setCurrentPage(1)
//                         }}
//                         value={sort}
//                         name='sort'
//                         id='sort'
//                         className='border p-4 rounded-md'
//                     >
//                         <option value=''>Sort By Deadline</option>
//                         <option value='dsc'>Descending Order</option>
//                         <option value='asc'>Ascending Order</option>
//                     </select>
//                 </div>
//                 {/* <details className="dropdown">
//                     <summary className="m-1 btn  hover:bg-orange-700 focus:bg-orange-700">Date</summary>
//                     <ul  onClick={handleSortByExpireDate} className="p-2  hover:bg-orange-700 focus:bg-orange-700ev
//                      shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
//                         <li ><a>expired_datetime</a></li>
//                     </ul>
//                 </details> */}
//             </div>

//             <div className={`my-20 containermx-auto grid ${layOut ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} md:grid-cols-2 grid-cols-1 gap-10  `}>
//                 {foodsToDisplay.map(food => <FoodItem key={food._id} food={food} />)}
//             </div>

//         </div>
//     );
// };

// export default AvailableFoods;

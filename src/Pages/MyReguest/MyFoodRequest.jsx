import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyFoodRequest = () => {
    const { currentUser } = useContext(AuthContext);

    const { data: allFoods, isLoading, error, refetch } = useQuery({
        queryKey: ['myFoodRequest', currentUser?.email],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/myRequestFoods/${currentUser?.email}`, { withCredentials: true });
            return data;
        },
        enabled: !!currentUser?.email, // Ensure the query does not run until the email is available
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data</div>;
    }

    return (
        <div className="overflow-x-auto mx-10 mt-32 mb-20">
            <h1 className="text-center text-5xl rancho">
                My Food Request
            </h1>

            <table className="table bg-slate-100 my-20 text-center ">
                <thead>
                    <tr className="bg-orange-500 border poppins text-2xl font-bold">
                        <th>Donator Name</th>
                        <th>Pickup Location</th>
                        <th>Expire Date</th>
                        <th>Request Date</th>
                    </tr>
                </thead>
                <tbody className="bg-slate-500 border poppins text-lg font-bold">
                    { allFoods?.map(food => (
                        <tr key={food._id}>
                            <td>
                                <div className="font-bold">{food.donator?.name}</div>
                            </td>
                            <td>{food.pickup_location}</td>
                            <td>{food.expired_datetime}</td>
                            <td>{food.current_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyFoodRequest;








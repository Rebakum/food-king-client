import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const ManageMyFood = () => {
    const { currentUser } = useContext(AuthContext);
    const queryClient = useQueryClient();

    // Fetching the food data
    const { data: allFoods, isLoading, error } = useQuery({
        queryKey: ['allFoods', currentUser?.email],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allfoods/${currentUser?.email}`, { withCredentials: true });
            return data;
        },
        enabled: !!currentUser?.email,
    });

    // Mutation for deleting a food item
    const deleteFoodMutation = useMutation({
        mutationFn: async (id) => {
            await axios.delete(`${import.meta.env.VITE_API_URL}/allfood/${id}`);
        },
        onSuccess: () => {
            toast.success('Deleted Successfully');
            queryClient.invalidateQueries(['allFoods', currentUser?.email]);
        },
        onError: (error) => {
            console.error(error.message);
            toast.error('Failed to delete food item');
        }
    });

    const handleDelete = (id) => {
        deleteFoodMutation.mutate(id);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data</div>;
    }

    return (
        <div className="overflow-x-auto mx-10 mt-32 mb-20">
            <h1 className="text-center text-5xl rancho">Manage My Food</h1>
            <table className="table bg-slate-100 my-20 text-center">
                {/* head */}
                <thead>
                    <tr className="bg-orange-500 border text-black poppins text-2xl font-bold">
                        <th>Food Image</th>
                        <th>Food Name</th>
                        <th>Expire Date</th>
                        <th>Pickup Location</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="bg-slate-500 border poppins text-lg font-bold">
                    {allFoods.map((food) => (
                        <tr key={food._id}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={food.food_image} alt={food.food_name} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-black">Donator name: {food.donator?.name}</div>
                                        <div className="text-sm opacity-50 text-black">Donator email: {food.donator?.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-black">
                                Food name: {food.food_name}
                                <br />
                                <span className="text-black">Quantity: {food.quantity}</span>
                            </td>
                            <td className="text-black">Expired Date: {food.expired_datetime}</td>
                            <td className="text-black">Pickup Location: {food.pickup_location}</td>
                            <td>
                                <Link to={`/update/${food._id}`}>
                                    <button className="btn btn-ghost btn-xs text-black text-lg"><FiEdit /></button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(food._id)} className="btn btn-ghost text-2xl btn-xs"><MdDeleteForever /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageMyFood;


















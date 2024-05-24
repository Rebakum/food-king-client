// VITE_API_URL='https://food-king-sarver.vercel.app'







import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/firebaseConfig";
import axios from "axios";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    console.log(currentUser)


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .catch(error => {
                setError(error.message);
                setLoading(false);
                throw error;
            });
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .catch(error => {
                setError(error.message);
                setLoading(false);
                throw error;
            });
    };

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.message);
                setLoading(false);
                throw error;
            });
    };

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
            .catch(error => {
                setError(error.message);
                throw error;
            });
    };

    const logOut = () => {
        setLoading(true);
        setCurrentUser(null);
        return signOut(auth)
            .catch(error => {
                setError(error.message);
                setLoading(false);
                throw error;
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setCurrentUser(user);
                setLoading(false);
            }


        });

        // return () => unsubscribe();
    }, []);


    // verify userr token
    useEffect(()=>{
        if (currentUser) {
            const loggedUser = { email: currentUser.email };
            console.log(loggedUser)
            axios.post('http://localhost:7000/jwt', loggedUser,{withCredentials:true} )
                .then(res => {
                    console.log('token ', res.data)
                })
        }
    },[currentUser])

    const allValue = {
        currentUser,
        createUser,
        setCurrentUser,
        signInUser,
        googleLogin,
        updateUserProfile,
        logOut,
        loading,
        error
    };

    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


// const {data, isLoading, refetch}=  useQuery({
   
//             queryKey:[' My food request'],
//             queryFn: async () => {
//                 const { data } = await axios.get(import.meta.env.VITE_API_URL + `/myRequestFoods/${currentUser?.email}`, {withCredentials: true})
//                 return data}
//         })
//         console.log(data)



// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import { MdDeleteForever } from "react-icons/md";
// import { FiEdit } from "react-icons/fi";


// const ManageMyFood = () => {
//     const { currentUser } = useContext(AuthContext);
//     const [allFoods, setAllFoods] = useState([]);

//     useEffect(() => {
//         if(!currentUser){
//             return
//         }
//         const myManageData = async () => {
//             try {
//                 const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allfoods/${currentUser?.email}`, {withCredentials: true});
//                 setAllFoods(data);
//             } catch (error) {
//                 console.error(error.message);
//                 toast.error("Failed to fetch food data");
//             }
//         };
//         myManageData();
//     }, [currentUser]);

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`${import.meta.env.VITE_API_URL}/allfood/${id}` );
//             setAllFoods(allFoods.filter((food) => food._id !== id));
//             toast.success('Deleted Successfully');
//         } catch (error) {
//             console.error(error.message);
//             toast.error(error.message);
//         }
//     };

//     return (
//         <div className="overflow-x-auto mx-10 mt-32 mb-20">
//             <h1 className="text-center text-5xl rancho">Manage My Food</h1>
//             <table className="table bg-slate-100 my-20 text-center ">
//                 {/* head */}
//                 <thead>
//                 <tr className=" bg-orange-500 border text-black poppins text-2xl font-bold">
//                         <th>Food Image</th>
//                         <th>Food Name</th>
//                         <th>Expire Date</th>
//                         <th>Pickup Location</th>
//                         <th>Update</th>
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody className="bg-slate-500 border poppins text-lg font-bold">
//                     {allFoods.map((food) => (
//                         <tr key={food._id}>
//                             <td>
//                                 <div className="flex items-center gap-3">
//                                     <div className="avatar">
//                                         <div className="mask mask-squircle w-12 h-12">
//                                             <img src={food.food_image}  />
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <div className="font-bold  text-black">Donator name: {food.donator?.name}</div>
//                                         <div className="text-sm opacity-50  text-black">Donator email: {food.donator?.email}</div>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className=" text-black">
//                                 Food name: {food.food_name}
//                                 <br />
//                                 <span className=" text-black">Quantity: {food.quantity}</span>
//                             </td>
//                             <td className=" text-black">Expired Date: {food.expired_datetime}</td>
//                             <td className=" text-black">Pickup Location: {food.pickup_location}</td>
//                             <td>
//                                 <Link  to={`/update/${food._id}`}>
//                                 <button className="btn btn-ghost btn-xs text-black text-lg"><FiEdit></FiEdit> </button>

//                                 </Link>

                               
//                             </td>
//                             <td>
//                                 <button onClick={() => handleDelete(food._id)} className="btn btn-ghost text-2xl btn-xs"><MdDeleteForever></MdDeleteForever></button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ManageMyFood;



//------------------------------------------------

// const MyFoodRequest = () => {
//     const { currentUser } = useContext(AuthContext);
//     //   console.log(currentUser?.email)
//     const [allFoods, setallFoods] = useState([])


//   useEffect(() => {
//         if(!currentUser){
//             return
//         }
//         const myRequestData = async () => {
//             const { data } = await axios.get(import.meta.env.VITE_API_URL + `/myRequestFoods/${currentUser?.email}`, {withCredentials: true})
//             setallFoods(data)
//             console.log(data)
//         }
//         myRequestData()

//     }, [currentUser])

//     console.log(allFoods)


//     return (

//         <div className="overflow-x-auto mx-10 mt-32 mb-20">

//             <h1 className="text-center text-5xl rancho">
//                 My Food Request 
//             </h1>

//             <table className="table bg-slate-100 my-20 text-center ">
               
//                 <thead>
//                     <tr className=" bg-orange-500 border poppins text-2xl font-bold">
//                         <th>Donator Name</th>
//                         <th>Pickup Location</th>
//                         <th> Expire Date</th>
//                         <th> Request Date</th>

//                     </tr>
//                 </thead>
//                 <tbody className=" bg-orange-500 border poppins text-2xl font-bold">
//                     {
//                        allFoods.map(food => (

//                             <tr key={food._id}>
//                                 <td>
//                                     <div className="font-bold">{food.donator?.name}</div>
//                                 </td>

//                                 <td>{food.pickup_location} </td>
//                                 <td> {food.expired_datetime}</td>
//                                 <td> { food.current_date}</td>

//                             </tr>

//                         ))
//                     }
//                 </tbody>

//             </table>
//         </div>

//     );

// };

// export default MyFoodRequest;
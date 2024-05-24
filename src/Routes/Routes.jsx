import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login"
import Register from "../Pages/Login/Register/Register"
import AvailableFoods from "../Pages/Available/AvailableFoods";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFood from "../Pages/ManageMyFood/ManageMyFood";
import MyFoodRequest from "../Pages/MyReguest/MyFoodRequest";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import NotFound from "../Pages/NotFound/NotFound";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import FoodUpdate from "../Pages/foodUpdate/FoodUpdate";
import MushroomsFood from "../Components/MushroomsFood";
import PopularFoods from "../Components/PopularFoods";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },

      {
        path: '/availableFoods',
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/allFoods`)
      },
      {
        path: '/allFood/:id',
        element: <ProtectedRoute>
      <FoodDetails></FoodDetails>
      </ProtectedRoute>,       
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/allFood/${params.id}`)

      },
      {
        path: '/addFood',
        element: <ProtectedRoute>
          <AddFood></AddFood>
        </ProtectedRoute>
      },
      {
        path: '/update/:id',
        element: <FoodUpdate></FoodUpdate>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/allFood/${params.id}`)
      },
      {
        path: '/manageMyFood',
        element: <ProtectedRoute>
          <ManageMyFood></ManageMyFood>
        </ProtectedRoute>

      },
      {
        path: '/myFoodRequest',
        element: <ProtectedRoute>
          <MyFoodRequest></MyFoodRequest>
        </ProtectedRoute>

      },
      {
        path:'/mashRoomsFood',
        element: <MushroomsFood></MushroomsFood>

      },
      {
        path: '/popularFoods',
        element:<PopularFoods></PopularFoods>,
     
      }
    ]
  },
]);
export default router;
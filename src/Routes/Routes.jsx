import {
    createBrowserRouter
   
  } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home";
import EstateDetails from "../Pages/EstateDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Error from "../Pages/Error";
import Contact from "../Pages/Contact";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/Estates.json')
        },
        {
          path:'/estates/:id',
          element:<PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/contact',
          element:<PrivateRoutes><Contact></Contact></PrivateRoutes>
        }
      ]
    },
  ]);

  export default router
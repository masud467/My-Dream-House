import {
    createBrowserRouter
   
  } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home";
import EstateDetails from "../Pages/EstateDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/Estates.json')
        },
        {
          path:'/estates/:id',
          element:<EstateDetails></EstateDetails>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);

  export default router
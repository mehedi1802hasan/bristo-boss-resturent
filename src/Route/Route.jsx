import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/LoginRegist/Login";
import Registration from "../pages/LoginRegist/Registration";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import MyCard from "../pages/Deshboard/MyCard/MyCard";
import AllUsers from "../pages/Deshboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../pages/Deshboard/AddItem/AddItem";
import MangeItem from "../pages/Deshboard/ManageItem/MangeItem";
import Payment from "../pages/Deshboard/Payment/Payment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
          path:'menu',
          element: <Menu></Menu>
        },{
          path:'order/:category',
          element:<Order></Order>
        }
      ]
    },{
      path:'login',
      element:<Login></Login>
    },{
      path:'registration',
      element:<Registration></Registration>
    },{
      path:"dashboard",
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
           {
            path:'mycard',
            element:<MyCard></MyCard>
           },{
            path:'payment',
            element:<Payment></Payment>
           }
           ,{
            path:'allusers',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
           },{
            path:'additem',
            element:<AdminRoute><AddItem></AddItem></AdminRoute>
           },{
            path:'manageitem',
            element:<AdminRoute><MangeItem></MangeItem></AdminRoute>
           }
      ]
    }
  ]);
  export default router;
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
      element:<DashBoard></DashBoard>,
      children:[
           {
            path:'mycard',
            element:<MyCard></MyCard>
           }
      ]
    }
  ]);
  export default router;
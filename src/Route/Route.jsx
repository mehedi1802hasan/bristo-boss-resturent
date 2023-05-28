import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/LoginRegist/Login";
import Registration from "../pages/LoginRegist/Registration";
import PrivateRoute from "./PrivateRoute";

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
    }
  ]);
  export default router;
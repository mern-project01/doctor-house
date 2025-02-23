import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import About from "../About/About";
import Appointment from "../Appointment/Appointment";
import Login from "../Login/Login";
import SingUp from "../SingUp/SingUp";
import Dassboard from "../Dassboard/Dassboard";
import PrivetRout from "../../components/PrivetRout/PrivetRout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/Login",
        element:<Login></Login>
      },
      {
        path: "/singup",
        element:<SingUp></SingUp>
      },
      {
        path: '/dasboard',
        element: <PrivetRout>
          <Dassboard></Dassboard>
        </PrivetRout>
      }
    ],
  },
]);
export default router;
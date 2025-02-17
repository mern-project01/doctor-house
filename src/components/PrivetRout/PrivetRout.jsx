import React, { useContext } from "react";
import { AuthContex } from "../AuthContext/UserContex";
import Dassboard from "../../pages/Dassboard/Dassboard";
import Login from "../../pages/Login/Login";
import { Navigate } from "react-router-dom";

const PrivetRout = ({ children }) => {
  const { User } = useContext(AuthContex);
//   if (User) {
//     return children;
//   }else {
//       return <Login></Login>
//     }
    //    return <Navigate to='/profile'></Navigate>
      return User ? children : <Navigate to="/login" replace />;

};

export default PrivetRout;

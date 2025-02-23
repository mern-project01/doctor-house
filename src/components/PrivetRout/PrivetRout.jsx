import React, { useContext } from "react";
import { AuthContex } from "../AuthContext/UserContex";
import { Navigate } from "react-router-dom";

const PrivetRout = ({ children }) => {
  const { User } = useContext(AuthContex);
      return User ? children : <Navigate to="/login" replace />;

};

export default PrivetRout;

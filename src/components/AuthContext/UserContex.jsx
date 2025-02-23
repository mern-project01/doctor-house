import React, { createContext} from "react";
export const AuthContex = createContext({});
const UserContex = ({ children }) => {
  const name = { name: 'st' }
  const UserInfo = { name }
  
 
  return <AuthContex.Provider value={UserInfo}>{children}</AuthContex.Provider>;
};

export default UserContex;

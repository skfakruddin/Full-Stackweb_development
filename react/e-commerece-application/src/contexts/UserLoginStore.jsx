import { userLoginContext } from "./userLoginContext";
import { useState } from "react";

function UserLoginStore({ children }) {
  let [currentUser, setCurrentUser] = useState();
  let [userLoginStatus, setUserLoginStatus] = useState(false);

  const loginUser = async (userCred) => {
    try {
      let res = await fetch(
        `http://localhost:4000/users?username=${userCred.username}&password=${userCred.password}`
      );
      let usersList = await res.json();
      if (usersList.length === 0) {
        // Invalid credentials
        setCurrentUser();
        setUserLoginStatus(false);
      } else {
        setCurrentUser(usersList[0]);
        setUserLoginStatus(true);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const logoutUser = () => {
    setCurrentUser({});
    setUserLoginStatus(false);
  };

  return (
    <userLoginContext.Provider value={{ loginUser, logoutUser, userLoginStatus }}>
      {children}
    </userLoginContext.Provider>
  );
}

export default UserLoginStore;

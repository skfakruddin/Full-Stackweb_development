import { userLoginContext } from "./userLoginContext";
import { useState } from "react";

function UserLoginStore({ children }) {
  let [currentUser, setCurrentUser] = useState();
  let [userLoginStatus, setUserLoginStatus] = useState(false);
  let [err,setErr]=useState('');

  async function loginUser(userCred){
    try {
      let res = await fetch(
        `http://localhost:3000/users?username=${userCred.username}&password=${userCred.password}`
      );
      let usersList = await res.json();
      console.log("userlist",usersList);
      if (usersList.length === 0) {
        // Invalid credentials
        console.log("invalid user");
        setCurrentUser(null);
        setUserLoginStatus(false);
        setErr('Invalid Username or Password')

      } else {
        setCurrentUser(usersList[0]);
        setUserLoginStatus(true);
        setErr('')

      }
    } catch (error) {
      setErr(error.message);
    }
  };

  const logoutUser = () => {
    setCurrentUser({});
    setUserLoginStatus(false);
    setErr('')


  };

  return (
    <userLoginContext.Provider value={{ loginUser, logoutUser, userLoginStatus,err,currentUser }}>
      {children}
    </userLoginContext.Provider>
  );
}

export default UserLoginStore;

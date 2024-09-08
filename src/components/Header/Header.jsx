import React, { useEffect } from "react";
import "./Header.css";
import { auth } from "../../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
const Header = () => {

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate()
  useEffect(() => {
    if(user) {
      navigate("/dashboard")
    } 

  }, [user,loading])
  

  const logoutFnc = () => {
    try {
      signOut(auth).then(() => {
        // Sign-out successful.
        toast.success("Logged Out Successfully!")
        navigate("/")
      }).catch((error) => {
        // An error happened.
        toast.error(error.message)
      });
    } catch (e) {
       toast.error(e.message)
    }
  };

  return (
    <div className="navbar">
      <p className="logo">Financely.</p>
      {user && <p onClick={logoutFnc} className="logo link">
        Logout
      </p> }
      
    </div>
  );
};

export default Header;

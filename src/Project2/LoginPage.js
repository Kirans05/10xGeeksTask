import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project2.css"


const LoginPage = () => {

    const navigate = useNavigate()
    const [userValue, setUserValue] = useState("")

    const LoginHandler = () => {
      if(userValue == ""){
        alert("Enter UserName")
        return
      }

        if(localStorage.getItem("userName") == null){
            localStorage.setItem("userName", userValue)
        }else{
            localStorage.setItem("userName", userValue)
        }
        navigate("/HomePage")
    }

  return (
    <div className="loginPage">
      <h1>Login Page</h1>
      <input type={"text"} placeholder={"Enter User Name"} value={userValue} onChange={(e) => setUserValue(e.target.value)}/>
      <button onClick={() => LoginHandler()} className="button loginPage--button-green">Login</button>
    </div>
  );
};

export default LoginPage;

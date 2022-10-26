import React, { useState } from 'react'
import {Box, Button, Input, TextField, Typography} from "@mui/material"
import "./Project3.css"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState("")

    const changeHandler = (e) => {
        setUserData(e.target.value)
    }


    const loginHandler = () => {
        if(userData == ""){
            alert("Please Enter User Name")
            return
        }
        localStorage.setItem("userName", userData)
        navigate("/HomePage")
    }

  return (
    <Box className='loginPage'>
        <Typography className='loginPageText'>LoginPage</Typography>
        <TextField id="outlined-basic" label="UserName" variant="outlined" 
        value={userData}
        onChange={changeHandler}
        />
        <Button variant="contained" 
        onClick={loginHandler}
        >Login</Button>
        <Button variant="contained" 
        onClick={() => navigate("/covidPage")}
        >CovidPage</Button>
    </Box>
)
}

export default LoginPage
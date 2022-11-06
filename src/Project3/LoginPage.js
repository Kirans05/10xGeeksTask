import React, { useState } from 'react'
import {Box, Button, Input, TextField, Typography} from "@mui/material"
import "./Project3.css"
import { useNavigate } from "react-router-dom"
import * as d3 from "d3";

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


    const hideFunction = () => {
        d3.select("#tooltip")
    .style("opacity", 0)
    }

    hideFunction()

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
import React, { useState } from 'react'
import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography} from "@mui/material"
import {addData, removeData, editData, resetState} from "./Redux/Action/Action"
import {nanoid} from "nanoid"
import {useSelector, useDispatch} from "react-redux"
import userReducer from "./Redux/Reducer/Reducer"
import TableData from './TableData'
import "./Project3.css"
import { useNavigate } from "react-router-dom"


const HomePage = () => {


  const navigate = useNavigate() 
  const myState = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  const id = nanoid() 
  const [editUserData, setEditUserData] = useState(false)
  const [editDataIndex, setEditDataIndex] = useState("")
  const [data, setData] = useState({
    name:"",
    age:"",
    city:""
  })

  const changeHandler = (e) => {
    setData({...data, [e.target.name]:e.target.value})
  }

  const addHandler = () => {
    if(data.name == "" || data.age == "" || data.city == ""){
      alert("Please Fill All The Feilds")
      return
    }

    if(editUserData){
      dispatch(editData(data, editDataIndex))
      setData({
        name:"",
        age:"",
        city:""
      })
      setEditUserData(false)
      setEditDataIndex("")
      return
    }

    let obj = {...data,id}
    dispatch(addData(obj))
    setData({
      name:"",
      age:"",
      city:""
    })
  }

  const editHandler = (list, index) => {
    setData(list)
    setEditUserData(true)
    setEditDataIndex(index)
  }

  const logOutHandler = () => {
    navigate("/")
    dispatch(resetState())
  }

  return (
    <TableContainer component={Paper}>
    <Box className='homePage'>
      <Box className='header'>
        <Typography component={"h1"}>{localStorage.getItem("userName")}</Typography>
        <Button variant="contained" onClick={logOutHandler}>LogOut</Button>
      </Box>
      <Box className='inputFeilds'>
      <TextField id="outlined-basic" label="Name" variant="outlined" 
        value={data.name}
        onChange={changeHandler}
        name="name"
        type={"text"}
        />
        <TextField id="outlined-basic" label="Age" variant="outlined" 
        value={data.age}
        onChange={changeHandler}
        name="age"
        type={"number"}
        />
        <TextField id="outlined-basic" label="City" variant="outlined" 
        value={data.city}
        onChange={changeHandler}
        name="city"
        type={"text"}
        />
        <Button variant="contained" onClick={addHandler}>Add</Button>
      </Box>
      <Box className='table'>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Name</TableCell>
            <TableCell align='center'>Age</TableCell>
            <TableCell align='center'>City</TableCell>
            <TableCell align='center' colSpan={2} >Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              myState.map((item,index) => {
                return <TableData key={index} item={item} editHandler={editHandler} index={index}/>
              })
            }
        </TableBody>
      </Table>
      </Box>
    </Box>
    </TableContainer>
  )
}

export default HomePage
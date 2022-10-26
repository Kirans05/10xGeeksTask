import React, { useEffect, useState } from 'react'
import {nanoid} from "nanoid"
import TableData from './TableData'
import { useNavigate } from 'react-router-dom'
import "./Project2.css"


const HomePage = () => {

    const navigate = useNavigate()
    const id = nanoid()
    const [userData, setUserData] = useState({
        name:"",
        age:"",
        city:""
    })

    const [render, setRender] = useState(false)
    const [editValues, setEditValues] = useState(false)

    const changeHandler = (e) => {
        setUserData({...userData, [e.target.name] : e.target.value})
    }

    const AddItems = () => {
        if(userData.age == "" || userData.name == "" || userData.city == ""){
            alert("Please Fill All The Feilds")
            return
        }

        if(editValues){
            let alterElements = JSON.parse(localStorage.getItem(`${localStorage.getItem("userName")}-userTodo`)).map((item) => {
                if(item.id == userData.id){
                    return userData
                }
                return item
            })

            localStorage.setItem(`${localStorage.getItem("userName")}-userTodo`, JSON.stringify(alterElements))
            setEditValues(false)
        }else{
        if(localStorage.getItem(`${localStorage.getItem("userName")}-userTodo`) != null){
            let userDataArray = JSON.parse(localStorage.getItem(`${localStorage.getItem("userName")}-userTodo`))
            userDataArray.push({...userData, id})
            localStorage.setItem(`${localStorage.getItem("userName")}-userTodo`, JSON.stringify(userDataArray))
        }else{
            let userDataArray = []
            userDataArray.push({...userData, id})
            localStorage.setItem(`${localStorage.getItem("userName")}-userTodo`, JSON.stringify(userDataArray))
        }
    }
    setUserData({
        name:"",
        age:"",
        city:""
    })
    setRender(!render)
    }

    const reRenderComponent = () => {
        setRender(!render)
    }

    const EditHandler = (item) => {
        setUserData(item)
        setEditValues(true)
    }

    useEffect(() => {

    },[render])

  return (
    <div className='HomePage'>
        <div className='Header'>
            <h1>HomePage</h1>
            <button onClick={() => navigate("/")}>Logout</button>
        </div>
       <div className='inputBox'>
            <input type={"text"} placeholder="Enter Name" name='name' value={userData.name} onChange={changeHandler}/>
             <input type={"number"} placeholder="Enter Your Age" name='age' value={userData.age} onChange={changeHandler}/>
             <input type={"text"} placeholder="Enter Your City" name='city' value={userData.city} onChange={changeHandler}/>
             <button onClick={AddItems}>Add</button>
       </div>
       <div className='table'>
        <table>
            <thead>
               <tr>
               <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th colSpan={2}>Actions</th>
               </tr>
            </thead>
            <tbody>
                {
                    localStorage.getItem(`${localStorage.getItem("userName")}-userTodo`) == null || localStorage.getItem(`${localStorage.getItem("userName")}-userTodo`) == [] ? 
                    <tr>
                        <td colSpan={4}>No Items</td>
                    </tr>
                    : JSON.parse(localStorage.getItem(`${localStorage.getItem("userName")}-userTodo`)).map((item, index) => {
                        return <TableData item={item} key={index} reRenderComponent={reRenderComponent} EditHandler={EditHandler} index={index}/>
                    })
                }
            </tbody>
        </table>
       </div>
    </div>
  )
}

export default HomePage
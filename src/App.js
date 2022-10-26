import React, { useEffect, useState } from 'react'
import Compo1 from './Compo1'
import Compo2 from './Compo2'
import "./App.css"
import {Routes, Route, useNavigate} from "react-router-dom"
import HomePage from './Project3/HomePage'
import LoginPage from './Project3/LoginPage'
import CovidPage from './Project4/CovidPage'
import HealthRegionList from "./Project5/components/HealthRegionList"
import axios from 'axios'
// import States from "./Project5/States.json"


const App = () => {

  const [covidData, setCovidData] = useState({})

  // const navigate = useNavigate()
  // const [inputFeilds, setInputFeilds] = useState([])

  // const valueFromCompo1 = (obj) => {
  //   setInputFeilds(obj)
  // }


  // Project 1
  // return (
  //   <div style={{width:"100%", border:"2px solid black"}}>
  //     <h1 style={{margin:"0px", padding:"10px", borderBottom:"2px solid black"}}>App</h1>

  //     {/* Project 1 */}
  //     {/* <div className='componentStyles'>
  //     <Compo1 valueFromCompo1={valueFromCompo1}/>
  //     <Compo2 inputFeilds={inputFeilds}/>
  //     </div> */}


  //     {/* Project 2 */}
      
  //   </div>
  // )


  // Project 2
  // return (
  //   <div>
  //     <Routes>
  //       <Route path='/' element={<LoginPage />}/>
  //       <Route path='/HomePage' element={<HomePage />}/>
  //     </Routes>
  //   </div>
  // )


  // Project 3

  // const fetchData = async () => {
  //   let data =  await fetch("./Project5/States.json")
  //   // console.log(data.json())
  //   console.log(data)
  // }

  // useEffect( () => {
  //   // fetchData()
  // },[])


  const fetchCovidApi = async () => {
    let options = {
      url:"https://data.covid19india.org/v4/min/data.min.json",
      method:"GET",
      headers:{
        "content-type":"application/json"
      }
    }

    let response = await axios(options)
    setCovidData(response.data)
  }


  useEffect(() => {
    fetchCovidApi()
  },[])

  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/HomePage' element={<HomePage />}/>
        <Route path='/covidPage' element={<HealthRegionList  covidData={covidData}/>}/>
      </Routes>
    </div>
  )
}

export default App
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import axios from "axios"

const CovidPage = () => {

    const [stateCode, setStateCode] = useState("");
  const [stateName, setStateName] = useState("");
  const [stateData, setStateData] = useState([])
  const [confirmedCases, setConfirmedCases] = useState("")

  function onLocationClick(event) {
    let stateCode = event.target.id
    setStateCode(stateCode.toUpperCase());
    setStateName(event.target.getAttribute("name"));
  }

  const onLocationMouseOver = (e) => {
    let stateCode = e.target.id
    let state = e.target.getAttribute("name") 
    setStateCode(stateCode.toUpperCase())
    setStateName(state)
    if(stateCode.toUpperCase() in stateData){
      setConfirmedCases(stateData[stateCode.toUpperCase()].total.confirmed)
    }
  }


  const fetchStates = async () => {
    let options = {
      url:"https://data.covid19india.org/v4/min/data.min.json",
      method:"GET",
      headers:{
        "content-type":"application/json"
      }
    }

    let response = await axios(options)
    setStateData(response.data)
  }



  useEffect(() => {
    fetchStates()
  },[])

  return (
    <Box>
      <Typography variant='h5'>State - {stateName}</Typography>
      <Typography variant='h5'>ConfirmedCases - {confirmedCases}</Typography>
      <br />
      <SVGMap map={India} onLocationClick={onLocationClick} 
      onLocationMouseOver={onLocationMouseOver}
      />
    </Box>
  );
}

export default CovidPage
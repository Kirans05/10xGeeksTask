import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { mainContext } from '../../App'
import "./DetailsCompo.css"

const DetailsCompo = () => {
    const {casesCount, selectType, mapColor, countType, covidData} = useContext(mainContext)
    const date = new Date()

  return (
    <Box className='infoMainBox'>
        <Box className='dateInfo'>
            <Typography>{date.toDateString()}</Typography>
        </Box>
        <Box className='inf0Box'>
            <Box className='confirmedBox' sx={{"&:hover":{cursor:"pointer", backgroundColor:"#ffe0e6"}, backgroundColor : countType == "confirmed" ? "#ffe0e6" :"white"}}
            onClick={() => selectType("confirmed", "#ffe0e6")}
            >
                <Typography className='category' sx={{fontSize:"15px"}}>Confirmed</Typography>
              <Typography sx={{fontSize:"20px"}}>{casesCount.confirmed}</Typography>
            </Box>
            <Box className='deceasedBox'  sx={{"&:hover":{cursor:"pointer", backgroundColor:"#edeeef"}, backgroundColor : countType == "deceased" ? "#edeeef" :"white"}}
            onClick={() => selectType("deceased", "#edeeef")}
            >
                <Typography className='category' sx={{fontSize:"15px"}}>Deceased</Typography>
              <Typography sx={{fontSize:"20px"}}>{casesCount.deceased}</Typography>
            </Box>
            <Box className='testedBox'  sx={{"&:hover":{cursor:"pointer", backgroundColor:"#dfeeff"}, backgroundColor : countType == "tested" ? "#dfeeff" :"white"}}
            onClick={() => selectType("tested", "#dfeeff")}
            >
                <Typography className='category' sx={{fontSize:"15px"}}>Tested</Typography>
              <Typography sx={{fontSize:"20px"}}>{casesCount.tested}</Typography>
            </Box>
            <Box className='recoveredBox'  sx={{"&:hover":{cursor:"pointer", backgroundColor:"#e4f4e8"}, backgroundColor : countType == "recovered" ? "#e4f4e8" :"white"}}
            onClick={() => selectType("recovered", "#e4f4e8")}
            >
                <Typography className='category' sx={{fontSize:"15px"}}>Recovered</Typography>
              <Typography sx={{fontSize:"20px"}}>{casesCount.recovered}</Typography>
            </Box>
        </Box>
        {/* {
          Object.values(covidData).map((item, index) => {
            console.log(item)
              return (
                <div>
                  <h1>Covid Data</h1>
                </div>
              )
          })
        } */}
    </Box>
  )
}

export default DetailsCompo
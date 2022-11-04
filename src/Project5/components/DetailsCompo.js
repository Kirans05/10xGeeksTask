import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { mainContext } from '../../App'
import "./DetailsCompo.css"

const DetailsCompo = () => {
    const {casesCount, selectType, mapColor, countType} = useContext(mainContext)
    const date = new Date()

  return (
    <Box className='infoMainBox'>
        <Box className='dateInfo'>
            <Typography>{date.toDateString()}</Typography>
        </Box>
        <Box className='inf0Box'>
            <Box className='confirmedBox' sx={{"&:hover":{cursor:"pointer", backgroundColor:"#f5c4c1"}, backgroundColor : countType == "confirmed" ? "#f5c4c1" :"white"}}
            onClick={() => selectType("confirmed", "#f5c4c1")}
            >
                <Typography>Confirmed</Typography>
              <Typography>{casesCount.confirmed}</Typography>
            </Box>
            <Box className='deceasedBox'  sx={{"&:hover":{cursor:"pointer", backgroundColor:"#dedcdc"}, backgroundColor : countType == "deceased" ? "#dedcdc" :"white"}}
            onClick={() => selectType("deceased", "#dedcdc")}
            >
                <Typography>Deceased</Typography>
              <Typography>{casesCount.deceased}</Typography>
            </Box>
            <Box className='testedBox'  sx={{"&:hover":{cursor:"pointer", backgroundColor:"#a8bcf7"}, backgroundColor : countType == "tested" ? "#a8bcf7" :"white"}}
            onClick={() => selectType("tested", "#a8bcf7")}
            >
                <Typography>Tested</Typography>
              <Typography>{casesCount.tested}</Typography>
            </Box>
            <Box className='recoveredBox'  sx={{"&:hover":{cursor:"pointer", backgroundColor:"#b3f5b9"}, backgroundColor : countType == "recovered" ? "#b3f5b9" :"white"}}
            onClick={() => selectType("recovered", "#b3f5b9")}
            >
                <Typography>Recovered</Typography>
              <Typography>{casesCount.recovered}</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default DetailsCompo
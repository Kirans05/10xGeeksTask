import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { mainContext } from '../../App'
import "./DetailsCompo.css"

const DetailsCompo = () => {
    const {casesCount, selectType} = useContext(mainContext)
    const date = new Date()

  return (
    <Box className='infoMainBox'>
        <Box className='dateInfo'>
            <Typography>{date.toDateString()}</Typography>
        </Box>
        <Box className='inf0Box'>
            <Box className='confirmedBox' sx={{"&:hover":{cursor:"pointer", backgroundColor:"red"}}}
            onClick={() => selectType("confirmed")}
            >
                <Typography>Confirmed</Typography>
              <Typography>{casesCount.confirmed}</Typography>
            </Box>
            <Box className='deceasedBox'  sx={{"&:hover":{cursor:"pointer", backgroundColor:"grey"}}}
            onClick={() => selectType("deceased")}
            >
                <Typography>Deceased</Typography>
              <Typography>{casesCount.deceased}</Typography>
            </Box>
            <Box className='testedBox'  sx={{"&:hover":{cursor:"pointer", backgroundColor:"blue"}}}
            onClick={() => selectType("tested")}
            >
                <Typography>Tested</Typography>
              <Typography>{casesCount.tested}</Typography>
            </Box>
            <Box className='recoveredBox'  sx={{"&:hover":{cursor:"pointer", backgroundColor:"green"}}}
            onClick={() => selectType("recovered")}
            >
                <Typography>Recovered</Typography>
              <Typography>{casesCount.recovered}</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default DetailsCompo
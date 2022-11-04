import * as d3 from "d3";
import { setMapProjection } from "../helpers/setMapProjection";
import { useMapTools } from "../hooks/useMapTools";
import HealthRegion from "./HealthRegion";
import "./HealthRegionList.css";
import ReactBubbleChart from "react-d3-bubble";
import { useContext, useState } from "react";
import { Box, Typography } from "@mui/material";
import DetailsCompo from "./DetailsCompo";
import { mainContext } from "../../App";






export default function HealthRegionList() {
  // step 1: load geoJSON and create tooltip

  const {covidData, casesCount} = useContext(mainContext)
  const {mapData, countType} = useMapTools();


  // render map only when map data is fully loaded
  if (!mapData.loading) {
    // step 2: render the regions
    // compute a path function based on correct projections that we will use later
    const path = d3.geoPath().projection(setMapProjection(mapData.data));
    // for each geoJSON coordinate, compute and pass in the equivalent svg path


    const healthRegions = mapData.data.features.map((data) => {
      const coordinates = data.geometry.coordinates
      const districtName = data.properties["NAME_2"];
      const stateName = data.properties["NAME_1"]

      return (
        <>
        <HealthRegion
          key={data.properties.FID}
          path={path(data)}
          tooltipData={districtName}
          covidData={covidData}
          stateName={stateName}
          coordinatesPoints={coordinates}
          />
          </>
      );
    });


    return (
      <Box sx={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"space-between"}}>
        <Box sx={{width:"50%"}}>
          <DetailsCompo />
        </Box>
        <Box sx={{width:"50%"}} id="mapBox">
        <svg className="map-canvas" >
          <g>{healthRegions}</g>
        </svg>
        </Box>
      </Box>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}


// max value - 34285612
// min value - 7651
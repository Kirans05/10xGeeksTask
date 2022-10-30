import * as d3 from "d3";
import { setMapProjection } from "../helpers/setMapProjection";
import { useMapTools } from "../hooks/useMapTools";
import HealthRegion from "./HealthRegion";
import "./HealthRegionList.css";
import ReactBubbleChart from "react-d3-bubble";
import { useState } from "react";






export default function HealthRegionList({covidData}) {
  // step 1: load geoJSON and create tooltip
  const {mapData} = useMapTools();
  const [placeName, setPlaceName] = useState("")
  const [covidCount, setCovidCount] = useState("")

  // let valuesarr = []
  // for(let i in covidData){
  //   valuesarr.push(covidData[i].total.confirmed)
  // }
  // console.log(valuesarr)

  // render map only when map data is fully loaded
  if (!mapData.loading) {
    // step 2: render the regions
    // compute a path function based on correct projections that we will use later
    const path = d3.geoPath().projection(setMapProjection(mapData.data));
    // for each geoJSON coordinate, compute and pass in the equivalent svg path
    const healthRegions = mapData.data.features.map((data) => {
      const coordinates = data.geometry.coordinates
      // for just states not for districts
      // const region_name = data.properties["NAME_1"];

      // for districts present in india
      const districtName = data.properties["NAME_2"];
      const stateName = data.properties["NAME_1"]


      return (
        <>
        <HealthRegion
          key={data.properties.FID}
          path={path(data)}
          // tooltipData={region_name}
          tooltipData={districtName}
          // tooltipData={() => {return <p>text</p>}}
          // stateName={stateNames}
          covidData={covidData}
          stateName={stateName}
          // stateName={stateName}
          coordinatesPoints={coordinates}
          setPlaceName={setPlaceName}
          setCovidCount={setCovidCount}
          />
          {/* <svg className="">
               <g><ReactBubbleChart data={bubbleData}  /></g>
           </svg> */}
          </>
      );
    });

    return (
      <>
        <h1>India Map</h1>
        <svg className="map-canvas">
          <g>{healthRegions}</g>
        </svg>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}


// max value - 34285612
// min value - 7651
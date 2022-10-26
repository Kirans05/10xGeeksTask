import * as d3 from "d3";
import { setMapProjection } from "../helpers/setMapProjection";
import { useMapTools } from "../hooks/useMapTools";
import HealthRegion from "./HealthRegion";
import "./HealthRegionList.css";
import ReactBubbleChart from "react-d3-bubble";

const bubbleData = [
  {
    index: 0,
    name: "A",
    color: "#f48fb1",
    radius: 56
  },
  // {
  //   index: 1,
  //   name: "B",
  //   color: "#ffab91",
  //   radius: 34
  // },
  // {
  //   index: 2,
  //   name: "C",
  //   color: "#b87fe9",
  //   radius: 32
  // },
  // {
  //   index: 3,
  //   name: "D",
  //   color: "#64b5f6",
  //   radius: 32
  // },
  // {
  //   index: 4,
  //   name: "E",
  //   color: "#81c784",
  //   radius: 18
  // },
  // {
  //   index: 5,
  //   name: "F",
  //   color: "#f48fb1",
  //   radius: 19
  // },
  // {
  //   index: 6,
  //   name: "G",
  //   color: "#64b5f6",
  //   radius: 22
  // }
];




export default function HealthRegionList({covidData}) {
  // step 1: load geoJSON and create tooltip
  const {mapData} = useMapTools();

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
      const region_name = data.properties["NAME_1"];
      return (
        <>
        <HealthRegion
          key={data.properties.FID}
          path={path(data)}
          tooltipData={region_name}
          // tooltipData={() => {return <p>text</p>}}
          covidData={covidData}
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
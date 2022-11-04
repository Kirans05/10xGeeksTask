import {
  handleMouseOver,
  handleMouseOut,
  handleMouseMove,
  handleCircleMouseOver,
  mouseClick
} from "../helpers/handleTooltip";
import "./HealthRegion.css";
import ReactBubbleChart from "react-d3-bubble";
import { useContext } from "react";
import { mainContext } from "../../App";


let indiaStates = [
    ["Andhra Pradesh", "AP"],
    ["Arunachal Pradesh","AR"],
    ["Assam", "AS"],
    ["Bihar", "BR"],
    ["Chhattisgarh","CT"],
    ["Goa","GA"],
    ["Gujarat","GJ"],
    ["Haryana","HR"],
    ["Himachal Pradesh", "HP"],
    ["Jharkhand","JH"],
    ["Karnataka","KA"],
    ["Kerala","KL"],
    ["Madhya Pradesh","MP"],
    ["Maharashtra","MH"],
    ["Manipur", "MN"],
    ["Meghalaya","ML"],
    ["Mizoram","MZ"],
    ["Nagaland",, "NL"],
    ["Orissa", "OR"],
    ["Punjab","PB"],
    ["Rajasthan","RJ"],
    ["Sikkim","SK"],
    ["Tamil Nadu","TN"],
    ["Telangana","TG"],
    ["Tripura","TR"],
    ["Uttarakhand","UL"],
    ["Uttar Pradesh","UP"],
    ["West Bengal","WB"],
    ["Andaman and Nicobar","AN"],
    ["Chandigarh","CH"],
    ["Dadra and Nagar Haveli","DN"],
    ["Daman and Diu","DD"],
    ["Delhi", "DL"],
    ["Jammu and Kashmir","JK"],
    ["Ladakh","LA"],
    ["Lakshadweep","LD"],
    ["Puducherry", "PY"]
] 



export default function HealthRegion(props) {
  const { path, tooltipData, covidData, stateName, coordinatesPoints, setCovidCount, setPlaceName } = props;
  const {countType, mapColor} = useContext(mainContext)
const cordinates = path.split(",")
// let length = Math.ceil(cordinates.length/2)
// console.log("first"+`${tooltipData}`,cordinates[length])
// console.log("second",cordinates[length+1])


// console.log("x and y points")
// console.log(cordinates[0].substring(1,4))
// console.log(cordinates[1].substring(0,3))
  // // console.log(cordinates)
  // //each path defines the shape of a region in the map

  // // for state
  // let stateValue 
  // let circleColor = "red"
  // let filterStates = indiaStates.filter(item => item[0] == tooltipData)
  // let circleRadius = 2
  // if(filterStates.length){
  //   stateValue = filterStates[0][1]
  //   if(stateValue in covidData){
  //     let casesCount = covidData[stateValue].total.confirmed
  //     if(casesCount < 20000){
  //       circleRadius = 7
  //     }else if(casesCount < 100000){
  //       circleRadius = 9
  //     }else if(casesCount < 1000000){
  //       circleRadius = 11
  //     }else if (casesCount < 10000000){
  //       circleRadius = 15
  //     }else{
  //       circleRadius = 15
  //     }
  //   }
  // }else{
  //   stateValue = "KA"
  // }

  let circleColor 
  if(mapColor == "#f5c4c1"){
    circleColor = "red"
  }else if(mapColor == "#dedcdc"){
    circleColor = "grey"
  }else if(mapColor == "#a8bcf7"){
    circleColor = "blue"
  }else if(mapColor == "#b3f5b9"){
    circleColor = "green"
  }


  // for distrcits
  let circleRadius = 7
  let cases = 10000
  let stateShortFormArr =  indiaStates.filter(item => item[0] == stateName)

  if(stateShortFormArr.length){
    let stateShortForm = stateShortFormArr[0][1]
    if(stateShortForm in covidData){
      let districts = covidData[stateShortForm].districts
      if(tooltipData in districts){
         cases = districts[tooltipData].total[countType]
        if(cases == undefined){
          circleRadius = 3
          // circleRadius = 7
          // circleColor = "#f7e1dc"
        }else if(cases < 20000){
          circleRadius = 5
          // circleRadius = 10
          // circleColor = "#f7846a"
      }else if(cases < 100000){
        circleRadius = 8
        // circleRadius = 15
        // circleColor = "#f55d3b"
      }else if(cases < 1000000){
        circleRadius = 12
        // circleRadius = 20
        // circleColor = "#d14a2c"
      }else if (cases < 10000000){
        circleRadius = 15
        // circleRadius = 30
      }else{
        circleRadius = 15
      }
      }
    }
  }else{
    // console.log(1)
    return
  }

// console.log("lat",lat)
// console.log("lng",lng)

  return (
    <>
    <path
      className="path"
      d={path}
      onMouseOver={() => {
        handleMouseOver(tooltipData, stateName);
      }}
      onMouseOut={handleMouseOut}
      onMouseMove={(event) => {
        handleMouseMove(event);
      }}
      fill={"white"}
      stroke={mapColor}
      strokeWidth={"1px"}
      />
  <circle cx={cordinates[0].substring(1,4)} cy={cordinates[1].substring(0,3)} r={circleRadius}  fill={circleColor} className="circleSvg"
  onMouseOver={() => {
    handleCircleMouseOver(tooltipData, stateName, cases, mapColor)
  }}
  // onClick={() => {
  //   // setPlaceName(`${tooltipData}-${stateName}`)
  //   // setCovidCount(`${cases}`)
  //   mouseClick(tooltipData,stateName,cases)
  // }}
  />
      </>
  );
}

import {
  handleMouseOver,
  handleMouseOut,
  handleMouseMove,
} from "../helpers/handleTooltip";
import "./HealthRegion.css";
import ReactBubbleChart from "react-d3-bubble";


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
  const { path, tooltipData, covidData, stateName } = props;

  const cordinates = path.split(",")
  //each path defines the shape of a region in the map
  let stateValue 
  let filterStates = indiaStates.filter(item => item[0] == tooltipData)
  let circleRadius = 2
  if(filterStates.length){
    stateValue = filterStates[0][1]
    if(stateValue in covidData){
      let casesCount = covidData[stateValue].total.confirmed
      if(casesCount < 20000){
        circleRadius = 7
      }else if(casesCount < 100000){
        circleRadius = 9
      }else if(casesCount < 1000000){
        circleRadius = 11
      }else if (casesCount < 10000000){
        circleRadius = 15
      }else{
        circleRadius = 15
      }
    }
  }else{
    stateValue = "KA"
  }
  return (
    <>
    <path
      className="path"
      d={path}
      onMouseOver={() => {
        // handleMouseOver(tooltipData, stateName);

        // for just state not for districts
        handleMouseOver(tooltipData);
      }}
      onMouseOut={handleMouseOut}
      onMouseMove={(event) => {
        handleMouseMove(event);
      }}
      />
  <circle cx={cordinates[0].substring(1,4)} cy={cordinates[1].substring(0,3)} r={circleRadius}  fill="red" className="circleSvg"/>
      </>
  );
}

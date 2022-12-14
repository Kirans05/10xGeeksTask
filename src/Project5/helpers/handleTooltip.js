import * as d3 from "d3";

// show tooltip when hovering over a region
export const handleMouseOver = function (tooltipData, stateName) {
  // d3.select("#tooltip")
  //   .style("opacity", 1)
  //   .style("background-color", "burlywood")
  //   .text(tooltipData+" "+stateName);
    // .text(tooltipData);
};

// hide tooltip as mouse leaves region
export const handleMouseOut = function () {
  // d3.select("#tooltip").style("opacity", 0);
};

// get mouse location so tooltip tracks cursor
export const handleMouseMove = function (event) {
  // d3.select("#tooltip")
  //   .style("left", event.pageX + 10 + "px")
  //   .style("top", event.pageY + 10 + "px");
};


export const handleCircleMouseOver = (tooltipData, stateName, cases, mapColor) => {
  d3.select("#tooltip")
    .style("opacity", 1)
    .style("background-color", "white")
    .style("position","absolute")
    .style("color","black")
    .style("top","20px")
    .style("left","52%")
    .style("font-size","30px")
    .text(tooltipData+" "+" "+cases);
    // .text(tooltipData+" "+stateName+" "+cases);
}


export const mouseClick = (tooltipData,stateName,cases) => {
  d3.select("#text")
    .style("opacity", 1)
    .style("background-color", "white")
    .style("font-size","30px")
    .text(tooltipData+" "+stateName+" "+cases);
}

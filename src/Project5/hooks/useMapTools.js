// import { height, width } from "@mui/system";
import * as d3 from "d3";
import { useState, useEffect } from "react";


var markers = [
  {long: 9.083, lat: 42.149, group: "A", size: 34}, // corsica
  {long: 7.26, lat: 43.71, group: "A", size: 14}, // nice
  {long: 2.349, lat: 48.864, group: "B", size: 87}, // Paris
  {long: -1.397, lat: 43.664, group: "B", size: 41}, // Hossegor
  {long: 3.075, lat: 50.640, group: "C", size: 78}, // Lille
  {long: -3.83, lat: 58, group: "C", size: 12} // Morlaix
];

var color = d3.scaleOrdinal()
      .domain(["A", "B", "C" ])
      .range([ "#402D54", "#D18975", "#8FD175"])

    // Add a scale for bubble size
    var size = d3.scaleLinear()
      .domain([1,100])  // What's in the data
      .range([ 4, 50])  // Size in pixel


      // var svg = d3.select("svg"),
    // width = svg.attr("width"),
    // height = svg.attr("height");

    var width = 300
    var height = 300


var projection = d3.geoMercator()
    .center([2, 47])                // GPS of location to zoom on
    .scale(1020)                       // This is like the zoom
    .translate([ width/2, height/2 ])

export const useMapTools = function () {
  // store loaded map data in a state
  const [mapData, setMapData] = useState({
    data: {},
    loading: true,
  });

  // only fetch map data once and create a tooltip
  useEffect(() => {
    d3.json("https://raw.githubusercontent.com/geohacker/india/master/district/india_district.geojson")
    // d3.json("https://raw.githubusercontent.com/geohacker/india/master/state/india_state.geojson")
      .then((data) => {
        setMapData((prevState) => {
          return { ...prevState, data: data, loading: false };
        });
      })
      .catch((err) => {
        console.log("error occurred with loading map", err);
      });

    /// tooltip creation
    d3.select("body")
      .append("div")
      .attr("id", "tooltip")
      .attr("style", "position: absolute; opacity: 0");
    ///
    d3.select("body")
    .append("text")
    .attr("class", "circles")
    .attr("style", "position: absolute; opacity: 1; z-index:100");

    // d3
    // .select("body")
    // .data([{long: 95.952244, lat: 27.941956, group: "A", size: 34}])
    // .enter()
    // .append("div")
    //   .attr("cx", function(d){ return projection([d.long, d.lat])[0] })
    //   .attr("cy", function(d){ return projection([d.long, d.lat])[1] })
    //   .attr("r", function(d){ return size(d.size) })
    //   .style("fill", function(d){ return color(d.group) })
    //   .attr("stroke", function(d){ return color(d.group) })
    //   .attr("stroke-width", 3)
    //   .attr("fill-opacity", .4)


  }, []);

  return { mapData };
};

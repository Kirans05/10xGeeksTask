import React, { useRef } from 'react'
import * as d3 from 'd3'


const Map = (props) => {
   // REFs
   const svgRef = useRef();  
   // RENDER THE CHART USING D3
//    const renderChart = (nyc, path) => {
//      d3.select(svgRef.current)
//       //...additional d3 code...
//    };

   const renderChart = (data, path) => {
    d3.select(svgRef.current).selectAll('path')
      .data(data).enter().append('path')
      .attr('class', (d) => d.properties.name)
      .attr('d', path)
      .style('fill', (d) => boroughLegend(d.properties.borough))
 };

   //////////////////////////////////////////////////////
// REFs
//////////////////////////////////////////////////////
// const svgRef = useRef()
const projRef = useRef(d3.geoMercator()
   .center([-73.93, 40.72]).scale(57500));

useEffect(() => {
    const height = svgRef.current.clientHeight
    const width = svgRef.current.clientWidth
    projRef.current.translate([width  / 2, height  / 2 ]);

    const path = d3.geoPath().projection(projeRef.current)
   if (data.length) {
     renderChart(data[0], path)
   }
  }, [data])


    // RENDER THE SVG
   return(    
     <svg id="boroughs-map" ref={svgRef}></svg>
   )
}

export default Map
import * as d3 from "d3";

export const setMapProjection = function(mapData) {
  // use the geoAlbers map projection
  const projection = d3.geoAlbers();
  // adjust projection to fit area of map canvas
  projection
    .precision(0)
    .rotate([-80, 0, 0])
    .fitExtent(
      [
        [100, 100],
        [490, 480],
      ],
      // [
      //   [0, 0],
      //   [960, 480],
      // ],
      mapData
    );
  return projection;
};

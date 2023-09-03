"use client";
import { useState } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapBox = () => {
  return (
    <ReactMapGL
      mapLib={import("mapbox-gl")}
      mapStyle="mapbox://styles/maynguyen24/clm35kcim00sv01qx6lggb311"
      mapboxAccessToken="pk.eyJ1IjoibWF5bmd1eWVuMjQiLCJhIjoiY2xoNXcyYnB6MDA1NTNncXFnNXgxdTdsbyJ9.M6VAhpbrSaGNSgK87CM2rg"
      initialViewState={{
        longitude: 105.8333,
        latitude: 22.25,
        zoom: 8,
      }}
      style={{ width: "100%", height: "100%" }}
      scrollZoom={true}
    >
      <NavigationControl />
    </ReactMapGL>
  );
};

export default MapBox;

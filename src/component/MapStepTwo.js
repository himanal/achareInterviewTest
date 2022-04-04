import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  
} from "@react-google-maps/api";

import Button from "react-bootstrap/Button";

import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 35.6892,
  lng: 51.389,
};

export default function MapStepTwo({GettingCoordinate, changePage}) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAG4jkukGh_cnjdFhubK3npwJmk-v1yZgw",
    libraries,
  });
  const [markers, setMarkers] = useState([])
 

  const onMapClick = (e) => {
    setMarkers(
      
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
      
    );
    }
    const onSubmit=(e)=>{
        e.preventDefault(e);
        
        GettingCoordinate(markers)
        changePage(2)
    }
  
  

  

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div dir={"rtl"} className="MapBox">
      <h1 className="Mapheadr">موقعیت روی نقشه</h1>
      <div className='MapContin'>
      <form onSubmit={onSubmit}>
        <h3 className="MapTop"> موقعیت مورد نظر را روی نقشه انتخاب کنید</h3>
        <GoogleMap
          className="Map"
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
          options={options}
          onClick={onMapClick}
          
        >
         
          ))

       
        </GoogleMap>
        

      <Button
        type="onSubmit"
        className="btnColor btnMap"
        variant="secondary"
        size="lg"
      >
        تایید موقعیت
      </Button>
        </form>
      </div>

    </div>
  );
}

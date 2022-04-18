import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

interface ICenterProps {
    center?: {
        lat:number;
        lng:number
    }
}

const containerStyle = {
    width: '300px',
    height: '300px'
  };

  function GoogleMaps( {center}:ICenterProps ) {
    return (
      <LoadScript
        googleMapsApiKey="YOUR_API_KEY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
  
  export default React.memo(GoogleMaps)

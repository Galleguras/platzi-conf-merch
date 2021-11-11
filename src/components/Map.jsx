import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const Map = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 94.43234,
    lng: -89.123123,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBuXjtPfj3oET0H-omB7fzWdlzuez2L5-c">
      <GoogleMap mapContainerStyle={mapStyles} zoom={6} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

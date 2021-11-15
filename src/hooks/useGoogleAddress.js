import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  console.log('11111');
  const [map, setMap] = useState({});

  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=madrid&key=${process.env.REACT_APP_MAP_KEY}`;
  console.log('2222');
  console.log(address);
  useEffect(async () => {
    const response = await axios(API);
    console.log('3333');

    console.log(response);
    setMap(response.data.results[0].geometry.location);
  }, [1]);
  return map;
};
export default useGoogleAddress;

import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  console.log('11111');
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBuXjtPfj3oET0H-omB7fzWdlzuez2L5-c`;

  useEffect(async () => {
    const response = await axios(API);
    console.log('22222');

    console.log(response);
    setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
};
export default useGoogleAddress;

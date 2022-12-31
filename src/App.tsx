import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { ReactLeafletWaypoints } from 'react-leaflet-waypoints';
import { styled } from '@mui/material';
import { Map } from './components/Map';

export const App = () => {
  return (
    <div className="App">
      <Map
        waypoints={[
          { lat: '21.1619', lng: '-86.8515' },
          { lat: '18.5002', lng: '-88.2961' },
        ]}
      />
    </div>
  );
};

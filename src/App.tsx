import { useState } from 'react';
import './App.css';
import { ReactLeafletWaypoints } from 'react-leaflet-waypoints';
import { styled } from '@mui/material';
import { Map } from './components/Map';
import { CustomAppBar } from './components/AppBar';
import { ItineraryAccordion } from './components/ItineraryAccordion';

export const App = () => {
  return (
    <div className="App">
      <CustomAppBar />
      <ItineraryAccordion
        itinerary={[
          {
            title: 'place 1',
            description: 'Some desc',
          },
        ]}
      />
      <Map
        waypoints={[
          { lat: '21.1619', lng: '-86.8515' },
          { lat: '18.5002', lng: '-88.2961' },
        ]}
      />
    </div>
  );
};

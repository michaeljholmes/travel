import { useState } from 'react';
import './App.css';
import { ReactLeafletWaypoints } from 'react-leaflet-waypoints';
import { Box, Stack, styled } from '@mui/material';
import { Map } from './components/Map';
import { CustomAppBar } from './components/AppBar';
import { ItineraryAccordion } from './components/ItineraryAccordian';
import { InfoCard } from './components/InfoCard';
import { days } from './data/days';
import { rem } from "polished";

export const App = () => {
  return (
    <Box sx={{display: "flex"}}>
      <CustomAppBar />
      <Stack direction="row" justifyContent="center" sx={{pt: rem(64), flexWrap: "wrap", margin: "auto"}}>
        {days.map((day) => <InfoCard {...day} />)}
      </Stack>
      {/*<ItineraryAccordion
        itinerary={[
          {
            title: 'place 1',
            description: 'Some desc',
            startPointLat: '',
            startPointLng: '',
            endPointLat: '',
            endPointLng: '',
          },
        ]}
      />*/}
      {/*<Map
        waypoints={[
          { lat: '21.1619', lng: '-86.8515' },
          { lat: '18.5002', lng: '-88.2961' },
        ]}
      />*/}
    </Box>
  );
};

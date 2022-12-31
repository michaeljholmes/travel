import { ReactLeafletWaypoints } from 'react-leaflet-waypoints';
import { styled } from '@mui/material';

interface Waypoint {
  lat: string;
  lng: string;
}

interface MapProps {
  height?: string;
  width?: string;
  waypoints?: Waypoint[];
}

export const Map = ({ waypoints }: MapProps) => (
  <WayPointMap
    layerUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    waypoints={waypoints}
    lineOptions={{
      styles: [
        {
          color: 'red',
        },
      ],
    }}
  />
);

const WayPointMap = styled(ReactLeafletWaypoints)`
  width: 500px;
  height: 500px;
`;

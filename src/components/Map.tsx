import { ReactLeafletWaypoints } from 'react-leaflet-waypoints';
import { styled } from '@mui/material';
import { rem } from 'polished';
import { LatLng } from '../types';

interface MapHeight {
  height?: string;
  width?: string;
}

interface MapProps extends MapHeight{
  waypoints?: LatLng[];
}

export const Map = ({ waypoints, ...rest }: MapProps) => (
  <WayPointMap
    layerUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    waypoints={waypoints}
    {...rest}
    lineOptions={{
      styles: [
        {
          color: 'red',
        },
      ],
    }}
  />
);

const WayPointMap = styled(ReactLeafletWaypoints)<MapHeight>(({height, width}) => ({
  height: height ?? rem(500),
  width: width ?? rem(500)
}));

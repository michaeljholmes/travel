import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
// @ts-ignore
import { ReactLeafletWaypoints } from 'react-leaflet-waypoints';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ReactLeafletWaypoints
        layerUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        waypoints={[
          { lat: '40.4381311', lng: '-3.8196196' },
          { lat: '42.7576862', lng: '1.5082874' },
        ]}
      />
    </div>
  );
}

export default App;

import React from 'react';
import {useState} from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const [viewport, setViewport] = useState ({
    width: '100%',
    height: '100%',
    latitude: 22.66849,
    longitude: 88.38653,
    zoom: 13,
  });
  return (
    <ReactMapGL
      mapStyle={process.env.MAPBOX_STYLE_URL}
      mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
      {...viewport}
      onMove={evt => setViewport (evt.viewport)}
    />
  );
};

export default Map;

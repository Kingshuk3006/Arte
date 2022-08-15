import React from 'react';
import {useState} from 'react';
import ReactMapGL, {GeolocateControl, NavigationControl} from 'react-map-gl';

const Map = ({locationData}) => {
  // console.log(locationData)
  const [viewport, setViewport] = useState ({
    width: '100%',
    height: '100%',
    latitude: 22,
    longitude: 89,
    zoom: 5,
  });

  const navControlStyle = {
    right: 100,
    top: 200,
  };
  return (
    <ReactMapGL
      mapStyle={process.env.MAPBOX_STYLE_URL}
      mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
      {...viewport}
      onMove={evt => setViewport (evt.viewport)}
    >
      <div style={navControlStyle}>
        <NavigationControl position="bottom-right" />
      </div>
      <GeolocateControl
        position="top-left"
        trackUserLocation
        onGeolocate={e =>
          dispatch ({
            type: 'UPDATE LOCATION',
            payload: {lng: e.coords.longitude, lat: e.coords.latitude},
          })}
      />
    </ReactMapGL>
  );
};

export default Map;

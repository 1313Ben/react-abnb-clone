import { useState, useEffect } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

import './App.scss';
import Flat from '../flat/Flat';
import FlatMarker from '../flat_marker/FlatMarker';

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN
});

const API_URL = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";

const App = () => {
  const [flats, setFlats] = useState([]);
  const [status, setStatus] = useState(false);
  const [center, setCenter] = useState([2.3522, 48.8566]);
  const [selectedFlat, setSelectedFlat] = useState({});

  useEffect(() => {
    fetch(API_URL)
      .then(data => data.json())
      .then(json => {
        console.log("Setting the flats")
        console.log(json)
        setFlats(json)
      });
  }, [status])
  // triggerhelper to fetch data -> everytime when status changes it will trigger useEffect
  // Emptyarray enable run the useEffect only once, otherwise infinity loop without an array
 
  const handleSelect = (id) => {
   // console.log (`FLAT ${id} SELECTED`)
    const newSelectedFlat = flats.find(flat => flat.id === id)
    setSelectedFlat(newSelectedFlat)
    setCenter([newSelectedFlat.lng, newSelectedFlat.lat])
  }

  return (
    <div className="app">
      
      <div className="main">
        <input className="search" />
        
        <div className="flats">
          {flats.map((flat) => {
            return (
              <Flat
                key={flat.id} 
                {...flat}
                handleSelect={handleSelect}
                selected={flat.id === selectedFlat.id} />
            )
            })}
        </div>

        <button onClick={() => setStatus(!status)}>
          Fetch FLATS!
          </button>
        </div>

        <div className="map">
          <Map
            zoom={[14]}
            center={center}
            containerStyle={{ height: '100vh', width: '100%' }}
            style="mapbox://styles/mapbox/streets-v8" >   
            {flats.map(flat => {
              return (
                <FlatMarker
                  key={flat.id}
                  lat={flat.lat}
                  lng={flat.lng}
                  price={flat.price}
                  selected={selectedFlat.id === flat.id} />
              );
            })}
        </Map>
        </div>
  </div>
  );
}

export default App;

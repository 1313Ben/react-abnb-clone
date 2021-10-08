import { useState, useEffect } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

import './App.scss';
import Flat from '../flat/Flat';
import FlatMarker from '../flat_marker/FlatMarker';
import Search from '../search/Search';

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN
});

const API_URL = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";

const App = () => {
  const [flats, setFlats] = useState([]);
  const [status, setStatus] = useState(false);
  const [center, setCenter] = useState([2.3522, 48.8566]);
  const [selectedFlat, setSelectedFlat] = useState({});
  const [searchTxt, setSearchTxt] = useState('');

  // get all flats
  useEffect(() => {
    fetch(API_URL)
      .then(data => data.json())
      .then(json => {
        console.log("Setting the flats")
        console.log(json)
        setFlats(json)
      });
  }, [status])
  // [status] =>  triggerhelper to fetch data -> everytime when status changes it will trigger useEffect
  // [] => Emptyarray enable run the useEffect only once, otherwise infinity loop without an array
 
  // shows selected flat on the map
  const handleSelect = (id) => {
   // console.log (`FLAT ${id} SELECTED`)
    const newSelectedFlat = flats.find(flat => flat.id === id)
    setSelectedFlat(newSelectedFlat)
    setCenter([newSelectedFlat.lng, newSelectedFlat.lat])
  }

  // search for flats
  const handleSearch = (text) => {
    // console.log(text);
    setSearchTxt(text);
  }

  // filtering the flats by search text
  const filtered = flats.filter((flat) => {
    return flat.name.match(new RegExp(searchTxt, 'i')); // 'i' is for case-insensitive 
  })

  return (
    <div className="app">
      
      <div className="main">
        <Search handleSearch={handleSearch}/>
        
        <div className="flats">
          {filtered.map((flat) => {
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

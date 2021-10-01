import './App.scss';
import Flat from '../flat/Flat';
import { useState, useEffect } from 'react';


const API_URL = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";

const App = () => {

  const [flats, setFlats] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then(data => data.json())
      .then(json => {
        console.log("Setting the flats")
        console.log(json)
        setFlats(json)
      });
  }, [status])
  // triggerhelper to fetch data -> everytime when status changes it will fetch
  // Emptyarray enable run the useEffect only once, otherwise infinity loop without an array

  return (
    <div className="app">
      
      <div className="main">
        <input className="search" />
        
        <div className="flats">
          {flats.map((flat) => {
            return <Flat key={flat.id} {...flat} />
          })}
        </div>

        <button onClick={() => setStatus(!status)}>Fetch FLATS!</button>
        <div className="map">
        </div>

      </div>
  </div>
  );
}

export default App;

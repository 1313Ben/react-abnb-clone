import './App.scss';
import Flat from '../flat/Flat';

const App = () => {
  return (
    <div className="app">
      
      <div className="main">
        <input className="search" />
        
        <div className="flats">
          <Flat name="My Flat" price={300} image="https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"/>
          <Flat name="My Flat" price={200} image="https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"/>
          <Flat name="My Flat" price={100} image="https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"/>
        </div>

        <div className="map">
        </div>

      </div>
  </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Map from './components/Map/Map';

const App = () => {
  return (
    <div className="App">
      <Map zoomLevel={3.5} />
    </div>
  );
}

export default App;

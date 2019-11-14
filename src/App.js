import React from 'react';
import './App.css';
import MapWorld from "./component/js/MapWorld";
import NotificationContainer from "./component/js/NotificationContainer";

function App() {
  return (
    <div className="App">

    <MapWorld/>
    <NotificationContainer/>
    </div>
  );
}

export default App;

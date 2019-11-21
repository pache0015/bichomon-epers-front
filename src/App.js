import React from 'react';
import './App.css';
import MapWorld from "./component/js/MapWorld";
import NotificationContainer from "./component/js/NotificationContainer";
import firebase from 'firebase/app';
import {configDB} from "./config/config";
import 'firebase/database';

function App() {

  this.app = firebase.initializeApp(configDB);
  this.db = this.app.database().ref().child('vilmaPalma')
  return (
    <div className="App">

    <MapWorld/>
    <NotificationContainer/>
    </div>
  );
}

export default App;

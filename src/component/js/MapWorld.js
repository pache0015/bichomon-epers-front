import React from 'react';
import '../css/MapWorld.css';
import Gym from "./gym";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

class MapWorld extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            gyms: []
        }
        this.handleGyms = this.handleGyms.bind(this)
        const gymRef = firebase.database().ref('gyms');
        gymRef.on('value', (snapshot) => {
            console.log(snapshot.val());
            const gyms = snapshot.val() ? JSON.parse(snapshot.val()) : []
            this.handleGyms(gyms);
        });
    }
    handleGyms(gyms) {
        this.setState({
            gyms
        })
    }
    render() {
        const gymComponents = this.state.gyms.map((gym, i) => {
            return <Gym nombre={gym.nombre} bicho={gym.bicho} entrenador={gym.entrenador} key={i}/>
        })

        return(
            <div className="map-word">
                {gymComponents}
            </div>
        )
    }
}
export default MapWorld

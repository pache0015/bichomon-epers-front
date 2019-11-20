import React from 'react';
import '../css/MapWorld.css';
import Gym from "./gym";

class MapWorld extends React.Component{
    render() {
        return(
            <div className="map-word">
                <Gym nombre="El gym piola"/>
                <Gym nombre="El gym piola"/>
                <Gym nombre="El gym piola"/>
                <Gym nombre="El gym piola"/>

            </div>
        )
    }
}
export default MapWorld
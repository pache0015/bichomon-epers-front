import React from 'react';
import '../css/Gym.css';

class Gym extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: 'No hay dato',
        }

    }
    render() {
        return(
            <div className="gym-container">
                <h1>{this.props.nombre}</h1>
                <div className="info-gym">
                    <label className="info">Nombre: {this.props.nombre}</label>
                    <label className="info">Bicho campeon: {this.props.bicho}</label>
                    <label className="info">Entrenador campeon: {this.props.entrenador}</label>

                </div>

            </div>
        )
    }


}
export default Gym

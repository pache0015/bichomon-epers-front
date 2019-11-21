import React from 'react';
import '../css/Gym.css';

class Gym extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            bicho: '',
            entrenador:'',
            error: 'No hay dato',
        }

    }
    render() {
        return(
            <div className="gym-container">
                <h1>{this.props.nombre}</h1>
                <div className="info-gym">
                    <label className="info">Nombre: {this.state.nombre}</label>
                    <label className="info">Bicho campeon: {this.state.bicho}</label>
                    <label className="info">Entrenador campeon: {this.state.entrenador}</label>

                </div>

            </div>
        )
    }


}
export default Gym

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
                {this.props.nombre}
                <div className="info-gym">
                    <label className="info">Nombre: {this.state.error}</label>
                    <label className="info">Bicho campeon: {this.state.error}</label>
                    <label className="info">Entrenador campeon: {this.state.error}</label>

                </div>

            </div>
        )
    }


}
export default Gym
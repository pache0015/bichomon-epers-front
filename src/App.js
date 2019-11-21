import React from 'react';
import './App.css';
import MapWorld from "./component/js/MapWorld";
import NotificationContainer from "./component/js/NotificationContainer";
import firebase from 'firebase/app';
import {configDB} from "./config/config";
import 'firebase/database';
import Modal from 'react-modal';
import './component/css/Modal.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            entrenador: '',
            bicho: '',
            gimnasio: '',
        }
        Modal.setAppElement('#root');
        firebase.initializeApp(configDB);
        this.onRequestCloseModal = this.onRequestCloseModal.bind(this)
        this.openModal = this.openModal.bind(this)
        this.handleEntrenador = this.handleEntrenador.bind(this)
        this.handleBicho = this.handleBicho.bind(this)
        this.handleGimnasio = this.handleGimnasio.bind(this)
        this.submit = this.submit.bind(this)
    }

    onRequestCloseModal() {
        this.setState({
            showModal: false
        })
    }

    openModal() {
        this.setState({
            showModal: true
        })
    }

    handleEntrenador(event) {
        this.setState({
            entrenador: event.target.value
        })
    }

    handleBicho(event) {
        this.setState({
            bicho: event.target.value
        })
    }

    handleGimnasio(event) {
        this.setState({
            gimnasio: event.target.value
        })
    }

    submit() {
      if (!this.state.entrenador.trim() || !this.state.bicho.trim() || !this.state.gimnasio.trim()) {
        alert("Dale gil no jodas")
        return
      }
      firebase.database().ref('gyms').push({
        entrenador: this.state.entrenador,
        bicho: this.state.bicho,
        gimnasio: this.state.gimnasio
      }, () => this.onRequestCloseModal())
    }

    render() {
        return (
            <div className="App">

                <MapWorld/>
                <NotificationContainer modalCallback={this.openModal}/>
                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={this.onRequestCloseModal}
                    contentLabel="Example Modal"
                    className="modal"
                    overlayClassName="modal-container">
                    <div className="modal-content">
                        <div className="header">
                            Agrega un nuevo Gym
                        </div>
                        <div className="body">
                            <input onChange={this.handleGimnasio} value={this.state.gimnasio} className="modal-input" type="text" placeholder="Nombre del gimnasio"/>
                            <input onChange={this.handleBicho} value={this.state.bicho} className="modal-input" type="text" placeholder="Nombre del bicho campeon"/>
                            <input onChange={this.handleEntrenador} value={this.state.entrenador} className="modal-input" type="text" placeholder="Nombre del entrenador campeon"/>
                            <button onClick={this.submit} className="modal-button" type="submit">Agregar</button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default App;

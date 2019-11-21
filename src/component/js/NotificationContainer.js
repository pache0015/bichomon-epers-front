import React from 'react';
import '../css/NotificationContainer.css';
import Notification from "./Notification";
import * as firebase from "firebase/app";


class NotificationContainer extends React.Component{
    constructor(props) {
        super(props)
        this.handleResetAll = this.handleResetAll.bind(this)
    }
    handleResetAll() {
        if(window.confirm("Tas seguro ameo?")) {
            firebase.database().ref('gyms').set({});
        }
    }

    render() {
        return(
            <div className="not-container">
                <div className="controller-container">
                    <h1>Buttons</h1>
                    <input className="gym-selected" placeholder="gym selected"/>
                    <button className="controller">Change champion</button>
                    <button className="controller" onClick={this.handleResetAll}>Reset ALL</button>
                    <button className="controller" onClick={this.props.modalCallback}>Add Gym</button>
                </div>
                <div className="nots">
                    <h1>Notifications</h1>
                    <Notification entrenador="Ash " textNotification="fue campeon en " gym="lala"/>
                    <Notification textNotification="Estoy probando el tamaño de esta notificacion"/>
                </div>
            </div>
        )
    }
}
export default NotificationContainer


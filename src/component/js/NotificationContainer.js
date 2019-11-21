import React from 'react';
import '../css/NotificationContainer.css';
import Notification from "./Notification";

class NotificationContainer extends React.Component{


    render() {
        return(
            <div className="not-container">
                <div className="controller-container">
                    <h1>Buttons</h1>
                    <input className="gym-selected" placeholder="gym selected"/>
                    <button className="controller">Change champion</button>
                    <button className="controller">Reset gym</button>
                    <button className="controller">Add champion</button>
                </div>
                <div className="nots">
                    <h1>Notifications</h1>
                    <Notification entrenador="Ash " textNotification="fue campeon en " gym="lala"/>
                    <Notification textNotification="Estoy probando el tamaño de esta notificacion"/>
                    <Notification textNotification="Notificando"/>
                    <Notification textNotification="holaaaaa"/>
                    <Notification textNotification="Estoy probando el tamaño de esta notificacion"/>
                    <Notification textNotification="Notificando"/>
                    <Notification textNotification="holaaaaa"/>
                    <Notification textNotification="Notificando"/>
                    <Notification textNotification="holaaaaa"/>
                    <Notification textNotification="Estoy probando el tamaño de esta notificacion"/>
                    <Notification textNotification="Notificando"/>
                    <Notification textNotification="holaaaaa"/>
                    <Notification textNotification="Notificando"/>
                    <Notification textNotification="holaaaaa"/>
                    <Notification textNotification="Estoy probando el tamaño de esta notificacion"/>
                    <Notification textNotification="Notificando"/>
                    <Notification textNotification="holaaaaa"/>
                    <Notification textNotification="Notificando"/>
                    <Notification textNotification="holaaaaa"/>
                    <Notification textNotification="Estoy probando el tamaño de esta notificacion"/>
                    <Notification textNotification="Notificando"/>
                    <Notification textNotification="holaaaaa"/>
                </div>
            </div>
        )
    }
}
export default NotificationContainer


import React from 'react';
import '../css/NotificationContainer.css';
import Notification from "./Notification";
import * as firebase from "firebase/app";
import Gym from "./gym";


class NotificationContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notifications: '',
        }
        this.handleResetAll = this.handleResetAll.bind(this);
        this.changeChampion =  this.changeChampion.bind(this);
        this.pullNotification = this.pullNotification.bind(this);


        //=======> ESTO HAY QUE SACARLO DESPUES <==========

        localStorage.setItem('gym', 'un gym piola');

    }
    handleResetAll() {
        if(window.confirm("Tas seguro ameo?")) {
            firebase.database().ref('gyms').set({});
        }
    }
    changeChampion(value){

        firebase.database().ref('notification').push({
            usuario: localStorage.getItem('user'),
            accion: value,
            gym: localStorage.getItem('gym')
        }, () => this.pullNotification())
    };
    pullNotification(){
        const notsRef = firebase.database().ref('notification');
        nostRef.on('value', (snapshot) => {
            const notifications = snapshot.val() ? Object.values(snapshot.val()) : []
            this.setState({notification:notifications})
        })

    }

    render() {
        const notificationComponents = this.pullNotification.map((notification, i) => {
            return <Notification entrenador={notification.usuario} textNotification={notification.accion} gym={notification.gym} key={i}/>
        })
        return(
            <div className="not-container">
                <div className="controller-container">
                    <h1>Buttons</h1>
                    <input className="gym-selected" placeholder="gym selected"/>
                    <button className="controller" value={"cambio campeon"} onClick={() => changeChampion(value())}>Change champion</button>
                    <button className="controller" value={"reseteo todo"} onClick={this.handleResetAll}>Reset ALL</button>
                    <button className="controller" value={"añadio un gym"} onClick={this.props.modalCallback}>Add Gym</button>
                </div>
                <div className="nots">
                    <h1>Notifications</h1>
                    {notificationComponents}


                </div>
            </div>
        )
    }
}
export default NotificationContainer


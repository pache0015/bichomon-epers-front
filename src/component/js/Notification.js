import React from 'react';
import '../css/Notification.css'
class Notification extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="notification">
                <h3>{this.props.entrenador}{this.props.textNotification}{this.props.gym}</h3>
            </div>
        )
    }

}
export default Notification
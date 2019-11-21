import React from 'react';
import '../css/Login.css'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error:'',
            user:'',
        };
        this.checkInput = this.checkInput.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.logUser = this.logUser.bind(this);
        this.redirectToNextPage = this.redirectToNextPage.bind(this);
    }
    handleUser(event){
        this.setState({user: event.target.value})
    }
    checkInput = (e) => {
        e.preventDefault();
        this.setState({error: ""});
        if (this.state.user.trim().length < 1) {
            this.setState({error: "Campos vacios..."});
            return;
        }
        this.logUser()
    };

    logUser = () =>{
        localStorage.setItem('user', this.state.user)
        this.redirectToNextPage()
    }
    redirectToNextPage = () =>{
        this.props.history.push('/app')
    }
    render() {
        return(
            <div className="log-container">
                <h1>Logueate</h1>
                <form className="formLog">
                    <div className="inputContainer">
                        <input className="logInput" placeholder="Username" value={this.state.user} onChange={this.handleUser}/>
                    </div>
                    <button type="submit" value="submit" className="btnLog" onClick={this.checkInput}>
                        Ingresar
                    </button>

                </form>
                <label className="errorLog">{this.state.error}</label>
            </div>
        )
    }

}
export default Login